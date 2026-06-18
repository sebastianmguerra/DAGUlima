document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  lucide.createIcons();

  // Elements
  const container = document.getElementById('network-container');
  const searchInput = document.getElementById('course-search');
  const levelBtns = document.querySelectorAll('.level-btn');
  const detailPlaceholder = document.getElementById('detail-placeholder');
  const detailCard = document.getElementById('detail-card');
  const detailTitle = document.getElementById('detail-title');
  const detailCode = document.getElementById('detail-code');
  const detailLevel = document.getElementById('detail-level');
  const detailCredits = document.getElementById('detail-credits');
  const prereqCountBadge = document.getElementById('prereq-count');
  const prereqList = document.getElementById('prereq-list');
  const postreqCountBadge = document.getElementById('postreq-count');
  const postreqList = document.getElementById('postreq-list');
  const btnFit = document.getElementById('btn-fit');
  const btnLock = document.getElementById('btn-lock');
  const btnElectivos = document.getElementById('btn-electivos');
  const btnLayout = document.getElementById('btn-layout');
  const careerSelector = document.getElementById('career-selector');

  // Stats Elements
  const statsObligatorios = document.querySelectorAll('.global-stat-val')[0];
  const statsElectivos = document.querySelectorAll('.global-stat-val')[1];
  const statsCreditos = document.querySelectorAll('.global-stat-val')[2];

  // Global State
  let network = null;
  let nodesDataSet = new vis.DataSet();
  let edgesDataSet = new vis.DataSet();
  let nodesLocked = true;
  let showElectivos = true;
  let isHierarchical = true; // Default to cycle grid
  
  let currentCoursesData = [];
  let coursesMap = {};
  let postreqsMap = {};
  let initialNodes = [];
  let initialEdges = [];

  let activeLevelFilter = 'all';
  let activeSearchQuery = '';

  // Helper to wrap text for node labels
  function wrapText(str, maxLength) {
    const words = str.split(' ');
    let lines = [];
    let currentLine = '';

    words.forEach(word => {
      if ((currentLine + ' ' + word).trim().length <= maxLength) {
        currentLine = (currentLine + ' ' + word).trim();
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    });
    if (currentLine) lines.push(currentLine);
    return lines.join('\n');
  }

  function getBaseBorderColor(course) {
    if (course.type === 'E') return '#f59e0b';   // amber — electivo
    if (course.level <= 2)   return '#38bdf8';   // cyan — estudios generales
    return '#a855f7';                            // purple — carrera obligatoria
  }

  function updateGlobalStats() {
    const obligatorios = currentCoursesData.filter(c => c.type !== 'E');
    const electivos = currentCoursesData.filter(c => c.type === 'E');
    
    let totalCreds = obligatorios.reduce((acc, c) => acc + c.credits, 0);
    let electivosCreds = electivos.reduce((acc, c) => acc + c.credits, 0);

    statsObligatorios.textContent = obligatorios.length;
    statsElectivos.textContent = electivos.length;
    statsCreditos.textContent = `${totalCreds} + El.`;
  }

  function getOptions() {
    return {
      interaction: { 
        hover: true, 
        selectConnectedEdges: false, 
        tooltipDelay: 200,
        dragNodes: !nodesLocked,
        dragView: true,
        zoomView: true
      },
      layout: {
        hierarchical: isHierarchical ? {
          enabled: true,
          direction: 'LR',
          sortMethod: 'directed',
          levelSeparation: 240,
          nodeSpacing: 100,
          treeSpacing: 100
        } : false
      },
      physics: {
        enabled: !nodesLocked,
        solver: 'barnesHut',
        hierarchicalRepulsion: {
          centralGravity: 0.0,
          springLength: 100,
          springConstant: 0.01,
          nodeDistance: 120,
          damping: 0.09
        },
        barnesHut: { 
          gravitationalConstant: -1200, 
          centralGravity: 0.1, 
          springLength: 120, 
          springConstant: 0.04, 
          damping: 0.09, 
          avoidOverlap: 1 
        },
        stabilization: { enabled: false }
      }
    };
  }

  function loadCareer(careerKey) {
    const careerObj = CAREERS_DATA[careerKey];
    if (!careerObj) return;

    if (network) {
      network.destroy();
      network = null;
    }
    nodesDataSet.clear();
    edgesDataSet.clear();
    activeLevelFilter = 'all';
    activeSearchQuery = '';
    searchInput.value = '';
    levelBtns.forEach(b => b.classList.remove('active'));
    document.querySelector('.level-btn[data-level="all"]').classList.add('active');
    hideCourseDetails();
    
    currentCoursesData = careerObj.courses;
    
    coursesMap = {};
    postreqsMap = {};
    currentCoursesData.forEach(c => {
      coursesMap[c.id] = c;
      postreqsMap[c.id] = [];
    });
    
    currentCoursesData.forEach(c => {
      c.reqs.forEach(reqId => {
        if (postreqsMap[reqId]) {
          postreqsMap[reqId].push(c.id);
        }
      });
    });

    let electivesCount = 0;
    const MAX_ELECTIVES_PER_COLUMN = 12;

    initialNodes = currentCoursesData.map(c => {
      let level = c.level;
      
      // Split electives into multiple columns (levels) so they aren't one huge column
      if (c.type === 'E') {
        const columnOffset = Math.floor(electivesCount / MAX_ELECTIVES_PER_COLUMN);
        level = 11 + columnOffset;
        electivesCount++;
      }

      const baseBorderColor = getBaseBorderColor(c);

      return {
        id: c.id,
        label: wrapText(c.name, 25),
        title: c.name,
        level: level, // Used by hierarchical layout
        shape: 'box',
        hidden: false,
        margin: { top: 12, bottom: 12, left: 16, right: 16 },
        color: {
          background: '#0f172a',
          border: baseBorderColor,
          highlight: { background: '#1e293b', border: '#00f0ff' },
          hover: { background: '#1e293b', border: '#00f0ff' }
        },
        font: { color: '#f8fafc', face: 'Plus Jakarta Sans', size: 11, bold: { color: '#f8fafc', size: 11 } },
        borderWidth: 2,
        borderWidthSelected: 3,
        shapeProperties: { borderRadius: 12 }
      };
    });

    initialEdges = [];
    currentCoursesData.forEach(c => {
      c.reqs.forEach(reqId => {
        if (!coursesMap[reqId]) return;
        
        const isElectivoEdge = c.type === 'E';
        initialEdges.push({
          id: `${reqId}-${c.id}`,
          from: reqId,
          to: c.id,
          hidden: false,
          arrows: { to: { enabled: true, scaleFactor: 0.8 } },
          color: {
            color: isElectivoEdge ? 'rgba(245, 158, 11, 0.4)' : 'rgba(148, 163, 184, 0.35)',
            highlight: '#00f0ff',
            hover: '#00f0ff',
            inherit: false
          },
          dashes: isElectivoEdge,
          width: 1.5,
          selectionWidth: 3,
          smooth: { type: 'cubicBezier', forceDirection: 'horizontal', roundness: 0.5 }
        });
      });
    });

    nodesDataSet.add(initialNodes);
    edgesDataSet.add(initialEdges);

    updateGlobalStats();

    network = new vis.Network(container, { nodes: nodesDataSet, edges: edgesDataSet }, getOptions());

    network.on('selectNode', (params) => {
      const selectedId = params.nodes[0];
      highlightDependencies(selectedId);
      showCourseDetails(selectedId);
    });

    network.on('deselectNode', () => {
      resetHighlight();
      hideCourseDetails();
    });
    
    applyFilters();
  }

  // --- Filtering & Selection ---
  function applyFilters() {
    const filteredNodes = [];
    const nodeVisibility = {};

    initialNodes.forEach(n => {
      const course = coursesMap[n.id];
      const isElectivo = course.type === 'E';

      if (isElectivo && !showElectivos) {
        filteredNodes.push({ id: n.id, hidden: true });
        nodeVisibility[n.id] = false;
        return;
      }

      const matchesLevel = activeLevelFilter === 'all' || (!isElectivo && course.level === parseInt(activeLevelFilter));
      const matchesSearch = activeSearchQuery === '' || course.name.toLowerCase().includes(activeSearchQuery) || course.id.includes(activeSearchQuery);

      const updatedNode = { id: n.id, hidden: false };

      if (matchesLevel && matchesSearch) {
        const baseBorder = getBaseBorderColor(course);
        updatedNode.color = {
          background: '#0f172a', border: baseBorder,
          highlight: { background: '#1e293b', border: '#00f0ff' }
        };
        updatedNode.font = { color: '#f8fafc', face: 'Plus Jakarta Sans', size: 11 };
        nodeVisibility[n.id] = true;
      } else {
        updatedNode.color = {
          background: 'rgba(15, 23, 42, 0.1)', border: 'rgba(255, 255, 255, 0.05)',
          highlight: { background: 'rgba(15, 23, 42, 0.1)', border: 'rgba(255, 255, 255, 0.05)' }
        };
        updatedNode.font = { color: 'rgba(148, 163, 184, 0.15)', face: 'Plus Jakarta Sans', size: 11 };
        nodeVisibility[n.id] = false;
      }
      filteredNodes.push(updatedNode);
    });

    // IMPORTANT: only updating style/hidden props so positions remain intact!
    nodesDataSet.update(filteredNodes);

    const filteredEdges = initialEdges.map(e => {
      const fromVisible = nodeVisibility[e.from] !== false;
      const toVisible = nodeVisibility[e.to] !== false;
      const shouldHide = (!showElectivos && coursesMap[e.to] && coursesMap[e.to].type === 'E');
      const bothActive = nodeVisibility[e.from] === true && nodeVisibility[e.to] === true;
      const isElectivoEdge = coursesMap[e.to] && coursesMap[e.to].type === 'E';

      return {
        id: e.id,
        hidden: shouldHide,
        color: {
          color: shouldHide ? 'rgba(0,0,0,0)' : isElectivoEdge ? (bothActive ? 'rgba(245, 158, 11, 0.4)' : 'rgba(245, 158, 11, 0.08)') : (bothActive ? 'rgba(148, 163, 184, 0.35)' : 'rgba(148, 163, 184, 0.05)')
        }
      };
    });
    edgesDataSet.update(filteredEdges);
  }

  function getAncestors(nodeId, visited = new Set()) {
    const course = coursesMap[nodeId];
    if (!course) return visited;
    course.reqs.forEach(reqId => {
      if (!visited.has(reqId)) {
        visited.add(reqId);
        getAncestors(reqId, visited);
      }
    });
    return visited;
  }

  function getDescendants(nodeId, visited = new Set()) {
    const postReqs = postreqsMap[nodeId] || [];
    postReqs.forEach(id => {
      if (!visited.has(id)) {
        visited.add(id);
        getDescendants(id, visited);
      }
    });
    return visited;
  }

  function highlightDependencies(selectedId) {
    const ancestors = getAncestors(selectedId);
    const descendants = getDescendants(selectedId);

    const updatedNodes = initialNodes.map(n => {
      const updatedNode = { id: n.id }; // ONLY update styles to prevent layout snapping
      if (n.id === selectedId) {
        updatedNode.color = { background: '#0f172a', border: '#00f0ff', highlight: { background: '#1e293b', border: '#00f0ff' } };
        updatedNode.font = { color: '#00f0ff' };
      } else if (ancestors.has(n.id)) {
        updatedNode.color = { background: '#0f172a', border: '#f43f5e', highlight: { background: '#1e293b', border: '#f43f5e' } };
        updatedNode.font = { color: '#f43f5e' };
      } else if (descendants.has(n.id)) {
        updatedNode.color = { background: '#0f172a', border: '#10b981', highlight: { background: '#1e293b', border: '#10b981' } };
        updatedNode.font = { color: '#10b981' };
      } else {
        updatedNode.color = { background: 'rgba(15, 23, 42, 0.1)', border: 'rgba(255, 255, 255, 0.03)', highlight: { background: 'rgba(15, 23, 42, 0.1)', border: 'rgba(255, 255, 255, 0.03)' } };
        updatedNode.font = { color: 'rgba(148, 163, 184, 0.1)', face: 'Plus Jakarta Sans', size: 11 };
      }
      return updatedNode;
    });
    nodesDataSet.update(updatedNodes);

    const updatedEdges = initialEdges.map(e => {
      let edgeColor = 'rgba(148, 163, 184, 0.05)';
      let width = 1;
      if (e.to === selectedId || (ancestors.has(e.to) && ancestors.has(e.from))) {
        edgeColor = '#f43f5e'; width = 2.5;
      } else if (e.from === selectedId || (descendants.has(e.from) && descendants.has(e.to))) {
        edgeColor = '#10b981'; width = 2.5;
      }
      return { id: e.id, width: width, color: { color: edgeColor, highlight: edgeColor, inherit: false } };
    });
    edgesDataSet.update(updatedEdges);
  }

  function resetHighlight() {
    applyFilters();
  }

  // --- Sidebar Logic ---
  function showCourseDetails(courseId) {
    const course = coursesMap[courseId];
    if (!course) return;

    detailTitle.textContent = course.name;
    detailCode.textContent = `COD: ${course.id}`;
    
    const isElectivo = course.type === 'E';
    detailLevel.textContent = isElectivo ? 'Electivo' : `Nivel ${course.level}`;
    if (isElectivo) {
      detailLevel.style.cssText = 'background: rgba(245,158,11,0.15); border-color: rgba(245,158,11,0.35); color: #f59e0b;';
    } else {
      detailLevel.style.cssText = '';
    }
    detailCredits.textContent = course.credits;

    prereqList.innerHTML = '';
    prereqCountBadge.textContent = course.reqs.length;
    if (course.reqs.length === 0) {
      prereqList.innerHTML = '<span style="font-size: 0.8rem; padding: 4px 8px; color: #64748b;">Ninguno (Curso base)</span>';
    } else {
      course.reqs.forEach(reqId => {
        const reqCourse = coursesMap[reqId];
        if (!reqCourse) return;
        const item = document.createElement('div');
        item.className = 'relation-item';
        item.innerHTML = `<span>${reqCourse.name}</span><span class="relation-item-level">Nivel ${reqCourse.level}</span>`;
        item.addEventListener('click', () => selectCourseNode(reqId));
        prereqList.appendChild(item);
      });
    }

    const postReqs = postreqsMap[courseId] || [];
    postreqList.innerHTML = '';
    postreqCountBadge.textContent = postReqs.length;
    if (postReqs.length === 0) {
      postreqList.innerHTML = '<span style="font-size: 0.8rem; padding: 4px 8px; color: #64748b;">Ninguno (Curso terminal)</span>';
    } else {
      postReqs.forEach(postId => {
        const postCourse = coursesMap[postId];
        if (!postCourse) return;
        const item = document.createElement('div');
        item.className = 'relation-item';
        const lvlText = postCourse.type === 'E' ? 'Electivo' : `Nivel ${postCourse.level}`;
        item.innerHTML = `<span>${postCourse.name}</span><span class="relation-item-level">${lvlText}</span>`;
        item.addEventListener('click', () => selectCourseNode(postId));
        postreqList.appendChild(item);
      });
    }

    detailPlaceholder.classList.add('hidden');
    detailCard.classList.remove('hidden');
  }

  function hideCourseDetails() {
    detailCard.classList.add('hidden');
    detailPlaceholder.classList.remove('hidden');
  }

  function selectCourseNode(courseId) {
    const targetCourse = coursesMap[courseId];
    if (targetCourse && targetCourse.type === 'E' && !showElectivos) {
      showElectivos = true;
      btnElectivos.classList.add('toggle-active');
      btnElectivos.classList.remove('toggle-inactive');
      applyFilters();
    }
    network.selectNodes([courseId]);
    highlightDependencies(courseId);
    showCourseDetails(courseId);
    network.focus(courseId, { scale: 1.1, animation: { duration: 500 } });
  }

  // --- Controls & Events ---
  careerSelector.addEventListener('change', (e) => {
    loadCareer(e.target.value);
  });

  levelBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      levelBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeLevelFilter = btn.getAttribute('data-level');
      applyFilters();
    });
  });

  searchInput.addEventListener('input', (e) => {
    activeSearchQuery = e.target.value.toLowerCase().trim();
    applyFilters();
  });

  btnLayout.addEventListener('click', () => {
    isHierarchical = !isHierarchical;
    const layoutIcon = document.getElementById('layout-icon');
    const layoutText = document.getElementById('layout-text');
    
    if (isHierarchical) {
      layoutText.textContent = 'Diseño: Ciclos';
      layoutIcon.setAttribute('data-lucide', 'layout-grid');
      btnLayout.classList.remove('toggle-inactive');
    } else {
      layoutText.textContent = 'Diseño: Libre';
      layoutIcon.setAttribute('data-lucide', 'share-2');
      btnLayout.classList.add('toggle-inactive');
    }
    lucide.createIcons();
    network.setOptions(getOptions());
    if(isHierarchical) network.fit();
  });

  btnElectivos.addEventListener('click', () => {
    showElectivos = !showElectivos;
    btnElectivos.classList.toggle('toggle-active', showElectivos);
    btnElectivos.classList.toggle('toggle-inactive', !showElectivos);
    applyFilters();
    if (network.getSelectedNodes().length > 0) {
      network.unselectAll();
      hideCourseDetails();
      resetHighlight();
    }
  });

  btnFit.addEventListener('click', () => {
    if(network) network.fit({ animation: { duration: 800 } });
  });

  btnLock.addEventListener('click', () => {
    toggleLock(!nodesLocked);
  });

  function toggleLock(locked) {
    nodesLocked = locked;
    if(network) network.setOptions(getOptions());
    const lockIcon = document.getElementById('lock-icon');
    const lockText = document.getElementById('lock-text');

    if (locked) {
      lockText.textContent = 'Nodos: Fijos';
      lockIcon.setAttribute('data-lucide', 'lock');
      btnLock.classList.add('toggle-active');
    } else {
      lockText.textContent = 'Nodos: Móviles';
      lockIcon.setAttribute('data-lucide', 'unlock');
      btnLock.classList.remove('toggle-active');
    }
    lucide.createIcons();
  }

  // Initialize Default Career
  loadCareer('sistemas');
});
