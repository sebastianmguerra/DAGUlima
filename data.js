// Datos de las Mallas Curriculares
const CAREERS_DATA = {
  "sistemas": {
    "name": "Ingeniería de Sistemas 2026-1",
    "courses": [
      {
        "id": "510003",
        "name": "LENGUAJE Y COMUNICACIÓN I",
        "level": 1,
        "type": "O",
        "credits": 4,
        "reqs": []
      },
      {
        "id": "510005",
        "name": "INTRODUCCIÓN A LA INGENIERÍA",
        "level": 1,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "510006",
        "name": "PROCESOS PSICOLÓGICOS",
        "level": 1,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6508",
        "name": "METODOLOGÍAS DE INVESTIGACIÓN",
        "level": 1,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "510007",
        "name": "ÉTICA CIUDADANA",
        "level": 1,
        "type": "O",
        "credits": 2,
        "reqs": []
      },
      {
        "id": "510014",
        "name": "PRECÁLCULO",
        "level": 1,
        "type": "O",
        "credits": 5,
        "reqs": []
      },
      {
        "id": "6511",
        "name": "LENGUAJE Y COMUNICACIÓN II",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": [
          "510003"
        ]
      },
      {
        "id": "510011",
        "name": "INTRODUCCIÓN AL COMERCIO INTERNACIONAL",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6384",
        "name": "ÁLGEBRA LINEAL",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": [
          "510014"
        ]
      },
      {
        "id": "510015",
        "name": "FUNDAMENTOS DE ECONOMÍA",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "510010",
        "name": "FILOSOFÍA APLICADA",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6503",
        "name": "CÁLCULO I",
        "level": 2,
        "type": "O",
        "credits": 5,
        "reqs": [
          "510014"
        ]
      },
      {
        "id": "560042",
        "name": "CÁLCULO II",
        "level": 3,
        "type": "O",
        "credits": 5,
        "reqs": [
          "6503"
        ]
      },
      {
        "id": "560038",
        "name": "SISTEMAS ORGANIZACIONALES / ORGANIZATIONAL SYSTEMS",
        "level": 3,
        "type": "O",
        "credits": 2,
        "reqs": [
          "510015"
        ]
      },
      {
        "id": "650053",
        "name": "FÍSICA PARA SISTEMAS",
        "level": 3,
        "type": "O",
        "credits": 4,
        "reqs": []
      },
      {
        "id": "650054",
        "name": "INTRODUCCIÓN A LA PROGRAMACIÓN",
        "level": 3,
        "type": "O",
        "credits": 4,
        "reqs": []
      },
      {
        "id": "560040",
        "name": "INTELIGENCIA ARTIFICIAL APLICADA",
        "level": 3,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "650055",
        "name": "ESTRUCTURAS DISCRETAS DE COMPUTACIÓN",
        "level": 3,
        "type": "O",
        "credits": 4,
        "reqs": []
      },
      {
        "id": "560047",
        "name": "CÁLCULO III",
        "level": 4,
        "type": "O",
        "credits": 3,
        "reqs": [
          "560042"
        ]
      },
      {
        "id": "560046",
        "name": "ESTADÍSTICA Y PROBABILIDAD",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": [
          "6503"
        ]
      },
      {
        "id": "650008",
        "name": "MODELACIÓN E INTEGRACIÓN DE SISTEMAS",
        "level": 4,
        "type": "O",
        "credits": 3,
        "reqs": [
          "560040"
        ]
      },
      {
        "id": "650056",
        "name": "ARQUITECTURA DE COMPUTADORAS",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": [
          "650053"
        ]
      },
      {
        "id": "560043",
        "name": "COSTEO DE OPERACIONES",
        "level": 4,
        "type": "O",
        "credits": 3,
        "reqs": [
          "560038"
        ]
      },
      {
        "id": "650086",
        "name": "PROGRAMACIÓN ORIENTADA A OBJETOS",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": [
          "650055",
          "650054"
        ]
      },
      {
        "id": "560048",
        "name": "INVESTIGACIÓN DE OPERACIONES I",
        "level": 5,
        "type": "O",
        "credits": 4,
        "reqs": [
          "560047"
        ]
      },
      {
        "id": "650057",
        "name": "SISTEMAS OPERATIVOS",
        "level": 5,
        "type": "O",
        "credits": 4,
        "reqs": [
          "650056"
        ]
      },
      {
        "id": "650058",
        "name": "ESTADÍSTICA APLICADA",
        "level": 5,
        "type": "O",
        "credits": 4,
        "reqs": [
          "560046"
        ]
      },
      {
        "id": "650009",
        "name": "DESARROLLO DE COMPETENCIAS GERENCIALES",
        "level": 5,
        "type": "O",
        "credits": 3,
        "reqs": [
          "560038"
        ]
      },
      {
        "id": "650059",
        "name": "ESTRUCTURAS DE DATOS I",
        "level": 5,
        "type": "O",
        "credits": 4,
        "reqs": [
          "650086"
        ]
      },
      {
        "id": "650060",
        "name": "MODELAMIENTO DE BASE DE DATOS",
        "level": 5,
        "type": "O",
        "credits": 4,
        "reqs": [
          "650086"
        ]
      },
      {
        "id": "650010",
        "name": "INGENIERÍA DE PROCESOS DE NEGOCIO",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "560048"
        ]
      },
      {
        "id": "650015",
        "name": "REDES DE COMPUTADORAS",
        "level": 6,
        "type": "O",
        "credits": 4,
        "reqs": [
          "650057"
        ]
      },
      {
        "id": "650018",
        "name": "SIMULACIÓN",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "650008"
        ]
      },
      {
        "id": "650061",
        "name": "ESTRUCTURAS DE DATOS II",
        "level": 6,
        "type": "O",
        "credits": 4,
        "reqs": [
          "650059"
        ]
      },
      {
        "id": "650022",
        "name": "PROGRAMACIÓN WEB",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "650059"
        ]
      },
      {
        "id": "650016",
        "name": "GESTIÓN FINANCIERA",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "560043"
        ]
      },
      {
        "id": "650062",
        "name": "SISTEMAS DE INTELIGENCIA EMPRESARIAL",
        "level": 7,
        "type": "O",
        "credits": 4,
        "reqs": [
          "650060"
        ]
      },
      {
        "id": "650019",
        "name": "GESTIÓN DE OPERACIONES",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": [
          "650010"
        ]
      },
      {
        "id": "650063",
        "name": "INGENIERÍA DE SOFTWARE I",
        "level": 7,
        "type": "O",
        "credits": 4,
        "reqs": [
          "650060"
        ]
      },
      {
        "id": "650064",
        "name": "APRENDIZAJE DE MÁQUINA / MACHINE LEARNING",
        "level": 7,
        "type": "O",
        "credits": 4,
        "reqs": [
          "650058"
        ]
      },
      {
        "id": "650065",
        "name": "CIBERSEGURIDAD / CYBERSECURITY",
        "level": 7,
        "type": "O",
        "credits": 4,
        "reqs": [
          "650015"
        ]
      },
      {
        "id": "650066",
        "name": "PROPUESTA DE INVESTIGACIÓN",
        "level": 8,
        "type": "O",
        "credits": 3,
        "reqs": [
          "650018"
        ]
      },
      {
        "id": "650028",
        "name": "SISTEMAS ERP",
        "level": 8,
        "type": "O",
        "credits": 3,
        "reqs": [
          "650019"
        ]
      },
      {
        "id": "650042",
        "name": "AUDITORÍA Y CONTROL DE SISTEMAS",
        "level": 8,
        "type": "O",
        "credits": 3,
        "reqs": [
          "650016"
        ]
      },
      {
        "id": "1327",
        "name": "INGENIERÍA DE SOFTWARE II",
        "level": 8,
        "type": "O",
        "credits": 4,
        "reqs": [
          "650063"
        ]
      },
      {
        "id": "650033",
        "name": "PLANEAMIENTO ESTRATÉGICO",
        "level": 9,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "5674",
        "name": "GESTIÓN DE PROYECTOS",
        "level": 9,
        "type": "O",
        "credits": 3,
        "reqs": [
          "650042"
        ]
      },
      {
        "id": "650035",
        "name": "SEMINARIO DE INVESTIGACIÓN I",
        "level": 9,
        "type": "O",
        "credits": 4,
        "reqs": [
          "650066"
        ]
      },
      {
        "id": "650067",
        "name": "SEGURIDAD DE SISTEMAS",
        "level": 9,
        "type": "O",
        "credits": 4,
        "reqs": [
          "650065"
        ]
      },
      {
        "id": "650040",
        "name": "SEMINARIO DE INVESTIGACIÓN II",
        "level": 10,
        "type": "O",
        "credits": 4,
        "reqs": [
          "650035"
        ]
      },
      {
        "id": "650068",
        "name": "GESTIÓN DE SERVICIOS DIGITALES",
        "level": 10,
        "type": "O",
        "credits": 4,
        "reqs": []
      },
      {
        "id": "650069",
        "name": "PROYECTO INTEGRADOR DE SISTEMAS",
        "level": 10,
        "type": "O",
        "credits": 4,
        "reqs": [
          "5674"
        ]
      },
      {
        "id": "650070",
        "name": "PARADIGMAS DE PROGRAMACIÓN",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "650012",
        "name": "INTERNET DE LAS COSAS / INTERNET OF THINGS",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "650071",
        "name": "GESTIÓN DE BASE DE DATOS",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "650074",
        "name": "INGENIERÍA DEL CONOCIMIENTO",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "650077",
        "name": "SISTEMAS DISTRIBUIDOS",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "650078",
        "name": "ANALÍTICA DE NEGOCIOS",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "650025",
        "name": "COMPUTACIÓN EN LA NUBE",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "650080",
        "name": "INNOVACIÓN DIGITAL",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "650081",
        "name": "PROYECTO DE VIDEOJUEGOS",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "650011",
        "name": "INTERACCIÓN HUMANO COMPUTADORA / HUMAN COMPUTER INTERACTION",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "650083",
        "name": "ARQUITECTURA DE TECNOLOGÍAS DE LA INFORMACIÓN",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "650084",
        "name": "DEVOPS",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "650085",
        "name": "ARQUITECTURA DE SOFTWARE",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "520074",
        "name": "SEGURIDAD, SALUD OCUPACIONAL Y BIENESTAR ORGANIZACIONAL",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "650072",
        "name": "ANÁLISIS Y DISEÑO DE ALGORITMOS",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "650061"
        ]
      },
      {
        "id": "650073",
        "name": "REDES AVANZADAS",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "650015"
        ]
      },
      {
        "id": "650075",
        "name": "DEEP LEARNING",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "650064"
        ]
      },
      {
        "id": "650030",
        "name": "PROGRAMACIÓN MÓVIL",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "650022"
        ]
      },
      {
        "id": "650076",
        "name": "TÓPICOS AVANZADOS EN CIBERSEGURIDAD",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "650065"
        ]
      },
      {
        "id": "650044",
        "name": "ANALÍTICA CON BIG DATA",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "650062"
        ]
      },
      {
        "id": "650079",
        "name": "PROYECTO DE DESARROLLO DE SOFTWARE",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "1327"
        ]
      },
      {
        "id": "650082",
        "name": "ARQUITECTURA EMPRESARIAL",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "650033"
        ]
      }
    ]
  },
  "industrial": {
    "name": "Ingeniería Industrial 2026-1",
    "courses": [
      {
        "id": "510003",
        "name": "Lenguaje y Comunicación I",
        "level": 1,
        "type": "O",
        "credits": 4,
        "reqs": []
      },
      {
        "id": "510006",
        "name": "Procesos Psicológicos",
        "level": 1,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "510007",
        "name": "Ética Ciudadana",
        "level": 1,
        "type": "O",
        "credits": 2,
        "reqs": []
      },
      {
        "id": "510005",
        "name": "Introducción a la Ingeniería",
        "level": 1,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6508",
        "name": "Metodologías de Investigación",
        "level": 1,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "510014",
        "name": "Precálculo",
        "level": 1,
        "type": "O",
        "credits": 5,
        "reqs": []
      },
      {
        "id": "6505",
        "name": "Lenguaje y Comunicación II",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": [
          "510003"
        ]
      },
      {
        "id": "510010",
        "name": "Filosofía Aplicada",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "510015",
        "name": "Fundamentos de Economía",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "510011",
        "name": "Introducción al Comercio Internacional",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6384",
        "name": "Álgebra Lineal",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": [
          "510014"
        ]
      },
      {
        "id": "6503",
        "name": "Cálculo I",
        "level": 2,
        "type": "O",
        "credits": 5,
        "reqs": [
          "510014",
          "IND_011"
        ]
      },
      {
        "id": "IND_001",
        "name": "Systems",
        "level": 3,
        "type": "O",
        "credits": 2,
        "reqs": [
          "510015"
        ]
      },
      {
        "id": "560039",
        "name": "Diseño Asistido por el Computador",
        "level": 3,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6384"
        ]
      },
      {
        "id": "560040",
        "name": "Inteligencia Artificial Aplicada",
        "level": 3,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "560041",
        "name": "Física I",
        "level": 3,
        "type": "O",
        "credits": 5,
        "reqs": [
          "6503"
        ]
      },
      {
        "id": "5643",
        "name": "Química General",
        "level": 3,
        "type": "O",
        "credits": 4,
        "reqs": []
      },
      {
        "id": "560042",
        "name": "Cálculo II",
        "level": 3,
        "type": "O",
        "credits": 5,
        "reqs": [
          "6503"
        ]
      },
      {
        "id": "560043",
        "name": "Costeo de Operaciones",
        "level": 4,
        "type": "O",
        "credits": 3,
        "reqs": [
          "IND_001"
        ]
      },
      {
        "id": "560044",
        "name": "Fundamentos de Programación",
        "level": 4,
        "type": "O",
        "credits": 3,
        "reqs": [
          "560040"
        ]
      },
      {
        "id": "560045",
        "name": "Física II",
        "level": 4,
        "type": "O",
        "credits": 5,
        "reqs": [
          "560041"
        ]
      },
      {
        "id": "560046",
        "name": "Estadística y Probabilidad",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": [
          "6503"
        ]
      },
      {
        "id": "5647",
        "name": "Mecánica",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": [
          "560039",
          "560041"
        ]
      },
      {
        "id": "560047",
        "name": "Cálculo III",
        "level": 4,
        "type": "O",
        "credits": 3,
        "reqs": [
          "560042"
        ]
      },
      {
        "id": "560048",
        "name": "Investigación de Operaciones I",
        "level": 5,
        "type": "O",
        "credits": 4,
        "reqs": [
          "560044"
        ]
      },
      {
        "id": "IND_002",
        "name": "Operations and Logistics Fundamentals",
        "level": 5,
        "type": "O",
        "credits": 4,
        "reqs": [
          "560043"
        ]
      },
      {
        "id": "560050",
        "name": "Ingeniería Económica",
        "level": 5,
        "type": "O",
        "credits": 4,
        "reqs": [
          "560043"
        ]
      },
      {
        "id": "560051",
        "name": "Electricidad y Electrónica",
        "level": 5,
        "type": "O",
        "credits": 3,
        "reqs": [
          "560045"
        ]
      },
      {
        "id": "560052",
        "name": "Ecuaciones Diferenciales",
        "level": 5,
        "type": "O",
        "credits": 3,
        "reqs": [
          "560047"
        ]
      },
      {
        "id": "560053",
        "name": "Diseño de Experimentos",
        "level": 5,
        "type": "O",
        "credits": 4,
        "reqs": [
          "560046"
        ]
      },
      {
        "id": "560054",
        "name": "Investigación de Operaciones II",
        "level": 6,
        "type": "O",
        "credits": 4,
        "reqs": [
          "560048"
        ]
      },
      {
        "id": "560055",
        "name": "Ergonomía y Diseño del Trabajo",
        "level": 6,
        "type": "O",
        "credits": 4,
        "reqs": [
          "560046"
        ]
      },
      {
        "id": "560056",
        "name": "Innovación en Ingeniería",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "5647",
          "560051"
        ]
      },
      {
        "id": "560012",
        "name": "Planeamiento y Control de Operaciones",
        "level": 6,
        "type": "O",
        "credits": 4,
        "reqs": [
          "IND_002"
        ]
      },
      {
        "id": "560057",
        "name": "Procesos Industriales",
        "level": 6,
        "type": "O",
        "credits": 4,
        "reqs": [
          "560045",
          "5643"
        ]
      },
      {
        "id": "IND_003",
        "name": "Electivo",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "560058",
        "name": "Ingeniería Financiera",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": [
          "560050"
        ]
      },
      {
        "id": "560059",
        "name": "Diseño de Instalaciones",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": [
          "560055"
        ]
      },
      {
        "id": "560060",
        "name": "Inteligencia de Negocios",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "560061",
        "name": "Modelos de Sistemas Logísticos",
        "level": 7,
        "type": "O",
        "credits": 4,
        "reqs": [
          "IND_002"
        ]
      },
      {
        "id": "560062",
        "name": "Calidad / Quality",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": [
          "560053"
        ]
      },
      {
        "id": "560063",
        "name": "Procesos de Manufactura",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": [
          "560056"
        ]
      },
      {
        "id": "IND_004",
        "name": "Electivo",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "560064",
        "name": "Simulación de Procesos",
        "level": 8,
        "type": "O",
        "credits": 4,
        "reqs": [
          "560054"
        ]
      },
      {
        "id": "560065",
        "name": "Modelamiento Predictivo de Datos",
        "level": 8,
        "type": "O",
        "credits": 3,
        "reqs": [
          "560060"
        ]
      },
      {
        "id": "560066",
        "name": "Sistemas Integrados de Gestión",
        "level": 8,
        "type": "O",
        "credits": 3,
        "reqs": [
          "560062"
        ]
      },
      {
        "id": "560067",
        "name": "Gestión de Proyectos",
        "level": 8,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "560068",
        "name": "Análisis de Problemas de Ingeniería",
        "level": 8,
        "type": "O",
        "credits": 3,
        "reqs": [
          "560061",
          "560062"
        ]
      },
      {
        "id": "560069",
        "name": "Automatización Industrial",
        "level": 8,
        "type": "O",
        "credits": 3,
        "reqs": [
          "560063"
        ]
      },
      {
        "id": "IND_005",
        "name": "Electivo",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "560070",
        "name": "Ética y Gestión Humana",
        "level": 9,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "560071",
        "name": "Proyecto de Ingeniería Aplicada I",
        "level": 9,
        "type": "O",
        "credits": 4,
        "reqs": [
          "560068"
        ]
      },
      {
        "id": "560072",
        "name": "Ingeniería Comercial/ Commercial Engineering",
        "level": 9,
        "type": "O",
        "credits": 3,
        "reqs": [
          "560061"
        ]
      },
      {
        "id": "IND_006",
        "name": "Electivo",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "IND_007",
        "name": "Electivo",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "560073",
        "name": "Proyecto De Ingeniería Aplicada II",
        "level": 10,
        "type": "O",
        "credits": 4,
        "reqs": [
          "560071",
          "560064"
        ]
      },
      {
        "id": "560074",
        "name": "Gerencia Estratégica / Strategic Management",
        "level": 10,
        "type": "O",
        "credits": 4,
        "reqs": [
          "560072",
          "560058"
        ]
      },
      {
        "id": "IND_008",
        "name": "Electivo",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "IND_009",
        "name": "Electivo",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "IND_010",
        "name": "Electivo",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6",
        "name": "560101 Ingeniería de Seguridad",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6",
        "name": "560076 Taller de Liderazgo",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6",
        "name": "560077 Programación para Ingeniería",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "7",
        "name": "560078 Sistemas de Información Gerencial",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "IND_011",
        "name": "Organizacional",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "7",
        "name": "5665 Taller de Habilidades Gerenciales",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "9",
        "name": "560079 Gestión de Proyectos de Diseño",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "8",
        "name": "560102 Materiales en la Manufactura",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "10",
        "name": "560081 Transformación Digital",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "IND_012",
        "name": "de Datos",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "10",
        "name": "560083 Estrategia de Inteligencia Empresarial",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "9",
        "name": "560084 Supply Chain Management",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "9",
        "name": "560085 Compras y Gestión del Abastecimiento",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "10",
        "name": "5673 Juego de Negocios",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "9",
        "name": "5662 Formulación y Evaluación de Proyectos",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "9",
        "name": "560032 Metodologías Ágiles",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "10",
        "name": "560035 Dirección en Implementación de Proyectos",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "9",
        "name": "560087 Gestión del Comercio Internacional",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "8",
        "name": "560088 Creatividad, Innovación y Emprendimiento",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "10",
        "name": "560089 Diseño de Proyectos Sostenibles",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "10",
        "name": "560090 Tecnologías de Programación",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "9",
        "name": "560091 Diseño y Prototipado",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "10",
        "name": "560092 Robotic Process Automation",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "9",
        "name": "560093 Machine Learning",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "9",
        "name": "560094 Herramientas Informáticas",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "8",
        "name": "560095 Lean Six Sigma",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "IND_013",
        "name": "Workshop",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "10",
        "name": "560097 Ingeniería del Transporte y Distribución",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "8",
        "name": "5685 Gestión de Operaciones de Servicios",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "10",
        "name": "560098 Gestión de Recursos",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "10",
        "name": "560099 Gestión de Riesgos y Portafolios",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "10",
        "name": "560029 Gerencia B2b",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "10",
        "name": "560005 Herramientas de Marketing Digital",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "9",
        "name": "560100 Sostenibilidad Industrial",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      }
    ]
  },
  "economia": {
    "name": "Economía 2026-1",
    "courses": [
      {
        "id": "510003",
        "name": "Lenguaje y Comunicación I",
        "level": 1,
        "type": "O",
        "credits": 4,
        "reqs": []
      },
      {
        "id": "510006",
        "name": "Procesos Psicológicos",
        "level": 1,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "510007",
        "name": "Ética Ciudadana",
        "level": 1,
        "type": "O",
        "credits": 2,
        "reqs": []
      },
      {
        "id": "510008",
        "name": "Historia Económica Nacional Contemporánea",
        "level": 1,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6508",
        "name": "Metodologías de Investigación",
        "level": 1,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "510014",
        "name": "Precálculo",
        "level": 1,
        "type": "O",
        "credits": 5,
        "reqs": []
      },
      {
        "id": "6511",
        "name": "Lenguaje y Comunicación II",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": [
          "510003"
        ]
      },
      {
        "id": "510010",
        "name": "Filosofía Aplicada",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "510015",
        "name": "Fundamentos de Economía",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "510011",
        "name": "Introducción al Comercio Internacional",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6384",
        "name": "Álgebra Lineal",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": [
          "510014"
        ]
      },
      {
        "id": "6337",
        "name": "Cálculo I",
        "level": 2,
        "type": "O",
        "credits": 5,
        "reqs": [
          "510014"
        ]
      },
      {
        "id": "530032",
        "name": "Contabilidad para Economistas",
        "level": 3,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6337"
        ]
      },
      {
        "id": "530033",
        "name": "Métodos Matemáticos I",
        "level": 3,
        "type": "O",
        "credits": 4,
        "reqs": [
          "6337"
        ]
      },
      {
        "id": "1464",
        "name": "Estadística General",
        "level": 3,
        "type": "O",
        "credits": 4,
        "reqs": [
          "6384"
        ]
      },
      {
        "id": "530034",
        "name": "Historia del Pensamiento Económico",
        "level": 3,
        "type": "O",
        "credits": 3,
        "reqs": [
          "510015"
        ]
      },
      {
        "id": "530035",
        "name": "Herramientas Informáticas para Economistas",
        "level": 3,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6384"
        ]
      },
      {
        "id": "530066",
        "name": "Introducción a la Microeconomía",
        "level": 3,
        "type": "O",
        "credits": 4,
        "reqs": [
          "510015",
          "6337"
        ]
      },
      {
        "id": "530002",
        "name": "Teoría Microeconómica I",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": [
          "530033",
          "530066"
        ]
      },
      {
        "id": "1462",
        "name": "Estadística Aplicada I",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": [
          "1464"
        ]
      },
      {
        "id": "3256",
        "name": "Teoría Macroeconómica I",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": [
          "530033",
          "530066"
        ]
      },
      {
        "id": "530036",
        "name": "Métodos Matemáticos II",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": [
          "530033"
        ]
      },
      {
        "id": "530037",
        "name": "Ciencia de Datos",
        "level": 4,
        "type": "O",
        "credits": 3,
        "reqs": [
          "530035"
        ]
      },
      {
        "id": "530038",
        "name": "Historia de la Economía Peruana",
        "level": 4,
        "type": "O",
        "credits": 3,
        "reqs": [
          "530034"
        ]
      },
      {
        "id": "530039",
        "name": "Teoría Microeconómica II",
        "level": 5,
        "type": "O",
        "credits": 4,
        "reqs": [
          "530002"
        ]
      },
      {
        "id": "530004",
        "name": "Estadística Aplicada II",
        "level": 5,
        "type": "O",
        "credits": 4,
        "reqs": [
          "530037",
          "1462"
        ]
      },
      {
        "id": "530040",
        "name": "Teoría Macroeconómica II",
        "level": 5,
        "type": "O",
        "credits": 4,
        "reqs": [
          "530038",
          "3256"
        ]
      },
      {
        "id": "530041",
        "name": "Métodos Matemáticos III",
        "level": 5,
        "type": "O",
        "credits": 4,
        "reqs": [
          "530036"
        ]
      },
      {
        "id": "530042",
        "name": "Matemáticas Financieras y Actuariales",
        "level": 5,
        "type": "O",
        "credits": 3,
        "reqs": [
          "530036",
          "530032"
        ]
      },
      {
        "id": "530043",
        "name": "Análisis Financiero",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "530042"
        ]
      },
      {
        "id": "530006",
        "name": "Economía Internacional",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "530039"
        ]
      },
      {
        "id": "530044",
        "name": "Teoría Macroeconómica III",
        "level": 6,
        "type": "O",
        "credits": 4,
        "reqs": [
          "530040"
        ]
      },
      {
        "id": "530045",
        "name": "Métodos Matemáticos IV",
        "level": 6,
        "type": "O",
        "credits": 4,
        "reqs": [
          "530041"
        ]
      },
      {
        "id": "530008",
        "name": "Teoría de Juegos",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "530039"
        ]
      },
      {
        "id": "3304",
        "name": "Econometría I",
        "level": 6,
        "type": "O",
        "credits": 5,
        "reqs": [
          "530041",
          "530004"
        ]
      },
      {
        "id": "530046",
        "name": "Economía Financiera I",
        "level": 7,
        "type": "O",
        "credits": 4,
        "reqs": [
          "530043"
        ]
      },
      {
        "id": "530010",
        "name": "Organización Industrial",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": [
          "530006",
          "530008"
        ]
      },
      {
        "id": "530011",
        "name": "Teoría y Política Monetaria",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": [
          "530044"
        ]
      },
      {
        "id": "530047",
        "name": "Economía Peruana Sectorial",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": [
          "530044"
        ]
      },
      {
        "id": "530048",
        "name": "Teoría Bancaria",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": [
          "530008"
        ]
      },
      {
        "id": "3185",
        "name": "Econometría II",
        "level": 7,
        "type": "O",
        "credits": 5,
        "reqs": [
          "530045",
          "3304"
        ]
      },
      {
        "id": "530049",
        "name": "Evaluación Económica de Políticas",
        "level": 8,
        "type": "O",
        "credits": 3,
        "reqs": [
          "3185"
        ]
      },
      {
        "id": "530050",
        "name": "Economía de la Elección Pública",
        "level": 8,
        "type": "O",
        "credits": 3,
        "reqs": [
          "530011"
        ]
      },
      {
        "id": "530051",
        "name": "Crecimiento y Desarrollo Económico",
        "level": 8,
        "type": "O",
        "credits": 3,
        "reqs": [
          "530011"
        ]
      },
      {
        "id": "530052",
        "name": "Mercado de Capitales",
        "level": 8,
        "type": "O",
        "credits": 3,
        "reqs": [
          "530046"
        ]
      },
      {
        "id": "530053",
        "name": "Tópicos Avanzados en Economía y Finanzas",
        "level": 8,
        "type": "O",
        "credits": 4,
        "reqs": [
          "3185"
        ]
      },
      {
        "id": "530054",
        "name": "Economía Financiera II",
        "level": 8,
        "type": "O",
        "credits": 4,
        "reqs": [
          "530053",
          "530046"
        ]
      },
      {
        "id": "530021",
        "name": "Política Económica",
        "level": 9,
        "type": "O",
        "credits": 3,
        "reqs": [
          "530050"
        ]
      },
      {
        "id": "530058",
        "name": "Economía Financiera Aplicada",
        "level": 9,
        "type": "O",
        "credits": 3,
        "reqs": [
          "530054"
        ]
      },
      {
        "id": "530059",
        "name": "Ética para Economistas",
        "level": 9,
        "type": "O",
        "credits": 3,
        "reqs": [
          "530050"
        ]
      },
      {
        "id": "530060",
        "name": "Evaluación Privada de Proyectos",
        "level": 9,
        "type": "O",
        "credits": 3,
        "reqs": [
          "530054"
        ]
      },
      {
        "id": "530063",
        "name": "Tópicos en Investigación Económica",
        "level": 10,
        "type": "O",
        "credits": 4,
        "reqs": [
          "530021"
        ]
      },
      {
        "id": "4220",
        "name": "Economía del Comportamiento y Experimental",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "530008"
        ]
      },
      {
        "id": "530056",
        "name": "Métodos No Paramétricos",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "3185"
        ]
      },
      {
        "id": "530055",
        "name": "Economía Ambiental y de los Recursos Naturales",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "530047"
        ]
      },
      {
        "id": "3274",
        "name": "Regulación",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "530010"
        ]
      },
      {
        "id": "2123",
        "name": "Gestión del Riesgo",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "530046"
        ]
      },
      {
        "id": "530061",
        "name": "Economía y Finanzas para Programas de Extensión",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "530051"
        ]
      },
      {
        "id": "530019",
        "name": "Econometría Aplicada a las Finanzas",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "530053",
          "530054"
        ]
      },
      {
        "id": "3276",
        "name": "Herramientas Informáticas para las Finanzas",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "530052"
        ]
      },
      {
        "id": "3319",
        "name": "Gestión de Inversiones I",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "530054"
        ]
      },
      {
        "id": "530062",
        "name": "Teoría de Juegos Cooperativos",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "530053"
        ]
      },
      {
        "id": "530064",
        "name": "Ciencia de Datos Aplicada",
        "level": 11,
        "type": "E",
        "credits": 2,
        "reqs": []
      },
      {
        "id": "3321",
        "name": "Gestión de Inversiones II",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "3319"
        ]
      },
      {
        "id": "3178",
        "name": "Banca de Inversiones",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "530058"
        ]
      },
      {
        "id": "3254",
        "name": "Instrumentos Financieros",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "530058"
        ]
      },
      {
        "id": "530057",
        "name": "Tópicos Especiales en Economía Social y Pública",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "530021"
        ]
      },
      {
        "id": "530065",
        "name": "Evaluación Social y Pública de Proyectos",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "530060"
        ]
      },
      {
        "id": "530030",
        "name": "Ética para las Finanzas",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "530059"
        ]
      }
    ]
  },
  "comunicacion": {
    "name": "Comunicación 2025-1",
    "courses": [
      {
        "id": "510001",
        "name": "GLOBALIZACIÓN Y REALIDAD NACIONAL",
        "level": 1,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6506",
        "name": "LENGUAJE Y COMUNICACIÓN I",
        "level": 1,
        "type": "O",
        "credits": 4,
        "reqs": []
      },
      {
        "id": "6508",
        "name": "METODOLOGÍAS DE INVESTIGACIÓN",
        "level": 1,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6505",
        "name": "DESARROLLO PERSONAL Y SOCIAL",
        "level": 1,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6383",
        "name": "FUNDAMENTOS DE MATEMÁTICA",
        "level": 1,
        "type": "O",
        "credits": 5,
        "reqs": []
      },
      {
        "id": "510002",
        "name": "ÉTICA CÍVICA",
        "level": 1,
        "type": "O",
        "credits": 2,
        "reqs": []
      },
      {
        "id": "6510",
        "name": "ECONOMÍA Y EMPRESA",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6511",
        "name": "LENGUAJE Y COMUNICACIÓN II",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6506"
        ]
      },
      {
        "id": "6512",
        "name": "PROCESOS SOCIALES Y POLÍTICOS",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6513",
        "name": "TEMAS DE FILOSOFÍA",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6514",
        "name": "LITERATURA Y SOCIEDAD",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6506"
        ]
      },
      {
        "id": "6515",
        "name": "ARTE Y CULTURA",
        "level": 2,
        "type": "O",
        "credits": 5,
        "reqs": []
      },
      {
        "id": "550001",
        "name": "STORYTELLING",
        "level": 3,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6511"
        ]
      },
      {
        "id": "COM_001",
        "name": "GAMIFICACIÓN",
        "level": 3,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "8067",
        "name": "FUNDAMENTOS DE LA COMUNICACIÓN",
        "level": 3,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6512"
        ]
      },
      {
        "id": "8891",
        "name": "ESTÉTICAS CONTEMPORÁNEAS",
        "level": 3,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6515"
        ]
      },
      {
        "id": "8284",
        "name": "LENGUAJE GRÁFICO",
        "level": 3,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "8283",
        "name": "LENGUAJE AUDIOVISUAL",
        "level": 3,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "COM_002",
        "name": "FUNDAMENTOS DE PUBLICIDAD Y MARKETING",
        "level": 3,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "550003",
        "name": "BASES DE LA INFORMACIÓN",
        "level": 4,
        "type": "O",
        "credits": 3,
        "reqs": [
          "550001"
        ]
      },
      {
        "id": "550004",
        "name": "COMUNICACIÓN Y DESARROLLO",
        "level": 4,
        "type": "O",
        "credits": 3,
        "reqs": [
          "8067"
        ]
      },
      {
        "id": "COM_003",
        "name": "TÉCNICAS FOTOGRÁFICAS",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": [
          "8284"
        ]
      },
      {
        "id": "550052",
        "name": "COMUNICACIÓN Y EMPRESA",
        "level": 4,
        "type": "O",
        "credits": 3,
        "reqs": [
          "8067"
        ]
      },
      {
        "id": "8335",
        "name": "TÉCNICAS AUDIOVISUALES",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": []
      },
      {
        "id": "8123",
        "name": "COMPORTAMIENTO DEL CONSUMIDOR",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "COM_002"
        ]
      },
      {
        "id": "550007",
        "name": "PRODUCCIÓN INFORMATIVA",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "550001"
        ]
      },
      {
        "id": "COM_004",
        "name": "MARCA PERSONAL Y LIDERAZGO",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "8067"
        ]
      },
      {
        "id": "COM_005",
        "name": "TALLER DE ACTUACIÓN",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "550009",
        "name": "MUSICALIZACIÓN",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "550010",
        "name": "SOCIEDAD Y COMUNICACIÓN",
        "level": 5,
        "type": "O",
        "credits": 3,
        "reqs": [
          "8067"
        ]
      },
      {
        "id": "8039",
        "name": "NARRATIVA AUDIOVISUAL",
        "level": 5,
        "type": "O",
        "credits": 4,
        "reqs": [
          "550001"
        ]
      },
      {
        "id": "COM_006",
        "name": "TÉCNICAS DE AUDIO",
        "level": 5,
        "type": "O",
        "credits": 3,
        "reqs": [
          "8335"
        ]
      },
      {
        "id": "8896",
        "name": "TÉCNICAS DE DISEÑO",
        "level": 5,
        "type": "O",
        "credits": 4,
        "reqs": [
          "8284"
        ]
      },
      {
        "id": "8108",
        "name": "GÉNEROS AUDIOVISUALES",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "8283"
        ]
      },
      {
        "id": "8202",
        "name": "ESTRATEGIAS DE MARKETING",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "COM_002"
        ]
      },
      {
        "id": "COM_007",
        "name": "POSPRODUCCIÓN AUDIOVISUAL",
        "level": 11,
        "type": "E",
        "credits": 4,
        "reqs": [
          "8335"
        ]
      },
      {
        "id": "8897",
        "name": "PUBLICIDAD Y PROMOCIÓN",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "COM_002"
        ]
      },
      {
        "id": "8898",
        "name": "MEDIOS Y OPINIÓN PÚBLICA",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "550003"
        ]
      },
      {
        "id": "550011",
        "name": "IDENTIDAD Y CULTURA CORPORATIVA",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "550052"
        ]
      },
      {
        "id": "550012",
        "name": "DIAGNÓSTICO DE LA COMUNICACIÓN",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "550004"
        ]
      },
      {
        "id": "COM_008",
        "name": "MEDIOS Y DESARROLLO",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "550004"
        ]
      },
      {
        "id": "COM_009",
        "name": "PERIODISMO TRANSMEDIA",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "550003"
        ]
      },
      {
        "id": "COM_010",
        "name": "TÉCNICAS DE ANIMACIÓN",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "8284"
        ]
      },
      {
        "id": "COM_011",
        "name": "DIRECCIÓN DE ARTES VISUALES",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "8891"
        ]
      },
      {
        "id": "550017",
        "name": "TALLER DE FOTOGRAFÍA",
        "level": 11,
        "type": "E",
        "credits": 4,
        "reqs": [
          "COM_003"
        ]
      },
      {
        "id": "COM_012",
        "name": "DISEÑO Y PRODUCCIÓN DE ARTE",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "8891"
        ]
      },
      {
        "id": "550018",
        "name": "TÉCNICAS DE INVESTIGACIÓN",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "550010"
        ]
      },
      {
        "id": "8336",
        "name": "TALLER DE VIDEO*",
        "level": 6,
        "type": "O",
        "credits": 6,
        "reqs": [
          "8335",
          "8039"
        ]
      },
      {
        "id": "COM_013",
        "name": "COMUNICACIÓN Y EXPERIENCIA DE USUARIO",
        "level": 6,
        "type": "O",
        "credits": 4,
        "reqs": [
          "8896"
        ]
      },
      {
        "id": "8069",
        "name": "HISTORIA Y ESTÉTICA DEL CINE",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "8283"
        ]
      },
      {
        "id": "8099",
        "name": "CREATIVIDAD PUBLICITARIA",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "COM_002"
        ]
      },
      {
        "id": "8345",
        "name": "ESTRATEGIA DE MEDIOS",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "8897"
        ]
      },
      {
        "id": "COM_014",
        "name": "CRÓNICAS Y ENTREVISTAS",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "550007"
        ]
      },
      {
        "id": "8958",
        "name": "PLANEAMIENTO ESTRATÉGICO DE LA COMUNICACIÓN",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "COM_002"
        ]
      },
      {
        "id": "550019",
        "name": "SOSTENIBILIDAD Y RESPONSABILIDAD SOCIAL",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "550052"
        ]
      },
      {
        "id": "COM_015",
        "name": "TÉCNICAS PARA REPORTAJES",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "550007"
        ]
      },
      {
        "id": "550021",
        "name": "GESTIÓN DE CONTENIDOS AUDIOVISUALES",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "8335"
        ]
      },
      {
        "id": "COM_016",
        "name": "GESTIÓN DE PROYECTOS DE VIDEOJUEGOS",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "COM_001"
        ]
      },
      {
        "id": "550022",
        "name": "DISEÑO SONORO",
        "level": 11,
        "type": "E",
        "credits": 4,
        "reqs": [
          "COM_006"
        ]
      },
      {
        "id": "550023",
        "name": "MOTION GRAPHICS",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "8896"
        ]
      },
      {
        "id": "COM_017",
        "name": "DISEÑO VISUAL",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "8896"
        ]
      },
      {
        "id": "COM_018",
        "name": "COLORIZACIÓN Y EFECTOS EN POSPRODUCCIÓN",
        "level": 11,
        "type": "E",
        "credits": 4,
        "reqs": [
          "COM_007"
        ]
      },
      {
        "id": "8091",
        "name": "PROCESOS INTERCULTURALES",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": [
          "550010"
        ]
      },
      {
        "id": "8200",
        "name": "COMUNICACIÓN POLÍTICA",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": [
          "550010"
        ]
      },
      {
        "id": "8269",
        "name": "EDUCACIÓN Y COMUNICACIÓN",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": [
          "550010"
        ]
      },
      {
        "id": "8972",
        "name": "SEMIÓTICA NARRATIVA",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": [
          "8039"
        ]
      },
      {
        "id": "8054",
        "name": "TALLER DE TELEVISIÓN*",
        "level": 11,
        "type": "E",
        "credits": 6,
        "reqs": [
          "8039"
        ]
      },
      {
        "id": "8263",
        "name": "DIRECCIÓN DE ACTORES*",
        "level": 11,
        "type": "E",
        "credits": 4,
        "reqs": [
          "8039"
        ]
      },
      {
        "id": "8351",
        "name": "PERIODISMO DE INVESTIGACIÓN",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "550003"
        ]
      },
      {
        "id": "8975",
        "name": "GERENCIA DE MARCA",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "8202"
        ]
      },
      {
        "id": "8977",
        "name": "COMUNICACIÓN INTERNA",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "COM_002",
          "550011"
        ]
      },
      {
        "id": "550027",
        "name": "CREATIVIDAD PARA EL DESARROLLO",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "COM_002",
          "550003"
        ]
      },
      {
        "id": "COM_019",
        "name": "MODELADO Y ANIMACIÓN 3D",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "550001",
          "8896"
        ]
      },
      {
        "id": "COM_020",
        "name": "PODCASTING",
        "level": 11,
        "type": "E",
        "credits": 4,
        "reqs": [
          "COM_006"
        ]
      },
      {
        "id": "8426",
        "name": "GESTIÓN EMPRESARIAL",
        "level": 8,
        "type": "O",
        "credits": 3,
        "reqs": [
          "550018"
        ]
      },
      {
        "id": "8993",
        "name": "SEMIÓTICA DE LAS PRÁCTICAS",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "8972"
        ]
      },
      {
        "id": "8059",
        "name": "PRODUCCIÓN Y REALIZACIÓN PUBLICITARIA*",
        "level": 11,
        "type": "E",
        "credits": 6,
        "reqs": [
          "8336"
        ]
      },
      {
        "id": "8292",
        "name": "PLANEAMIENTO PUBLICITARIO",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "8897"
        ]
      },
      {
        "id": "8349",
        "name": "IMAGEN CORPORATIVA Y REPUTACIÓN",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "550011"
        ]
      },
      {
        "id": "COM_021",
        "name": "CREATIVIDAD E INNOVACIÓN EMPRESARIAL",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "550052"
        ]
      },
      {
        "id": "8348",
        "name": "MARKETING SOCIAL",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "550004"
        ]
      },
      {
        "id": "550035",
        "name": "DISEÑO DE PROYECTOS DE DESARROLLO",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "550004"
        ]
      },
      {
        "id": "COM_022",
        "name": "PERIODISMO DE DATOS",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "550003"
        ]
      },
      {
        "id": "550037",
        "name": "DISEÑO EDITORIAL",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "8896"
        ]
      },
      {
        "id": "550015",
        "name": "DISEÑO DE VIDEOJUEGOS",
        "level": 11,
        "type": "E",
        "credits": 5,
        "reqs": [
          "COM_001"
        ]
      },
      {
        "id": "550039",
        "name": "NARRATIVA TRANSMEDIA",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "8336"
        ]
      },
      {
        "id": "COM_023",
        "name": "TALLER DE GUION",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "8336"
        ]
      },
      {
        "id": "550040",
        "name": "DIRECCIÓN DE FOTOGRAFÍA*",
        "level": 11,
        "type": "E",
        "credits": 4,
        "reqs": [
          "COM_003",
          "8336"
        ]
      },
      {
        "id": "8342",
        "name": "LEGISLACIÓN Y ÉTICA PROFESIONAL",
        "level": 9,
        "type": "O",
        "credits": 3,
        "reqs": [
          "8200"
        ]
      },
      {
        "id": "8001",
        "name": "TALLER DE DOCUMENTAL*",
        "level": 11,
        "type": "E",
        "credits": 6,
        "reqs": [
          "8336"
        ]
      },
      {
        "id": "8324",
        "name": "AUDITORÍA EN COMUNICACIÓN",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "550011"
        ]
      },
      {
        "id": "8326",
        "name": "CINE PERUANO Y LATINOAMERICANO",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "550004",
          "8283"
        ]
      },
      {
        "id": "8429",
        "name": "COMUNICACIONES DE MARKETING DIGITAL",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "8202"
        ]
      },
      {
        "id": "COM_024",
        "name": "GERENCIA DE COMUNICACIÓN CORPORATIVA",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "550052"
        ]
      },
      {
        "id": "COM_025",
        "name": "PERIODISMO DEPORTIVO",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "550003"
        ]
      },
      {
        "id": "8343",
        "name": "TALLER TRANSMEDIA*",
        "level": 11,
        "type": "E",
        "credits": 6,
        "reqs": [
          "8336"
        ]
      },
      {
        "id": "550041",
        "name": "PERIODISMO AUDIOVISUAL*",
        "level": 11,
        "type": "E",
        "credits": 6,
        "reqs": [
          "8336"
        ]
      },
      {
        "id": "550042",
        "name": "DIRECCIÓN AUDIOVISUAL*",
        "level": 11,
        "type": "E",
        "credits": 4,
        "reqs": [
          "8336"
        ]
      },
      {
        "id": "COM_026",
        "name": "PROYECTOS DE ANIMACIÓN",
        "level": 11,
        "type": "E",
        "credits": 5,
        "reqs": [
          "COM_010"
        ]
      },
      {
        "id": "550044",
        "name": "IDENTIDAD VISUAL",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "8896"
        ]
      },
      {
        "id": "COM_027",
        "name": "GESTIÓN Y PRODUCCIÓN DEL DISEÑO",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "8896"
        ]
      },
      {
        "id": "550047",
        "name": "TRABAJO PROFESIONAL II**",
        "level": 11,
        "type": "E",
        "credits": 5,
        "reqs": []
      },
      {
        "id": "8101",
        "name": "DISEÑO Y EJECUCIÓN DE CAMPAÑAS PUBLICITARIAS*",
        "level": 11,
        "type": "E",
        "credits": 6,
        "reqs": [
          "550052"
        ]
      },
      {
        "id": "COM_028",
        "name": "EMPRENDIMIENTOS SOCIALES",
        "level": 11,
        "type": "E",
        "credits": 4,
        "reqs": [
          "550004"
        ]
      },
      {
        "id": "550049",
        "name": "LABORATORIO DE PROYECTOS INFORMATIVOS",
        "level": 11,
        "type": "E",
        "credits": 5,
        "reqs": [
          "COM_022"
        ]
      },
      {
        "id": "COM_029",
        "name": "PROYECTOS DE VIDEOJUEGOS",
        "level": 11,
        "type": "E",
        "credits": 5,
        "reqs": [
          "550015"
        ]
      },
      {
        "id": "COM_030",
        "name": "PORTAFOLIO FOTOGRÁFICO",
        "level": 11,
        "type": "E",
        "credits": 4,
        "reqs": [
          "COM_003"
        ]
      },
      {
        "id": "COM_031",
        "name": "TALLER DE CAMPAÑAS GRÁFICAS",
        "level": 11,
        "type": "E",
        "credits": 4,
        "reqs": [
          "COM_017"
        ]
      }
    ]
  }
};
