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
          "510014"
        ]
      },
      {
        "id": "560038",
        "name": "Sistemas Organizacionales / Organizational Systems",
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
          "560038"
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
        "name": "Fundamentos de Operaciones y Logística",
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
        "id": "560101",
        "name": "Ingeniería de Seguridad",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "560076",
        "name": "Taller de Liderazgo",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "560077",
        "name": "Programación para Ingeniería",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "560078",
        "name": "Sistemas de Información Gerencial",
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
        "id": "5665",
        "name": "Taller de Habilidades Gerenciales",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "560079",
        "name": "Gestión de Proyectos de Diseño",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "560102",
        "name": "Materiales en la Manufactura",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "560081",
        "name": "Transformación Digital",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "560083",
        "name": "Estrategia de Inteligencia Empresarial",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "560084",
        "name": "Supply Chain Management",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "560085",
        "name": "Compras y Gestión del Abastecimiento",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "5673",
        "name": "Juego de Negocios",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "5662",
        "name": "Formulación y Evaluación de Proyectos",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "560032",
        "name": "Metodologías Ágiles",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "560035",
        "name": "Dirección en Implementación de Proyectos",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "560087",
        "name": "Gestión del Comercio Internacional",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "560088",
        "name": "Creatividad, Innovación y Emprendimiento",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "560089",
        "name": "Diseño de Proyectos Sostenibles",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "560090",
        "name": "Tecnologías de Programación",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "560091",
        "name": "Diseño y Prototipado",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "560092",
        "name": "Robotic Process Automation",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "560093",
        "name": "Machine Learning",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "560094",
        "name": "Herramientas Informáticas",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "560095",
        "name": "Lean Six Sigma",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "560097",
        "name": "Ingeniería del Transporte y Distribución",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "5685",
        "name": "Gestión de Operaciones de Servicios",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "560098",
        "name": "Gestión de Recursos",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "560099",
        "name": "Gestión de Riesgos y Portafolios",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "560029",
        "name": "Gerencia B2b",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "560005",
        "name": "Herramientas de Marketing Digital",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "560100",
        "name": "Sostenibilidad Industrial",
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
  },
  "arquitectura": {
    "name": "Arquitectura 2026-1",
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
        "id": "6509",
        "name": "Matemática para Arquitectura",
        "level": 1,
        "type": "O",
        "credits": 5,
        "reqs": []
      },
      {
        "id": "700118",
        "name": "Dibujo I",
        "level": 1,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "700001",
        "name": "Proyecto de Arquitectura I",
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
        "id": "6510",
        "name": "Economía y Empresa",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "51001",
        "name": "Introducción al Comercio Internacional",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "700004",
        "name": "Dibujo II",
        "level": 2,
        "type": "O",
        "credits": 4,
        "reqs": [
          "700118"
        ]
      },
      {
        "id": "700107",
        "name": "Proyecto de Arquitectura II",
        "level": 2,
        "type": "O",
        "credits": 6,
        "reqs": [
          "700001"
        ]
      },
      {
        "id": "700056",
        "name": "Dibujo III",
        "level": 3,
        "type": "O",
        "credits": 3,
        "reqs": [
          "700004"
        ]
      },
      {
        "id": "700121",
        "name": "Edificación Sostenible I",
        "level": 3,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "700060",
        "name": "Física",
        "level": 3,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6509"
        ]
      },
      {
        "id": "700122",
        "name": "Introducción a la Arquitectura",
        "level": 3,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "700123",
        "name": "Urbanismo y Medio Ambiente I",
        "level": 3,
        "type": "O",
        "credits": 3,
        "reqs": [
          "51001"
        ]
      },
      {
        "id": "700055",
        "name": "Proyecto de Arquitectura III",
        "level": 3,
        "type": "O",
        "credits": 8,
        "reqs": [
          "700107"
        ]
      },
      {
        "id": "700124",
        "name": "Edificación Sostenible II",
        "level": 4,
        "type": "O",
        "credits": 3,
        "reqs": [
          "700121"
        ]
      },
      {
        "id": "700108",
        "name": "Grafica Digital",
        "level": 4,
        "type": "O",
        "credits": 3,
        "reqs": [
          "700056"
        ]
      },
      {
        "id": "700063",
        "name": "Historia y Teoría de la Arquitectura I",
        "level": 4,
        "type": "O",
        "credits": 3,
        "reqs": [
          "700122"
        ]
      },
      {
        "id": "700066",
        "name": "Orientación Estructural",
        "level": 4,
        "type": "O",
        "credits": 3,
        "reqs": [
          "700060"
        ]
      },
      {
        "id": "700125",
        "name": "Tecnología Ambiental I",
        "level": 4,
        "type": "O",
        "credits": 3,
        "reqs": [
          "700121"
        ]
      },
      {
        "id": "700061",
        "name": "Proyecto de Arquitectura IV",
        "level": 4,
        "type": "O",
        "credits": 8,
        "reqs": [
          "700055"
        ]
      },
      {
        "id": "700109",
        "name": "Dibujo y presentación de Proyectos",
        "level": 5,
        "type": "O",
        "credits": 3,
        "reqs": [
          "700056"
        ]
      },
      {
        "id": "700126",
        "name": "Diseño Estructural I",
        "level": 5,
        "type": "O",
        "credits": 3,
        "reqs": [
          "700066",
          "700124"
        ]
      },
      {
        "id": "700069",
        "name": "Historia y Teoría de la Arquitectura II",
        "level": 5,
        "type": "O",
        "credits": 3,
        "reqs": [
          "700063"
        ]
      },
      {
        "id": "700110",
        "name": "Instalaciones I",
        "level": 5,
        "type": "O",
        "credits": 3,
        "reqs": [
          "700124"
        ]
      },
      {
        "id": "700127",
        "name": "Urbanismo y Medio Ambiente II",
        "level": 5,
        "type": "O",
        "credits": 3,
        "reqs": [
          "700123"
        ]
      },
      {
        "id": "700067",
        "name": "Proyecto de Arquitectura V",
        "level": 5,
        "type": "O",
        "credits": 8,
        "reqs": [
          "700061"
        ]
      },
      {
        "id": "700128",
        "name": "Diseño Estructural II",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "700126"
        ]
      },
      {
        "id": "700075",
        "name": "Historia y Teoría de la Arquitectura III",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "700069"
        ]
      },
      {
        "id": "700111",
        "name": "Instalaciones II",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "700110",
          "700109"
        ]
      },
      {
        "id": "700058",
        "name": "Estadística",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "700073",
        "name": "Proyecto de Arquitectura VI",
        "level": 6,
        "type": "O",
        "credits": 8,
        "reqs": [
          "700066",
          "700067"
        ]
      },
      {
        "id": "ARQ_001",
        "name": "Electivo 1",
        "level": 11,
        "type": "E",
        "credits": 2,
        "reqs": []
      },
      {
        "id": "700082",
        "name": "Gestión de Proyectos I",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": [
          "700058"
        ]
      },
      {
        "id": "700081",
        "name": "Historia de la Arquitectura Peruana",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": [
          "700075"
        ]
      },
      {
        "id": "700112",
        "name": "Metrados, Presupuesto y Programación de Obra",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": [
          "700128",
          "700111"
        ]
      },
      {
        "id": "700079",
        "name": "Proyecto de Arquitectura VII",
        "level": 7,
        "type": "O",
        "credits": 8,
        "reqs": [
          "700073"
        ]
      },
      {
        "id": "ARQ_002",
        "name": "Electivo 2",
        "level": 11,
        "type": "E",
        "credits": 2,
        "reqs": []
      },
      {
        "id": "700086",
        "name": "Desarrollo de Proyecto",
        "level": 8,
        "type": "O",
        "credits": 3,
        "reqs": [
          "700128",
          "700111"
        ]
      },
      {
        "id": "700087",
        "name": "Gestión de Proyectos II",
        "level": 8,
        "type": "O",
        "credits": 3,
        "reqs": [
          "700112",
          "700082"
        ]
      },
      {
        "id": "700085",
        "name": "Proyecto de Arquitectura VIII",
        "level": 8,
        "type": "O",
        "credits": 8,
        "reqs": [
          "700079",
          "700127"
        ]
      },
      {
        "id": "ARQ_003",
        "name": "Electivo 3",
        "level": 11,
        "type": "E",
        "credits": 2,
        "reqs": []
      },
      {
        "id": "ARQ_004",
        "name": "Electivo 4",
        "level": 11,
        "type": "E",
        "credits": 2,
        "reqs": []
      },
      {
        "id": "700095",
        "name": "Gestión de Proyectos III",
        "level": 9,
        "type": "O",
        "credits": 3,
        "reqs": [
          "700087",
          "700086"
        ]
      },
      {
        "id": "700094",
        "name": "Proyecto de Arquitectura IX",
        "level": 9,
        "type": "O",
        "credits": 8,
        "reqs": [
          "700085"
        ]
      },
      {
        "id": "ARQ_005",
        "name": "Electivo 5",
        "level": 11,
        "type": "E",
        "credits": 2,
        "reqs": []
      },
      {
        "id": "ARQ_006",
        "name": "Electivo 6",
        "level": 11,
        "type": "E",
        "credits": 2,
        "reqs": []
      },
      {
        "id": "ARQ_007",
        "name": "Electivo 7",
        "level": 11,
        "type": "E",
        "credits": 2,
        "reqs": []
      },
      {
        "id": "700120",
        "name": "Gestión de Proyectos IV",
        "level": 10,
        "type": "O",
        "credits": 3,
        "reqs": [
          "700095"
        ]
      },
      {
        "id": "700117",
        "name": "Proyecto de Fin de Carrera",
        "level": 10,
        "type": "O",
        "credits": 10,
        "reqs": [
          "700094"
        ]
      },
      {
        "id": "700119",
        "name": "Seminario de Investigación en Arquitectura",
        "level": 10,
        "type": "O",
        "credits": 4,
        "reqs": []
      },
      {
        "id": "ARQ_008",
        "name": "Organizacional",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "700067"
        ]
      },
      {
        "id": "700088",
        "name": "Fotografía",
        "level": 11,
        "type": "E",
        "credits": 2,
        "reqs": []
      },
      {
        "id": "700089",
        "name": "Apuntes",
        "level": 11,
        "type": "E",
        "credits": 2,
        "reqs": []
      },
      {
        "id": "700090",
        "name": "Cad Avanzado",
        "level": 11,
        "type": "E",
        "credits": 2,
        "reqs": []
      },
      {
        "id": "700092",
        "name": "Arquitectura paisajista",
        "level": 11,
        "type": "E",
        "credits": 2,
        "reqs": [
          "700123"
        ]
      },
      {
        "id": "700093",
        "name": "Conservación del Patrimonio Edificado",
        "level": 11,
        "type": "E",
        "credits": 2,
        "reqs": [
          "700081"
        ]
      },
      {
        "id": "700113",
        "name": "Diseño y Fabricación Digital",
        "level": 11,
        "type": "E",
        "credits": 2,
        "reqs": []
      },
      {
        "id": "700096",
        "name": "Acabados de Construcción",
        "level": 11,
        "type": "E",
        "credits": 2,
        "reqs": [
          "700086"
        ]
      },
      {
        "id": "700099",
        "name": "Análisis Regional y Urbano",
        "level": 11,
        "type": "E",
        "credits": 2,
        "reqs": [
          "700127"
        ]
      },
      {
        "id": "700100",
        "name": "Acústica",
        "level": 11,
        "type": "E",
        "credits": 2,
        "reqs": []
      },
      {
        "id": "700101",
        "name": "Conservación de Centros Históricos",
        "level": 11,
        "type": "E",
        "credits": 2,
        "reqs": [
          "700081",
          "700127"
        ]
      },
      {
        "id": "700115",
        "name": "Topografía y Mecánica de Suelos",
        "level": 11,
        "type": "E",
        "credits": 2,
        "reqs": [
          "700124"
        ]
      },
      {
        "id": "700116",
        "name": "Diseño Lumínico Arquitectónico",
        "level": 11,
        "type": "E",
        "credits": 2,
        "reqs": [
          "700125"
        ]
      },
      {
        "id": "700129",
        "name": "Historia del Arte",
        "level": 11,
        "type": "E",
        "credits": 2,
        "reqs": []
      },
      {
        "id": "700130",
        "name": "Teoría del Diseño de la Vivienda",
        "level": 11,
        "type": "E",
        "credits": 2,
        "reqs": []
      },
      {
        "id": "700131",
        "name": "Urbanismo y Medio Ambiente III",
        "level": 11,
        "type": "E",
        "credits": 2,
        "reqs": [
          "700127"
        ]
      },
      {
        "id": "700132",
        "name": "Diseño Estructural III",
        "level": 11,
        "type": "E",
        "credits": 2,
        "reqs": [
          "700128"
        ]
      },
      {
        "id": "700133",
        "name": "Tecnología Ambiental II",
        "level": 11,
        "type": "E",
        "credits": 2,
        "reqs": [
          "700125"
        ]
      },
      {
        "id": "700134",
        "name": "Diseño de Interiores",
        "level": 11,
        "type": "E",
        "credits": 2,
        "reqs": [
          "700111"
        ]
      },
      {
        "id": "700135",
        "name": "Diseño y Construcción en Madera",
        "level": 11,
        "type": "E",
        "credits": 2,
        "reqs": [
          "700128"
        ]
      },
      {
        "id": "700136",
        "name": "Diseño y Análisis Cartográfico",
        "level": 11,
        "type": "E",
        "credits": 2,
        "reqs": [
          "700123"
        ]
      },
      {
        "id": "700137",
        "name": "Arquitectura Latinoamericana Contemporánea",
        "level": 11,
        "type": "E",
        "credits": 2,
        "reqs": []
      },
      {
        "id": "700138",
        "name": "Seminario de Arquitectura y Diseño de Interiores",
        "level": 11,
        "type": "E",
        "credits": 4,
        "reqs": [
          "700096",
          "700134"
        ]
      },
      {
        "id": "ARQ_009",
        "name": "Edificado",
        "level": 11,
        "type": "E",
        "credits": 4,
        "reqs": [
          "700093",
          "700101"
        ]
      },
      {
        "id": "700140",
        "name": "Seminario de Tecnologías de Edificación",
        "level": 11,
        "type": "E",
        "credits": 4,
        "reqs": [
          "700132",
          "700133"
        ]
      },
      {
        "id": "700141",
        "name": "Seminario de Urbanismo y Medio Ambiente",
        "level": 11,
        "type": "E",
        "credits": 4,
        "reqs": [
          "700131",
          "700136"
        ]
      }
    ]
  },
  "administracion": {
    "name": "Administracion",
    "courses": [
      {
        "id": "520030",
        "name": "Fundamentos de Administración / Management  Fundamentals",
        "level": 3,
        "type": "O",
        "credits": 4,
        "reqs": []
      },
      {
        "id": "520003",
        "name": "Introducción a las Finanzas",
        "level": 3,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "4123",
        "name": "Contabilidad General",
        "level": 3,
        "type": "O",
        "credits": 4,
        "reqs": []
      },
      {
        "id": "3232",
        "name": "Matemática para la Gestión de Negocios",
        "level": 3,
        "type": "O",
        "credits": 4,
        "reqs": []
      },
      {
        "id": "520031",
        "name": "Estadística para la Gestión Empresarial I",
        "level": 3,
        "type": "O",
        "credits": 4,
        "reqs": []
      },
      {
        "id": "520004",
        "name": "Herramientas Informáticas para la Gestión I",
        "level": 3,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "520032",
        "name": "Planeamiento Estratégico I / Strategic Planning I",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": [
          "520030"
        ]
      },
      {
        "id": "4384",
        "name": "Costos y Presupuestos",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": [
          "4123"
        ]
      },
      {
        "id": "520033",
        "name": "Introducción al Marketing / Introduction to Marketing",
        "level": 4,
        "type": "O",
        "credits": 3,
        "reqs": [
          "520030"
        ]
      },
      {
        "id": "520034",
        "name": "Estadística para la Gestión Empresarial II",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": [
          "520031"
        ]
      },
      {
        "id": "3326",
        "name": "Microeconomía / Microeconomics",
        "level": 4,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "520035",
        "name": "Herramientas Informáticas para la Gestión II",
        "level": 4,
        "type": "O",
        "credits": 3,
        "reqs": [
          "520004"
        ]
      },
      {
        "id": "520036",
        "name": "Diseño Organizacional / Organizational Design",
        "level": 5,
        "type": "O",
        "credits": 4,
        "reqs": [
          "520032"
        ]
      },
      {
        "id": "520037",
        "name": "Gestión de Personas / People Management",
        "level": 5,
        "type": "O",
        "credits": 3,
        "reqs": [
          "520030"
        ]
      },
      {
        "id": "4125",
        "name": "Elaboración de Estados Financieros",
        "level": 5,
        "type": "O",
        "credits": 3,
        "reqs": [
          "520003",
          "4384"
        ]
      },
      {
        "id": "520038",
        "name": "Gestión Legal Empresarial",
        "level": 5,
        "type": "O",
        "credits": 4,
        "reqs": [
          "520032"
        ]
      },
      {
        "id": "520039",
        "name": "Marketing Estratégico / Strategic Marketing",
        "level": 5,
        "type": "O",
        "credits": 3,
        "reqs": [
          "520033"
        ]
      },
      {
        "id": "3325",
        "name": "Macroeconomía / Macroeconomics",
        "level": 5,
        "type": "O",
        "credits": 3,
        "reqs": [
          "3326"
        ]
      },
      {
        "id": "520040",
        "name": "Planeamiento Estratégico II / Strategic Planning II",
        "level": 6,
        "type": "O",
        "credits": 4,
        "reqs": [
          "520036"
        ]
      },
      {
        "id": "2487",
        "name": "Análisis de la Información Financiera / Financial  Information Analysis",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "4125"
        ]
      },
      {
        "id": "520041",
        "name": "Comportamiento Organizacional / Organizational  Behavior",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "520037"
        ]
      },
      {
        "id": "520042",
        "name": "Investigación y Análisis de Mercado / Market Research  and Analysis",
        "level": 6,
        "type": "O",
        "credits": 4,
        "reqs": [
          "520034",
          "520039"
        ]
      },
      {
        "id": "520043",
        "name": "Administración de Operaciones / Operations  Management",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "520036",
          "3232"
        ]
      },
      {
        "id": "520044",
        "name": "Tecnologías de Información para la Gestión / I.T. for  Management",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "520035"
        ]
      },
      {
        "id": "520045",
        "name": "Taller de Innovación y Creatividad Empresarial",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": [
          "520040"
        ]
      },
      {
        "id": "520046",
        "name": "Logística y Comercio Internacional / Logistics and  International Trade",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": [
          "520043"
        ]
      },
      {
        "id": "520070",
        "name": "Gestión Financiera / Financial Management",
        "level": 7,
        "type": "O",
        "credits": 4,
        "reqs": [
          "2487"
        ]
      },
      {
        "id": "520048",
        "name": "Taller de Liderazgo y Habilidades Gerenciales",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": [
          "520041"
        ]
      },
      {
        "id": "520049",
        "name": "Legislación Laboral",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": [
          "520037"
        ]
      },
      {
        "id": "520050",
        "name": "Gestión Comercial / Commercial Management",
        "level": 7,
        "type": "O",
        "credits": 4,
        "reqs": [
          "520042"
        ]
      },
      {
        "id": "520058",
        "name": "Taller de Emprendimiento y Creación de Negocios",
        "level": 8,
        "type": "O",
        "credits": 4,
        "reqs": [
          "520045",
          "520070"
        ]
      },
      {
        "id": "520059",
        "name": "Gestión de la Cadena de Suministro / Supply Chain  Management",
        "level": 8,
        "type": "O",
        "credits": 3,
        "reqs": [
          "520046"
        ]
      },
      {
        "id": "520019",
        "name": "Mercado de Valores / Stock Market",
        "level": 8,
        "type": "O",
        "credits": 3,
        "reqs": [
          "520070"
        ]
      },
      {
        "id": "520060",
        "name": "Ética y Sostenibilidad Empresarial / Ethics And  Business Sustainability",
        "level": 8,
        "type": "O",
        "credits": 3,
        "reqs": [
          "520049"
        ]
      },
      {
        "id": "520061",
        "name": "Taller de Investigación Empresarial",
        "level": 8,
        "type": "O",
        "credits": 3,
        "reqs": [
          "520040",
          "520042"
        ]
      },
      {
        "id": "520068",
        "name": "Inteligencia de Negocios / Business Intelligence",
        "level": 9,
        "type": "O",
        "credits": 4,
        "reqs": [
          "520044"
        ]
      },
      {
        "id": "520069",
        "name": "Gerencia de Operaciones / Applied Operations  Management",
        "level": 9,
        "type": "O",
        "credits": 4,
        "reqs": [
          "520059"
        ]
      },
      {
        "id": "520070",
        "name": "Gerencia Financiera / Applied Financial Management",
        "level": 9,
        "type": "O",
        "credits": 4,
        "reqs": [
          "520019"
        ]
      },
      {
        "id": "4153",
        "name": "Seminario de Investigación en Administración I",
        "level": 9,
        "type": "O",
        "credits": 4,
        "reqs": [
          "520061"
        ]
      },
      {
        "id": "520076",
        "name": "Dirección Estratégica / Strategic Management",
        "level": 10,
        "type": "O",
        "credits": 4,
        "reqs": [
          "520058",
          "520070"
        ]
      },
      {
        "id": "520077",
        "name": "Gerencia de Personas / HR Strategic Management",
        "level": 10,
        "type": "O",
        "credits": 4,
        "reqs": [
          "520048"
        ]
      },
      {
        "id": "520025",
        "name": "Seminario de Investigación en Administración II",
        "level": 10,
        "type": "O",
        "credits": 4,
        "reqs": [
          "4153"
        ]
      },
      {
        "id": "520078",
        "name": "Gerencia de Marketing / Marketing Management",
        "level": 10,
        "type": "O",
        "credits": 4,
        "reqs": [
          "520050"
        ]
      },
      {
        "id": "520051",
        "name": "Gestión de Empresas Familiares",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "520038"
        ]
      },
      {
        "id": "520052",
        "name": "Sistemas Integrados de Gestión",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "520040"
        ]
      },
      {
        "id": "520053",
        "name": "Finanzas Personales y Nuevos Negocios",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "4125"
        ]
      },
      {
        "id": "520054",
        "name": "Gestión del Talento Global",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "520037"
        ]
      },
      {
        "id": "520055",
        "name": "Gestión de Personas por Competencias",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "520037"
        ]
      },
      {
        "id": "520056",
        "name": "Branding Estratégico",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "520039"
        ]
      },
      {
        "id": "520057",
        "name": "Taller de Marketing Digital",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "520039"
        ]
      },
      {
        "id": "520062",
        "name": "E.R.P. para la Gestión Empresarial",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "520044"
        ]
      },
      {
        "id": "520063",
        "name": "Turismo Sostenible",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "520036"
        ]
      },
      {
        "id": "520064",
        "name": "Agilidad Organizacional",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "520045"
        ]
      },
      {
        "id": "540035",
        "name": "Gerencia de Activos Financieros",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "520070"
        ]
      },
      {
        "id": "520066",
        "name": "Marca Personal y Gestión de Carrera",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "520041"
        ]
      },
      {
        "id": "520067",
        "name": "C.R.M. y Fidelización del Cliente",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "520042"
        ]
      },
      {
        "id": "520071",
        "name": "Gestión de Startups",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "520058"
        ]
      },
      {
        "id": "2165",
        "name": "Juego de Negocios",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "520058"
        ]
      },
      {
        "id": "520073",
        "name": "Gerencia de Proyectos",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "520059"
        ]
      },
      {
        "id": "3319",
        "name": "Gestión de Inversiones I",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "520019"
        ]
      },
      {
        "id": "3276",
        "name": "Herramientas Informáticas para las Finanzas",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "520019"
        ]
      },
      {
        "id": "520072",
        "name": "Gestión Ambiental",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "520060"
        ]
      },
      {
        "id": "520074",
        "name": "Seguridad, Salud Ocupacional y Bienestar Organizacional",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "520049"
        ]
      },
      {
        "id": "520017",
        "name": "Resolución de Conflictos y Negociación",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "520049"
        ]
      },
      {
        "id": "520075",
        "name": "Trade y Retail Marketing",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "520050"
        ]
      },
      {
        "id": "520079",
        "name": "Business Analytics",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "520068"
        ]
      },
      {
        "id": "520080",
        "name": "Inteligencia Artificial para la Gestión",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "520044"
        ]
      },
      {
        "id": "2372",
        "name": "Gestión del Servicio",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "520059"
        ]
      },
      {
        "id": "520081",
        "name": "Modelos de Optimización Logística",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "520059"
        ]
      },
      {
        "id": "520082",
        "name": "Gestión de Riesgos y Seguros",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "520070"
        ]
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
        "id": "520083",
        "name": "Coaching, Mindfulness e Inteligencia Emocional",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "520048"
        ]
      },
      {
        "id": "520084",
        "name": "Gobierno Corporativo y Compliance",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "520060"
        ]
      },
      {
        "id": "520085",
        "name": "Marketing B2B",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "520050"
        ]
      }
    ]
  },
  "contabilidad": {
    "name": "Contabilidad",
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
        "id": "510007",
        "name": "Ética Ciudadana",
        "level": 1,
        "type": "O",
        "credits": 2,
        "reqs": []
      },
      {
        "id": "510016",
        "name": "Matemática Aplicada a los Negocios I",
        "level": 1,
        "type": "O",
        "credits": 5,
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
        "id": "6508",
        "name": "Metodologías de Investigación",
        "level": 1,
        "type": "O",
        "credits": 3,
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
        "id": "510010",
        "name": "Filosofía Aplicada",
        "level": 2,
        "type": "O",
        "credits": 3,
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
        "id": "6510",
        "name": "Economía y Empresa",
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
        "id": "6502",
        "name": "Estadística Básica para los Negocios",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": [
          "510016"
        ]
      },
      {
        "id": "510017",
        "name": "Matemática Aplicada a los Negocios II",
        "level": 2,
        "type": "O",
        "credits": 5,
        "reqs": [
          "CON_003",
          "510016"
        ]
      },
      {
        "id": "CON_001",
        "name": "Fundamentals",
        "level": 3,
        "type": "O",
        "credits": 4,
        "reqs": [
          "6510"
        ]
      },
      {
        "id": "520031",
        "name": "Estadística para la Gestión Empresarial I",
        "level": 3,
        "type": "O",
        "credits": 4,
        "reqs": [
          "6502"
        ]
      },
      {
        "id": "540047",
        "name": "Fundamentos de Finanzas",
        "level": 3,
        "type": "O",
        "credits": 4,
        "reqs": [
          "510017"
        ]
      },
      {
        "id": "4123",
        "name": "Contabilidad General",
        "level": 3,
        "type": "O",
        "credits": 4,
        "reqs": [
          "510017"
        ]
      },
      {
        "id": "520004",
        "name": "Herramientas Informáticas para la Gestión I",
        "level": 3,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6510"
        ]
      },
      {
        "id": "520034",
        "name": "Estadística para la Gestión Empresarial II",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": [
          "520031"
        ]
      },
      {
        "id": "540023",
        "name": "Planeamiento Estratégico",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": [
          "CON_001"
        ]
      },
      {
        "id": "3326",
        "name": "Microeconomía / Microeconomics",
        "level": 4,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6510"
        ]
      },
      {
        "id": "4384",
        "name": "Costos y Presupuestos",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": [
          "4123"
        ]
      },
      {
        "id": "520035",
        "name": "Herramientas Informáticas para la Gestión II",
        "level": 4,
        "type": "O",
        "credits": 3,
        "reqs": [
          "520004"
        ]
      },
      {
        "id": "540021",
        "name": "Principios de Contabilidad Financiera",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": [
          "4123"
        ]
      },
      {
        "id": "3325",
        "name": "Macroeconomía / Macroeconomics",
        "level": 5,
        "type": "O",
        "credits": 3,
        "reqs": [
          "3326"
        ]
      },
      {
        "id": "4125",
        "name": "Elaboración de Estados Financieros",
        "level": 5,
        "type": "O",
        "credits": 3,
        "reqs": [
          "540047",
          "4384"
        ]
      },
      {
        "id": "540022",
        "name": "Contabilidad Gerencial",
        "level": 5,
        "type": "O",
        "credits": 4,
        "reqs": [
          "4384"
        ]
      },
      {
        "id": "520038",
        "name": "Gestión Legal Empresarial",
        "level": 5,
        "type": "O",
        "credits": 4,
        "reqs": [
          "540023"
        ]
      },
      {
        "id": "520036",
        "name": "Diseño Organizacional / Organizational Design",
        "level": 5,
        "type": "O",
        "credits": 4,
        "reqs": [
          "540023"
        ]
      },
      {
        "id": "540025",
        "name": "Gestión Tributaria",
        "level": 5,
        "type": "O",
        "credits": 4,
        "reqs": [
          "CON_003",
          "540021"
        ]
      },
      {
        "id": "CON_002",
        "name": "Analysis and Planning",
        "level": 6,
        "type": "O",
        "credits": 4,
        "reqs": [
          "4125"
        ]
      },
      {
        "id": "540027",
        "name": "Auditoría Interna y Cumplimiento",
        "level": 6,
        "type": "O",
        "credits": 4,
        "reqs": [
          "520036"
        ]
      },
      {
        "id": "540004",
        "name": "Contabilidad Financiera Intermedia",
        "level": 6,
        "type": "O",
        "credits": 4,
        "reqs": [
          "540021"
        ]
      },
      {
        "id": "540005",
        "name": "Impuesto a la Renta",
        "level": 6,
        "type": "O",
        "credits": 4,
        "reqs": [
          "CON_003",
          "540025"
        ]
      },
      {
        "id": "CON_003",
        "name": "/ I.T. for Management",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "CON_003",
          "520035"
        ]
      },
      {
        "id": "540007",
        "name": "Auditoría Financiera I",
        "level": 7,
        "type": "O",
        "credits": 4,
        "reqs": [
          "540027"
        ]
      },
      {
        "id": "540028",
        "name": "Finanzas Corporativas I",
        "level": 7,
        "type": "O",
        "credits": 4,
        "reqs": [
          "CON_003"
        ]
      },
      {
        "id": "520049",
        "name": "Legislación Laboral",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": [
          "520038"
        ]
      },
      {
        "id": "4305",
        "name": "Impuestos Indirectos",
        "level": 7,
        "type": "O",
        "credits": 4,
        "reqs": [
          "540005"
        ]
      },
      {
        "id": "520048",
        "name": "Taller de Liderazgo y Habilidades Gerenciales",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": [
          "CON_003",
          "520036"
        ]
      },
      {
        "id": "CON_004",
        "name": "Público",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "540004"
        ]
      },
      {
        "id": "540032",
        "name": "Gestión Bancaria",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "CON_003"
        ]
      },
      {
        "id": "4225",
        "name": "Seminario de Informática Contable",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "CON_003",
          "520035"
        ]
      },
      {
        "id": "540033",
        "name": "Banca de Inversión",
        "level": 8,
        "type": "O",
        "credits": 3,
        "reqs": [
          "540028"
        ]
      },
      {
        "id": "540034",
        "name": "Introducción a la Investigación Contable",
        "level": 8,
        "type": "O",
        "credits": 3,
        "reqs": [
          "540004"
        ]
      },
      {
        "id": "540009",
        "name": "Contabilidad Financiera Avanzada",
        "level": 8,
        "type": "O",
        "credits": 4,
        "reqs": [
          "CON_003",
          "540004"
        ]
      },
      {
        "id": "CON_005",
        "name": "Negocios",
        "level": 8,
        "type": "O",
        "credits": 4,
        "reqs": [
          "520048",
          "CON_003"
        ]
      },
      {
        "id": "CON_006",
        "name": "Business Sustainability",
        "level": 8,
        "type": "O",
        "credits": 3,
        "reqs": [
          "520049"
        ]
      },
      {
        "id": "540035",
        "name": "Gerencia de Activos Financieros",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "540028"
        ]
      },
      {
        "id": "540036",
        "name": "Tributación Sectorial",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "540005"
        ]
      },
      {
        "id": "540037",
        "name": "ERP para la Gestión Empresarial",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "CON_003"
        ]
      },
      {
        "id": "540038",
        "name": "Auditoría Forense",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "540007"
        ]
      },
      {
        "id": "540010",
        "name": "Seminario de Investigación Contable I",
        "level": 9,
        "type": "O",
        "credits": 4,
        "reqs": [
          "540034"
        ]
      },
      {
        "id": "4216",
        "name": "Finanzas Corporativas II",
        "level": 9,
        "type": "O",
        "credits": 4,
        "reqs": [
          "CON_003",
          "540028"
        ]
      },
      {
        "id": "CON_007",
        "name": "Intelligence",
        "level": 9,
        "type": "O",
        "credits": 4,
        "reqs": [
          "CON_003"
        ]
      },
      {
        "id": "540040",
        "name": "Auditoría Financiera II",
        "level": 9,
        "type": "O",
        "credits": 4,
        "reqs": [
          "540007"
        ]
      },
      {
        "id": "2165",
        "name": "Juego de Negocios",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "CON_003"
        ]
      },
      {
        "id": "3276",
        "name": "Herramientas Informáticas para las Finanzas",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "540033"
        ]
      },
      {
        "id": "3319",
        "name": "Gestión de Inversiones I",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "CON_003",
          "540033"
        ]
      },
      {
        "id": "CON_008",
        "name": "Transferencia",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "540005",
          "CON_003"
        ]
      },
      {
        "id": "CON_009",
        "name": "Financiera: Perspectiva Tributaria",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "540009"
        ]
      },
      {
        "id": "520514",
        "name": "Marketing Personal",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "CON_003"
        ]
      },
      {
        "id": "CON_010",
        "name": "Organizacional",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "520049"
        ]
      },
      {
        "id": "540013",
        "name": "Seminario de Investigación Contable II",
        "level": 10,
        "type": "O",
        "credits": 4,
        "reqs": [
          "540010"
        ]
      },
      {
        "id": "540045",
        "name": "Dirección Financiera Aplicada",
        "level": 10,
        "type": "O",
        "credits": 4,
        "reqs": [
          "CON_003",
          "4216"
        ]
      },
      {
        "id": "CON_011",
        "name": "Económicos",
        "level": 10,
        "type": "O",
        "credits": 4,
        "reqs": [
          "540009"
        ]
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
        "id": "4140",
        "name": "Auditoría y Planeamiento Tributario",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "540005"
        ]
      },
      {
        "id": "540046",
        "name": "Analítica de Negocios / Business Analytics",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "CON_003"
        ]
      },
      {
        "id": "520082",
        "name": "Gestión de Riesgos y Seguros",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "CON_003",
          "4216"
        ]
      },
      {
        "id": "CON_012",
        "name": "Emocional",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "520048"
        ]
      }
    ]
  },
  "derecho": {
    "name": "Derecho",
    "courses": [
      {
        "id": "510001",
        "name": "GLOBALIZACIÓN",
        "level": 1,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "510003",
        "name": "LENGUAJE",
        "level": 1,
        "type": "O",
        "credits": 4,
        "reqs": []
      },
      {
        "id": "6508",
        "name": "METODOLOGÍAS",
        "level": 1,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6505",
        "name": "DESARROLLO",
        "level": 1,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6383",
        "name": "FUNDAMENTOS",
        "level": 1,
        "type": "O",
        "credits": 5,
        "reqs": []
      },
      {
        "id": "510004",
        "name": "ÉTICA",
        "level": 1,
        "type": "O",
        "credits": 2,
        "reqs": []
      },
      {
        "id": "6510",
        "name": "ECONOMÍA",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6511",
        "name": "LENGUAJE",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6511"
        ]
      },
      {
        "id": "6512",
        "name": "PROCESOS",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6513",
        "name": "TEMAS",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6514",
        "name": "LITERATURA",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6511"
        ]
      },
      {
        "id": "6515",
        "name": "ARTE",
        "level": 2,
        "type": "O",
        "credits": 5,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "610030",
        "name": "EXPRESIÓN",
        "level": 3,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6511"
        ]
      },
      {
        "id": "610031",
        "name": "PROBLEMÁTICA",
        "level": 3,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6512"
        ]
      },
      {
        "id": "6227",
        "name": "HISTORIA",
        "level": 3,
        "type": "O",
        "credits": 4,
        "reqs": []
      },
      {
        "id": "7196",
        "name": "INTRODUCCIÓN",
        "level": 3,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "7209",
        "name": "INTRODUCCIÓN",
        "level": 3,
        "type": "O",
        "credits": 4,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "7020",
        "name": "INTRODUCCIÓN",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": [
          "610023"
        ]
      },
      {
        "id": "7040",
        "name": "DERECHO",
        "level": 4,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6228"
        ]
      },
      {
        "id": "7208",
        "name": "DERECHO",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": [
          "6515"
        ]
      },
      {
        "id": "7421",
        "name": "LÓGICA",
        "level": 4,
        "type": "O",
        "credits": 3,
        "reqs": [
          "610023"
        ]
      },
      {
        "id": "7009",
        "name": "DERECHO",
        "level": 5,
        "type": "O",
        "credits": 4,
        "reqs": [
          "6515"
        ]
      },
      {
        "id": "7212",
        "name": "DERECHO",
        "level": 5,
        "type": "O",
        "credits": 4,
        "reqs": [
          "610026"
        ]
      },
      {
        "id": "7410",
        "name": "DERECHO",
        "level": 5,
        "type": "O",
        "credits": 4,
        "reqs": [
          "6510"
        ]
      },
      {
        "id": "7213",
        "name": "DERECHO",
        "level": 6,
        "type": "O",
        "credits": 4,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "7411",
        "name": "DERECHO",
        "level": 6,
        "type": "O",
        "credits": 4,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "4026",
        "name": "INTRODUCCIÓN",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "610002",
        "name": "DERECHO",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "7060",
        "name": "DERECHO",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "7113",
        "name": "DERECHO",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6515"
        ]
      },
      {
        "id": "7238",
        "name": "DERECHO",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "7240",
        "name": "DERECHO",
        "level": 6,
        "type": "O",
        "credits": 5,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "7412",
        "name": "DERECHO",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "6228",
        "name": "HISTORIA",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "6228"
        ]
      },
      {
        "id": "7106",
        "name": "DERECHO",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "7197",
        "name": "CIENCIA",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "610023"
        ]
      },
      {
        "id": "7227",
        "name": "DERECHO",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "7228",
        "name": "CRIMINOLOGÍA",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "7229",
        "name": "DERECHO",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "610003",
        "name": "TEORÍA",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "7242",
        "name": "DERECHO",
        "level": 8,
        "type": "O",
        "credits": 4,
        "reqs": [
          "6515"
        ]
      },
      {
        "id": "7245",
        "name": "DERECHO",
        "level": 8,
        "type": "O",
        "credits": 5,
        "reqs": [
          "6515"
        ]
      },
      {
        "id": "7250",
        "name": "DERECHO",
        "level": 8,
        "type": "O",
        "credits": 4,
        "reqs": [
          "6510"
        ]
      },
      {
        "id": "7107",
        "name": "CONTRATACIÓN",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "7215",
        "name": "DERECHO",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "7351",
        "name": "NEGOCIACION",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "610005",
        "name": "INGLÉS",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "610006",
        "name": "FUNDAMENTOS",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "610007",
        "name": "TEMAS",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "610027",
        "name": "PROPIEDAD",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "610028",
        "name": "INSTRUMENTOS",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "6510"
        ]
      },
      {
        "id": "7115",
        "name": "DERECHO",
        "level": 9,
        "type": "O",
        "credits": 4,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "7117",
        "name": "DERECHO",
        "level": 9,
        "type": "O",
        "credits": 4,
        "reqs": [
          "6515"
        ]
      },
      {
        "id": "7243",
        "name": "DERECHO",
        "level": 9,
        "type": "O",
        "credits": 4,
        "reqs": [
          "6515"
        ]
      },
      {
        "id": "7122",
        "name": "ESTADOS",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "610023"
        ]
      },
      {
        "id": "7256",
        "name": "TUTELA",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "6515"
        ]
      },
      {
        "id": "7365",
        "name": "DERECHO",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "6515"
        ]
      },
      {
        "id": "7388",
        "name": "DERECHO",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "6515"
        ]
      },
      {
        "id": "610008",
        "name": "CALIDAD",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "6515"
        ]
      },
      {
        "id": "610011",
        "name": "DERECHO",
        "level": 9,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6515"
        ]
      },
      {
        "id": "7145",
        "name": "FUSIONES",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "6515"
        ]
      },
      {
        "id": "7355",
        "name": "SEMINARIO",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "610017",
        "name": "TEMAS",
        "level": 11,
        "type": "E",
        "credits": 2,
        "reqs": [
          "6515"
        ]
      },
      {
        "id": "1470",
        "name": "ÉTICA",
        "level": 9,
        "type": "O",
        "credits": 3,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "7261",
        "name": "DERECHO",
        "level": 9,
        "type": "O",
        "credits": 5,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "7255",
        "name": "DERECHO",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "7267",
        "name": "POLÍTICA",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "7273",
        "name": "SEMINARIO",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "7284",
        "name": "DERECHO",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "7344",
        "name": "DERECHO",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "610019",
        "name": "ARBITRAJES",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "610020",
        "name": "PROJECT",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "610021",
        "name": "FONDOS",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "610022",
        "name": "DERECHO",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "610029",
        "name": "REGULACIÓN",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "610023",
        "name": "INTRODUCCIÓN",
        "level": 9,
        "type": "O",
        "credits": 2,
        "reqs": []
      },
      {
        "id": "610018",
        "name": "SEMINARIO",
        "level": 9,
        "type": "O",
        "credits": 3,
        "reqs": [
          "610024"
        ]
      },
      {
        "id": "7032",
        "name": "DERECHO",
        "level": 9,
        "type": "O",
        "credits": 3,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "7278",
        "name": "SEMINARIO",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "7282",
        "name": "COOPERACIÓN",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "610024",
        "name": "SEMINARIO",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "7032"
        ]
      },
      {
        "id": "610025",
        "name": "TEMAS",
        "level": 11,
        "type": "E",
        "credits": 2,
        "reqs": [
          "6515"
        ]
      },
      {
        "id": "610026",
        "name": "TEMAS",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "6515"
        ]
      }
    ]
  },
  "ambiental": {
    "name": "Ambiental",
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
        "id": "510005",
        "name": "Introducción a la Ingeniería",
        "level": 1,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6505",
        "name": "Desarrollo Personal y Social",
        "level": 1,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6508",
        "name": "Metodologías de la Investigación",
        "level": 1,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "510004",
        "name": "Ética Cívica",
        "level": 1,
        "type": "O",
        "credits": 2,
        "reqs": []
      },
      {
        "id": "6382",
        "name": "Matemática Básica",
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
        "id": "6512",
        "name": "Procesos Sociales y Políticos",
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
          "6382"
        ]
      },
      {
        "id": "6510",
        "name": "Economía y Empresa",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6513",
        "name": "Temas de Filosofía",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6503",
        "name": "Cálculo I",
        "level": 2,
        "type": "O",
        "credits": 5,
        "reqs": [
          "6382"
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
        "id": "450001",
        "name": "Sistemas de Información Geográfica",
        "level": 3,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "560044",
        "name": "Fundamentos de Programación",
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
        "id": "450002",
        "name": "Principios de Ingeniería Sostenible",
        "level": 4,
        "type": "O",
        "credits": 3,
        "reqs": [
          "560044"
        ]
      },
      {
        "id": "560046",
        "name": "Estadística y Probabilidad",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": [
          "560042"
        ]
      },
      {
        "id": "450003",
        "name": "Biología Ambiental",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": []
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
        "id": "450004",
        "name": "Química Ambiental",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": [
          "5643"
        ]
      },
      {
        "id": "450046",
        "name": "Cálculo III",
        "level": 4,
        "type": "O",
        "credits": 3,
        "reqs": [
          "560042"
        ]
      },
      {
        "id": "450047",
        "name": "Estadística Aplicada",
        "level": 5,
        "type": "O",
        "credits": 4,
        "reqs": [
          "560046"
        ]
      },
      {
        "id": "450005",
        "name": "Derecho Y Legislación Ambiental",
        "level": 5,
        "type": "O",
        "credits": 3,
        "reqs": [
          "450002"
        ]
      },
      {
        "id": "450006",
        "name": "Cambio Climático",
        "level": 5,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "450007",
        "name": "Termodinámica",
        "level": 5,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "450008",
        "name": "Ciencia del Suelo",
        "level": 5,
        "type": "O",
        "credits": 3,
        "reqs": [
          "450004"
        ]
      },
      {
        "id": "450009",
        "name": "Técnicas Instrumentales de Análisis",
        "level": 5,
        "type": "O",
        "credits": 4,
        "reqs": [
          "450004"
        ]
      },
      {
        "id": "450010",
        "name": "Gestión Sostenible de Residuos",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "450005"
        ]
      },
      {
        "id": "450011",
        "name": "Costeo de Proyectos Ambientales",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "450012",
        "name": "Tecnologías de Control de la Contaminación del Aire",
        "level": 6,
        "type": "O",
        "credits": 4,
        "reqs": [
          "450047"
        ]
      },
      {
        "id": "450013",
        "name": "Energías Renovables",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "560045"
        ]
      },
      {
        "id": "450014",
        "name": "Mecánica de Fluidos",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "560045"
        ]
      },
      {
        "id": "450015",
        "name": "Microbiología Ambiental",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "450003"
        ]
      },
      {
        "id": "AMB_001",
        "name": "Electivo",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "450016",
        "name": "Medio Ambiente y Sociedad",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "450017",
        "name": "Recursos Naturales y Ecosistemas",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "450018",
        "name": "Tecnologías de Control de la Contaminación del Agua",
        "level": 7,
        "type": "O",
        "credits": 4,
        "reqs": [
          "450014"
        ]
      },
      {
        "id": "450019",
        "name": "Ética y Responsabilidad Social",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "560066",
        "name": "Sistemas Integrados de Gestión",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": [
          "450005"
        ]
      },
      {
        "id": "450045",
        "name": "Economía Ambiental",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": [
          "450011"
        ]
      },
      {
        "id": "AMB_002",
        "name": "Electivo",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "450020",
        "name": "Evaluación del Impacto Ambiental",
        "level": 8,
        "type": "O",
        "credits": 3,
        "reqs": [
          "450017"
        ]
      },
      {
        "id": "450048",
        "name": "Hidrología",
        "level": 8,
        "type": "O",
        "credits": 4,
        "reqs": []
      },
      {
        "id": "450021",
        "name": "Tecnologías de Control de la Contaminación del Suelo",
        "level": 8,
        "type": "O",
        "credits": 4,
        "reqs": [
          "450017"
        ]
      },
      {
        "id": "560060",
        "name": "Inteligencia de Negocios",
        "level": 8,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "450022",
        "name": "Gestión de Recursos Energéticos",
        "level": 8,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "AMB_003",
        "name": "Electivo",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "AMB_004",
        "name": "Electivo",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "450023",
        "name": "Ecotoxicología Ambiental",
        "level": 9,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "450024",
        "name": "Proyecto De Ingeniería Aplicada I",
        "level": 9,
        "type": "O",
        "credits": 4,
        "reqs": [
          "560060"
        ]
      },
      {
        "id": "450025",
        "name": "Formulación Y Diseño De Proyectos Sostenibles",
        "level": 9,
        "type": "O",
        "credits": 3,
        "reqs": [
          "450020"
        ]
      },
      {
        "id": "AMB_005",
        "name": "Electivo",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "AMB_006",
        "name": "Electivo",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "450026",
        "name": "Proyecto de Ingeniería Aplicada II",
        "level": 10,
        "type": "O",
        "credits": 4,
        "reqs": [
          "450024"
        ]
      },
      {
        "id": "5674",
        "name": "Gestión de Proyectos",
        "level": 10,
        "type": "O",
        "credits": 3,
        "reqs": [
          "450025"
        ]
      },
      {
        "id": "AMB_007",
        "name": "Electivo",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "AMB_008",
        "name": "Electivo",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "450028",
        "name": "Servicios Ecosistémicos 3",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "450029",
        "name": "Ecología 3",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "450030",
        "name": "Economía Circular 3",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "450031",
        "name": "Análisis del Ciclo de Vida 3",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "450032",
        "name": "Tecnología Solar Fotovoltaica 3",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "520074",
        "name": "Seguridad, Salud Ocupacional y Bienestar Organizacional 3",
        "level": 11,
        "type": "E",
        "credits": 2,
        "reqs": []
      },
      {
        "id": "450033",
        "name": "Calidad de Aire Interior 3",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "450034",
        "name": "Evaluación de Riesgos y Gestión de Productos Químicos Peligrosos 3",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "450035",
        "name": "Deterioro Ambiental y Salud Humana 3",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "450036",
        "name": "Logistics with Green & Sustainable Supply Chain 3",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "450037",
        "name": "Prevención y Negociación de Conflictos Ambientales 3",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "450038",
        "name": "Gestión de Riesgos Ambientales 3",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "450039",
        "name": "Estrategias Empresariales para la Descarbonización 3",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "450040",
        "name": "Biotecnología Ambiental 3",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "560091",
        "name": "Diseño y Prototipado 3",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "450041",
        "name": "Aplicaciones de IoT para la Sostenibilidad Ambiental 3",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "450042",
        "name": "Modelamiento y Simulación de Sistemas Ambientales 3",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "450043",
        "name": "Tecnologías para la Biorremediación 3",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "450044",
        "name": "Manejo de Sitios Contaminados 3",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      }
    ]
  },
  "civil": {
    "name": "Civil",
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
          "510014"
        ]
      },
      {
        "id": "1459",
        "name": "Cálculo II",
        "level": 3,
        "type": "O",
        "credits": 4,
        "reqs": [
          "6503"
        ]
      },
      {
        "id": "710042",
        "name": "Topografía",
        "level": 3,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "710081",
        "name": "Probabilidad y Estadística Aplicada",
        "level": 3,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6503"
        ]
      },
      {
        "id": "710072",
        "name": "Ingeniería Gráfica",
        "level": 3,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "710085",
        "name": "Química Aplicada",
        "level": 3,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "1472",
        "name": "Física I",
        "level": 3,
        "type": "O",
        "credits": 4,
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
        "id": "710086",
        "name": "Tecnología de Construcción I",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": []
      },
      {
        "id": "710087",
        "name": "Geología Aplicada",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": [
          "710042"
        ]
      },
      {
        "id": "710073",
        "name": "Modelación de Información de Edificaciones I",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": [
          "710072"
        ]
      },
      {
        "id": "710088",
        "name": "Física II",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": [
          "1472"
        ]
      },
      {
        "id": "710051",
        "name": "Ecuaciones Diferenciales",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": [
          "1459"
        ]
      },
      {
        "id": "710010",
        "name": "Tecnología del Concreto",
        "level": 4,
        "type": "O",
        "credits": 3,
        "reqs": [
          "710085"
        ]
      },
      {
        "id": "710006",
        "name": "Programación Digital",
        "level": 5,
        "type": "O",
        "credits": 3,
        "reqs": [
          "710081"
        ]
      },
      {
        "id": "710014",
        "name": "Mecánica de Suelos I",
        "level": 5,
        "type": "O",
        "credits": 4,
        "reqs": [
          "710087"
        ]
      },
      {
        "id": "710011",
        "name": "Dinámica",
        "level": 5,
        "type": "O",
        "credits": 4,
        "reqs": [
          "710051"
        ]
      },
      {
        "id": "710074",
        "name": "Modelación de Información de Edificaciones II",
        "level": 5,
        "type": "O",
        "credits": 4,
        "reqs": [
          "710073"
        ]
      },
      {
        "id": "710009",
        "name": "Estática",
        "level": 5,
        "type": "O",
        "credits": 4,
        "reqs": [
          "1472"
        ]
      },
      {
        "id": "710089",
        "name": "Tecnología de Construcción II",
        "level": 5,
        "type": "O",
        "credits": 4,
        "reqs": [
          "710086"
        ]
      },
      {
        "id": "710053",
        "name": "Ingeniería Ambiental",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "710089"
        ]
      },
      {
        "id": "710019",
        "name": "Mecánica de Suelos II",
        "level": 6,
        "type": "O",
        "credits": 4,
        "reqs": [
          "710014"
        ]
      },
      {
        "id": "710090",
        "name": "Tecnología de los Materiales",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "710010"
        ]
      },
      {
        "id": "710091",
        "name": "Instalaciones en Edificaciones",
        "level": 6,
        "type": "O",
        "credits": 5,
        "reqs": [
          "710074",
          "710088"
        ]
      },
      {
        "id": "710092",
        "name": "Resistencia de Materiales",
        "level": 6,
        "type": "O",
        "credits": 5,
        "reqs": [
          "710009"
        ]
      },
      {
        "id": "710093",
        "name": "Costos y Presupuestos",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "710086"
        ]
      },
      {
        "id": "710016",
        "name": "Mecánica de Fluidos",
        "level": 7,
        "type": "O",
        "credits": 4,
        "reqs": [
          "710011"
        ]
      },
      {
        "id": "710094",
        "name": "Gestión de Proyectos de Construcción",
        "level": 7,
        "type": "O",
        "credits": 4,
        "reqs": [
          "710093"
        ]
      },
      {
        "id": "710024",
        "name": "Ingeniería de Transporte I",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": [
          "710019"
        ]
      },
      {
        "id": "CIV_001",
        "name": "Regional",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": [
          "710089"
        ]
      },
      {
        "id": "710026",
        "name": "Análisis Estructural I",
        "level": 7,
        "type": "O",
        "credits": 4,
        "reqs": [
          "710092"
        ]
      },
      {
        "id": "710096",
        "name": "Ética, Liderazgo y Responsabilidad Social",
        "level": 7,
        "type": "O",
        "credits": 2,
        "reqs": []
      },
      {
        "id": "710045",
        "name": "Métodos Numéricos",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": [
          "710006"
        ]
      },
      {
        "id": "710059",
        "name": "Hidráulica",
        "level": 8,
        "type": "O",
        "credits": 4,
        "reqs": [
          "710016"
        ]
      },
      {
        "id": "CIV_002",
        "name": "Mantenimiento",
        "level": 8,
        "type": "O",
        "credits": 3,
        "reqs": [
          "710094"
        ]
      },
      {
        "id": "710078",
        "name": "Gestión Estratégica de Contratos",
        "level": 8,
        "type": "O",
        "credits": 3,
        "reqs": [
          "710094"
        ]
      },
      {
        "id": "710060",
        "name": "Concreto Armado I",
        "level": 8,
        "type": "O",
        "credits": 4,
        "reqs": [
          "710092"
        ]
      },
      {
        "id": "710031",
        "name": "Ingeniería Sismorresistente",
        "level": 8,
        "type": "O",
        "credits": 4,
        "reqs": [
          "710026"
        ]
      },
      {
        "id": "CIV_003",
        "name": "Electivo 1",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "710027",
        "name": "Hidrología",
        "level": 9,
        "type": "O",
        "credits": 4,
        "reqs": [
          "710059"
        ]
      },
      {
        "id": "CIV_004",
        "name": "Electivo 2",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "CIV_005",
        "name": "Electivo 3",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "710099",
        "name": "Estructuras Metálicas",
        "level": 10,
        "type": "O",
        "credits": 5,
        "reqs": [
          "710026"
        ]
      },
      {
        "id": "CIV_006",
        "name": "Electivo 4",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "CIV_007",
        "name": "Electivo 5",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "710083",
        "name": "Gestión de Calidad",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "710097",
        "name": "Diseño y Construcción Virtual",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "710094"
        ]
      },
      {
        "id": "710034",
        "name": "Análisis Estructural II",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "710026"
        ]
      },
      {
        "id": "710082",
        "name": "Geomática",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "710046",
        "name": "Gestión de Seguridad y Salud en el Trabajo",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "710065",
        "name": "Concreto Armado II",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "710060"
        ]
      },
      {
        "id": "710066",
        "name": "Concreto Preesforzado",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "710060"
        ]
      },
      {
        "id": "710021",
        "name": "Abastecimiento de Agua y Saneamiento",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "710059"
        ]
      },
      {
        "id": "710039",
        "name": "Puentes",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "710060"
        ]
      },
      {
        "id": "710048",
        "name": "Túneles",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "710079",
        "name": "Gestión de Riesgos de Desastres",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "CIV_001"
        ]
      },
      {
        "id": "710084",
        "name": "Geotecnia en Infraestructura de Transporte",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "710024"
        ]
      },
      {
        "id": "710098",
        "name": "Productividad en Obras",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "710094"
        ]
      },
      {
        "id": "710101",
        "name": "Ingeniería de los Recursos Hidráulicos",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "710027"
        ]
      },
      {
        "id": "710100",
        "name": "Albañilería",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "710070",
        "name": "Gestión y Desarrollo Inmobiliario",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "710080",
        "name": "Gestión de Riesgos en Proyectos",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "710102",
        "name": "Ingeniería de Transporte II",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "710024"
        ]
      },
      {
        "id": "710069",
        "name": "Infraestructuras Sostenibles",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "CIV_002"
        ]
      },
      {
        "id": "710064",
        "name": "Pavimentos",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "710024"
        ]
      },
      {
        "id": "CIV_008",
        "name": "Organizacional",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      }
    ]
  },
  "mecatronica": {
    "name": "Mecatronica",
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
        "id": "510005",
        "name": "Introducción a la Ingeniería",
        "level": 1,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6505",
        "name": "Desarrollo Personal y Social",
        "level": 1,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6508",
        "name": "Metodologías de la Investigación",
        "level": 1,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "510004",
        "name": "Ética Cívica",
        "level": 1,
        "type": "O",
        "credits": 2,
        "reqs": []
      },
      {
        "id": "6382",
        "name": "Matemática Básica",
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
        "id": "6512",
        "name": "Procesos Sociales y Políticos",
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
          "6382"
        ]
      },
      {
        "id": "6510",
        "name": "Economía y Empresa",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6513",
        "name": "Temas de Filosofía",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6503",
        "name": "Cálculo I",
        "level": 2,
        "type": "O",
        "credits": 5,
        "reqs": [
          "6382"
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
        "id": "1459",
        "name": "Cálculo II",
        "level": 3,
        "type": "O",
        "credits": 5,
        "reqs": [
          "6503"
        ]
      },
      {
        "id": "MEC_001",
        "name": "Circuitos Digitales",
        "level": 3,
        "type": "O",
        "credits": 4,
        "reqs": [
          "6384"
        ]
      },
      {
        "id": "1472",
        "name": "Física I",
        "level": 3,
        "type": "O",
        "credits": 4,
        "reqs": [
          "6503"
        ]
      },
      {
        "id": "560048",
        "name": "Sistemas Organizacionales / Organizational Systems",
        "level": 3,
        "type": "O",
        "credits": 2,
        "reqs": [
          "6510"
        ]
      },
      {
        "id": "MEC_002",
        "name": "Dibujo Mecánico",
        "level": 3,
        "type": "O",
        "credits": 4,
        "reqs": [
          "6384"
        ]
      },
      {
        "id": "710051",
        "name": "Ecuaciones Diferenciales",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": [
          "1459"
        ]
      },
      {
        "id": "560046",
        "name": "Estadística Y Probabilidad",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": [
          "1459"
        ]
      },
      {
        "id": "MEC_003",
        "name": "Circuitos Eléctricos",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": [
          "MEC_001"
        ]
      },
      {
        "id": "MEC_004",
        "name": "Física II",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": [
          "1472"
        ]
      },
      {
        "id": "MEC_005",
        "name": "Fundamentos De Máquinas Y Mecanismos",
        "level": 4,
        "type": "O",
        "credits": 3,
        "reqs": [
          "MEC_002"
        ]
      },
      {
        "id": "5643",
        "name": "Química General",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": []
      },
      {
        "id": "MEC_006",
        "name": "Análisis de Señales y Sistemas",
        "level": 6,
        "type": "O",
        "credits": 4,
        "reqs": [
          "MEC_013"
        ]
      },
      {
        "id": "MEC_007",
        "name": "Tecnología de Materiales e Innovación",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "MEC_017"
        ]
      },
      {
        "id": "MEC_008",
        "name": "Control de Sistemas Dinámicos I",
        "level": 6,
        "type": "O",
        "credits": 4,
        "reqs": [
          "MEC_013"
        ]
      },
      {
        "id": "MEC_009",
        "name": "Ingeniería de Fluidos y Calor",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "MEC_016"
        ]
      },
      {
        "id": "MEC_010",
        "name": "Desarrollo de Competencias Gerenciales",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "MEC_011",
        "name": "Microcontroladores",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "MEC_015"
        ]
      },
      {
        "id": "MEC_012",
        "name": "Sensores y Actuadores Inteligentes",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "MEC_003"
        ]
      },
      {
        "id": "MEC_013",
        "name": "Análisis Complejo y Transformadas",
        "level": 6,
        "type": "O",
        "credits": 4,
        "reqs": [
          "710051"
        ]
      },
      {
        "id": "MEC_014",
        "name": "Costos y Presupuestos",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "560048"
        ]
      },
      {
        "id": "MEC_015",
        "name": "Programación de Computadoras",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "560040"
        ]
      },
      {
        "id": "MEC_016",
        "name": "Mecánica Aplicada",
        "level": 6,
        "type": "O",
        "credits": 4,
        "reqs": [
          "MEC_004"
        ]
      },
      {
        "id": "MEC_017",
        "name": "Ingeniería de Resistencia de Materiales",
        "level": 6,
        "type": "O",
        "credits": 4,
        "reqs": [
          "MEC_004"
        ]
      },
      {
        "id": "MEC_018",
        "name": "Circuitos Electrónicos",
        "level": 6,
        "type": "O",
        "credits": 4,
        "reqs": [
          "MEC_003"
        ]
      },
      {
        "id": "MEC_019",
        "name": "Diseño y Manufactura Asistida Por Computador",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "MEC_020",
        "name": "Máquinas Eléctricas",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "MEC_021",
        "name": "Aprendizaje de Máquinas / Machine Learning",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "MEC_022",
        "name": "Sistemas Embebidos e Iot Industrial",
        "level": 7,
        "type": "O",
        "credits": 4,
        "reqs": []
      },
      {
        "id": "MEC_023",
        "name": "Control de Sistemas Dinámicos Ii",
        "level": 7,
        "type": "O",
        "credits": 4,
        "reqs": [
          "MEC_008"
        ]
      },
      {
        "id": "MEC_024",
        "name": "Formulación y Evaluación de Proyectos",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "MEC_025",
        "name": "Electivo I",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "MEC_026",
        "name": "Diseño de Sistemas Mecatrónicos",
        "level": 8,
        "type": "O",
        "credits": 4,
        "reqs": []
      },
      {
        "id": "MEC_027",
        "name": "Proyecto de Investigación",
        "level": 8,
        "type": "O",
        "credits": 4,
        "reqs": []
      },
      {
        "id": "MEC_028",
        "name": "Control de Procesos Industriales",
        "level": 8,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "MEC_029",
        "name": "Manufactura Integrada por Computadora",
        "level": 8,
        "type": "O",
        "credits": 4,
        "reqs": []
      },
      {
        "id": "MEC_030",
        "name": "Procesamiento Digital de Imágenes",
        "level": 8,
        "type": "O",
        "credits": 4,
        "reqs": []
      },
      {
        "id": "MEC_031",
        "name": "Electivo II",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "MEC_032",
        "name": "Diseño de Plantas Industriales",
        "level": 9,
        "type": "O",
        "credits": 4,
        "reqs": []
      },
      {
        "id": "MEC_033",
        "name": "Proyecto Integrador de Mecatrónica I",
        "level": 9,
        "type": "O",
        "credits": 4,
        "reqs": [
          "MEC_027"
        ]
      },
      {
        "id": "MEC_034",
        "name": "Gestión de Proyectos",
        "level": 9,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "MEC_035",
        "name": "Electivo III",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "MEC_036",
        "name": "Electivo IV",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "MEC_037",
        "name": "Sistemas Robóticos Industriales",
        "level": 10,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "MEC_038",
        "name": "Proyecto Integrador de Mecatrónica II",
        "level": 10,
        "type": "O",
        "credits": 4,
        "reqs": [
          "MEC_033"
        ]
      },
      {
        "id": "MEC_039",
        "name": "Electivo V",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "MEC_040",
        "name": "Electivo VI",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "MEC_041",
        "name": "Sistemas Neumáticos",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "MEC_042",
        "name": "Big Data",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "MEC_043",
        "name": "Gestión de Proyectos de Diseño",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "MEC_044",
        "name": "Redes y Protocolos Industriales",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "MEC_045",
        "name": "Ciber Seguridad",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "MEC_046",
        "name": "Tecnología Industrial",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "MEC_047",
        "name": "Sistemas Autónomos no Tripulados",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "MEC_048",
        "name": "Diseño y Fabricación de Grippers",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "MEC_049",
        "name": "Sistemas Scada",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "MEC_050",
        "name": "Visión Artificial para Robótica",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "MEC_051",
        "name": "Realidad Virtual y Aumentada",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "MEC_052",
        "name": "Digital Twin",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "MEC_053",
        "name": "Transformación Digital",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "MEC_054",
        "name": "Diseño y Prototipado",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "MEC_055",
        "name": "Tecnologías de Programación",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "MEC_056",
        "name": "Diseño de Proyectos Sostenibles",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      }
    ]
  },
  "marketing": {
    "name": "Marketing",
    "courses": [
      {
        "id": "510001",
        "name": "Globalización y Realidad Nacional",
        "level": 1,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6506",
        "name": "Lenguaje y Comunicación I",
        "level": 1,
        "type": "O",
        "credits": 4,
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
        "id": "6505",
        "name": "Desarrollo Personal y Social",
        "level": 1,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6382",
        "name": "Matemática Básica",
        "level": 1,
        "type": "O",
        "credits": 5,
        "reqs": []
      },
      {
        "id": "510002",
        "name": "Ética Cívica",
        "level": 1,
        "type": "O",
        "credits": 2,
        "reqs": []
      },
      {
        "id": "6510",
        "name": "Economía y Empresa",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6511",
        "name": "Lenguaje y Comunicación II",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6506"
        ]
      },
      {
        "id": "6512",
        "name": "Procesos Sociales y Políticos",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6513",
        "name": "Temas de Filosofía",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6502",
        "name": "Estadística Básica para los Negocios",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6382"
        ]
      },
      {
        "id": "6337",
        "name": "Matemática Aplicada a los Negocios",
        "level": 2,
        "type": "O",
        "credits": 5,
        "reqs": [
          "6382"
        ]
      },
      {
        "id": "520002",
        "name": "Estadística Empresarial I",
        "level": 3,
        "type": "O",
        "credits": 4,
        "reqs": [
          "6502"
        ]
      },
      {
        "id": "4123",
        "name": "Contabilidad General",
        "level": 3,
        "type": "O",
        "credits": 4,
        "reqs": [
          "6337"
        ]
      },
      {
        "id": "520500",
        "name": "Antropología del Consumidor",
        "level": 3,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6513"
        ]
      },
      {
        "id": "520503",
        "name": "Introducción a las Finanzas",
        "level": 3,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6337"
        ]
      },
      {
        "id": "3232",
        "name": "Matemática para la Gestión de Negocios",
        "level": 3,
        "type": "O",
        "credits": 4,
        "reqs": [
          "6337"
        ]
      },
      {
        "id": "520004",
        "name": "Herramientas Informáticas para la Gestión I",
        "level": 3,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6510"
        ]
      },
      {
        "id": "4384",
        "name": "Costos y Presupuestos",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": [
          "4123"
        ]
      },
      {
        "id": "MAR_001",
        "name": "Sociología del Consumidor",
        "level": 4,
        "type": "O",
        "credits": 3,
        "reqs": [
          "520500"
        ]
      },
      {
        "id": "MAR_002",
        "name": "Procesos de Marketing",
        "level": 4,
        "type": "O",
        "credits": 3,
        "reqs": [
          "520500"
        ]
      },
      {
        "id": "520006",
        "name": "Estadística Empresarial II",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": [
          "520002"
        ]
      },
      {
        "id": "MAR_003",
        "name": "Administración Empresarial y Marketing",
        "level": 4,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6510"
        ]
      },
      {
        "id": "3326",
        "name": "Microeconomía / Microeconomics",
        "level": 4,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6510"
        ]
      },
      {
        "id": "520007",
        "name": "Herramientas Informáticas para la Gestión II",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "520004"
        ]
      },
      {
        "id": "520501",
        "name": "Estadística Aplicada al Marketing",
        "level": 5,
        "type": "O",
        "credits": 4,
        "reqs": [
          "520006"
        ]
      },
      {
        "id": "MAR_004",
        "name": "Consumidor y Experiencia del Cliente / Customer Experience",
        "level": 5,
        "type": "O",
        "credits": 3,
        "reqs": [
          "MAR_001"
        ]
      },
      {
        "id": "MAR_005",
        "name": "Elaboración de Estados Financieros",
        "level": 5,
        "type": "O",
        "credits": 3,
        "reqs": [
          "520503",
          "4384"
        ]
      },
      {
        "id": "2447",
        "name": "Administración de Canales de Distribución",
        "level": 5,
        "type": "O",
        "credits": 3,
        "reqs": [
          "MAR_002"
        ]
      },
      {
        "id": "2443",
        "name": "Gestión de Producto y Marca",
        "level": 5,
        "type": "O",
        "credits": 4,
        "reqs": [
          "MAR_002"
        ]
      },
      {
        "id": "3325",
        "name": "Macroeconomía / Macroeconomics",
        "level": 5,
        "type": "O",
        "credits": 3,
        "reqs": [
          "3326"
        ]
      },
      {
        "id": "2448",
        "name": "Política y Fijación de Precios",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "3325"
        ]
      },
      {
        "id": "2454",
        "name": "Operaciones Logísticas de Marketing",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "2447"
        ]
      },
      {
        "id": "2333",
        "name": "Investigación Cuantitativa de Mercados",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "520501"
        ]
      },
      {
        "id": "2444",
        "name": "Publicidad y Medios",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "2443"
        ]
      },
      {
        "id": "520503",
        "name": "Branding",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "2443"
        ]
      },
      {
        "id": "2332",
        "name": "Investigación Cualitativa de Mercados",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "MAR_004"
        ]
      },
      {
        "id": "MAR_006",
        "name": "Ciencia de Datos Aplicado al Marketing",
        "level": 6,
        "type": "O",
        "credits": 2,
        "reqs": [
          "520501"
        ]
      },
      {
        "id": "MAR_007",
        "name": "Dirección Estratégica de Marketing",
        "level": 7,
        "type": "O",
        "credits": 4,
        "reqs": [
          "2333"
        ]
      },
      {
        "id": "2450",
        "name": "Finanzas para Marketing",
        "level": 7,
        "type": "O",
        "credits": 4,
        "reqs": [
          "MAR_005"
        ]
      },
      {
        "id": "2460",
        "name": "Marketing Social",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": [
          "2333"
        ]
      },
      {
        "id": "2455",
        "name": "Comunicación e Imagen Corporativa",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": [
          "2444"
        ]
      },
      {
        "id": "MAR_008",
        "name": "Transformación Digital y Marketing",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": [
          "2444"
        ]
      },
      {
        "id": "MAR_009",
        "name": "Endomarketing y Gestión de Personas",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": [
          "MAR_003"
        ]
      },
      {
        "id": "2343",
        "name": "Neuromarketing",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "2333"
        ]
      },
      {
        "id": "4164",
        "name": "Promoción y Marketing BTL",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "2448"
        ]
      },
      {
        "id": "520504",
        "name": "Diseño de la Propuesta de Valor",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "2443"
        ]
      },
      {
        "id": "MAR_010",
        "name": "Métricas de Marketing",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "2448"
        ]
      },
      {
        "id": "MAR_011",
        "name": "Metodologías Ágiles en Marketing",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "520004"
        ]
      },
      {
        "id": "2419",
        "name": "Gerencia de Ventas",
        "level": 8,
        "type": "O",
        "credits": 4,
        "reqs": [
          "2454"
        ]
      },
      {
        "id": "MAR_012",
        "name": "Sustainability",
        "level": 8,
        "type": "O",
        "credits": 3,
        "reqs": [
          "MAR_009"
        ]
      },
      {
        "id": "4165",
        "name": "Herramientas Estratégicas de Negocios y Marketing",
        "level": 8,
        "type": "O",
        "credits": 4,
        "reqs": [
          "MAR_007"
        ]
      },
      {
        "id": "2336",
        "name": "Métodos y Técnicas de Evaluación de Proyectos",
        "level": 8,
        "type": "O",
        "credits": 4,
        "reqs": [
          "2450"
        ]
      },
      {
        "id": "520506",
        "name": "E-Commerce",
        "level": 8,
        "type": "O",
        "credits": 3,
        "reqs": [
          "MAR_008"
        ]
      },
      {
        "id": "3161",
        "name": "Inteligencia Comercial",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "MAR_007"
        ]
      },
      {
        "id": "2475",
        "name": "Taller de Investigación de Mercados",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "2333"
        ]
      },
      {
        "id": "520509",
        "name": "Marketing Mobile",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "MAR_008"
        ]
      },
      {
        "id": "520510",
        "name": "Simulación de Decisiones de Marketing",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "MAR_007"
        ]
      },
      {
        "id": "4166",
        "name": "Gerencia de Marketing Deportivo",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "2460"
        ]
      },
      {
        "id": "2338",
        "name": "Trade Marketing y Merchandising",
        "level": 9,
        "type": "O",
        "credits": 3,
        "reqs": [
          "2419"
        ]
      },
      {
        "id": "520507",
        "name": "Marketing de Servicios",
        "level": 9,
        "type": "O",
        "credits": 3,
        "reqs": [
          "2460",
          "4165"
        ]
      },
      {
        "id": "520513",
        "name": "Analítica de Datos",
        "level": 9,
        "type": "O",
        "credits": 3,
        "reqs": [
          "MAR_008"
        ]
      },
      {
        "id": "2457",
        "name": "Negociación Comercial",
        "level": 9,
        "type": "O",
        "credits": 3,
        "reqs": [
          "2455"
        ]
      },
      {
        "id": "520514",
        "name": "Marketing Personal",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "2460"
        ]
      },
      {
        "id": "520515",
        "name": "Taller de Inbound Marketing",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "MAR_008"
        ]
      },
      {
        "id": "2340",
        "name": "Marketing de Retailers",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "4165"
        ]
      },
      {
        "id": "MAR_013",
        "name": "Marketing y Ventas B2b",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "520503"
        ]
      },
      {
        "id": "MAR_014",
        "name": "Emprendimientos de Marketing 5.0",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "520506"
        ]
      },
      {
        "id": "MAR_015",
        "name": "Patrocinio de Marcas y Sponsoring",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "520507"
        ]
      },
      {
        "id": "MAR_016",
        "name": "Estrategias de Marketing Internacional",
        "level": 10,
        "type": "O",
        "credits": 3,
        "reqs": [
          "2338"
        ]
      },
      {
        "id": "MAR_017",
        "name": "Estrategia de Relacionamiento y Fidelización",
        "level": 10,
        "type": "O",
        "credits": 4,
        "reqs": [
          "4165"
        ]
      },
      {
        "id": "520511",
        "name": "Plan de Marketing",
        "level": 10,
        "type": "O",
        "credits": 3,
        "reqs": [
          "2336"
        ]
      },
      {
        "id": "520517",
        "name": "Planeamiento Estratégico Publicitario",
        "level": 10,
        "type": "O",
        "credits": 3,
        "reqs": [
          "2444"
        ]
      },
      {
        "id": "2341",
        "name": "Marketing de Centros Comerciales e Hipermercados",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "2419"
        ]
      },
      {
        "id": "2342",
        "name": "Marketing en la Base de la Pirámide",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "2336"
        ]
      }
    ]
  },
  "psicologia": {
    "name": "Psicologia",
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
        "id": "510006",
        "name": "PROCESOS PSICOLÓGICOS",
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
        "id": "6508",
        "name": "METODOLOGÍAS DE INVESTIGACIÓN",
        "level": 1,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "PSI_001",
        "name": "CONTEMPORÁNEA",
        "level": 1,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "510009",
        "name": "LÓGICA Y ANÁLISIS CUANTITATIVO",
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
        "id": "510010",
        "name": "FILOSOFÍA APLICADA",
        "level": 2,
        "type": "O",
        "credits": 3,
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
        "id": "510011",
        "name": "INTRODUCCIÓN AL COMERCIO INTERNACIONAL",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "510012",
        "name": "APRECIACIÓN LITERARIA",
        "level": 2,
        "type": "O",
        "credits": 3,
        "reqs": [
          "510003"
        ]
      },
      {
        "id": "510013",
        "name": "HISTORIA GENERAL DEL ARTE",
        "level": 2,
        "type": "O",
        "credits": 5,
        "reqs": [
          "510006"
        ]
      },
      {
        "id": "500009",
        "name": "REALIDAD NACIONAL",
        "level": 3,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6510"
        ]
      },
      {
        "id": "500010",
        "name": "REDACCIÓN CIENTÍFICA",
        "level": 3,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6511"
        ]
      },
      {
        "id": "6385",
        "name": "CONDUCTA SOCIAL",
        "level": 3,
        "type": "O",
        "credits": 4,
        "reqs": []
      },
      {
        "id": "6386",
        "name": "PROCESOS COGNITIVOS BÁSICOS",
        "level": 3,
        "type": "O",
        "credits": 4,
        "reqs": []
      },
      {
        "id": "6248",
        "name": "FILOSOFÍA DE LA CIENCIA",
        "level": 3,
        "type": "O",
        "credits": 3,
        "reqs": [
          "510010"
        ]
      },
      {
        "id": "6387",
        "name": "PSICOBIOLOGÍA HUMANA I",
        "level": 3,
        "type": "O",
        "credits": 4,
        "reqs": []
      },
      {
        "id": "6388",
        "name": "PROCESOS COGNITIVOS SUPERIORES",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": [
          "6386"
        ]
      },
      {
        "id": "6392",
        "name": "DESARROLLO HUMANO I",
        "level": 4,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6386"
        ]
      },
      {
        "id": "6150",
        "name": "PSICOLOGÍA DE LA PERSONALIDAD",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": [
          "6387"
        ]
      },
      {
        "id": "6389",
        "name": "PSICOBIOLOGÍA HUMANA II",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": [
          "6387"
        ]
      },
      {
        "id": "6390",
        "name": "SEXUALIDAD HUMANA",
        "level": 4,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6387"
        ]
      },
      {
        "id": "6391",
        "name": "HISTORIA Y SISTEMAS PSICOLÓGICOS",
        "level": 4,
        "type": "O",
        "credits": 4,
        "reqs": [
          "6248"
        ]
      },
      {
        "id": "6156",
        "name": "PSICOLOGÍA DEL APRENDIZAJE",
        "level": 5,
        "type": "O",
        "credits": 4,
        "reqs": [
          "6388"
        ]
      },
      {
        "id": "6393",
        "name": "DESAROLLO HUMANO II",
        "level": 5,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6392"
        ]
      },
      {
        "id": "6394",
        "name": "ESTADÍSTICA APLICADA A LA PSICOLOGÍA",
        "level": 5,
        "type": "O",
        "credits": 4,
        "reqs": []
      },
      {
        "id": "6031",
        "name": "TÉCNICAS DE ENTREVISTA Y OBSERVACIÓN",
        "level": 5,
        "type": "O",
        "credits": 4,
        "reqs": [
          "6150"
        ]
      },
      {
        "id": "6258",
        "name": "PSICOLOGÍA DE LA SALUD",
        "level": 5,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6385"
        ]
      },
      {
        "id": "6395",
        "name": "TÉCNICAS DE GRUPOS",
        "level": 5,
        "type": "O",
        "credits": 4,
        "reqs": [
          "6385"
        ]
      },
      {
        "id": "PSI_002",
        "name": "COGNITIVOS",
        "level": 6,
        "type": "O",
        "credits": 4,
        "reqs": [
          "6031"
        ]
      },
      {
        "id": "PSI_003",
        "name": "CUANTITATIVA",
        "level": 6,
        "type": "O",
        "credits": 4,
        "reqs": [
          "6394",
          "6150"
        ]
      },
      {
        "id": "6292",
        "name": "COMPORTAMIENTO ORGANIZACIONAL I",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6395"
        ]
      },
      {
        "id": "6138",
        "name": "EPISTEMOLOGÍA DE LA PSICOLOGÍA",
        "level": 6,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6391"
        ]
      },
      {
        "id": "PSI_004",
        "name": "ELECTIVO I",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6399",
        "name": "PSICOLOGÍA DEL DEPORTE",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "6395"
        ]
      },
      {
        "id": "500001",
        "name": "INTRODUCCIÓN A LA NEUROCIENCIA",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "500002",
        "name": "INTRODUCCIÓN A LA PSICOLOGÍA FORENSE",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6022",
        "name": "DESARROLLO DE HABILIDADES SOCIALES",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6400",
        "name": "PSICOLOGÍA EDUCATIVA",
        "level": 7,
        "type": "O",
        "credits": 4,
        "reqs": [
          "6392",
          "6156"
        ]
      },
      {
        "id": "PSI_005",
        "name": "PERSONALIDAD",
        "level": 7,
        "type": "O",
        "credits": 4,
        "reqs": [
          "PSI_002"
        ]
      },
      {
        "id": "PSI_006",
        "name": "CUALITATIVA",
        "level": 7,
        "type": "O",
        "credits": 4,
        "reqs": [
          "PSI_003"
        ]
      },
      {
        "id": "6403",
        "name": "EVALUACIÓN PROYECTIVA DE LA PERSONALIDAD",
        "level": 7,
        "type": "O",
        "credits": 4,
        "reqs": []
      },
      {
        "id": "6293",
        "name": "COMPORTAMIENTO ORGANIZACIONAL II",
        "level": 7,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6292"
        ]
      },
      {
        "id": "PSI_007",
        "name": "ELECTIVO II",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "PSI_008",
        "name": "APLICADAS",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6404",
        "name": "GESTIÓN POR COMPETENCIAS",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "6292"
        ]
      },
      {
        "id": "6396",
        "name": "LIDERAZGO",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "PSI_009",
        "name": "BIOLÓGICAS DEL DEPORTE",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6405",
        "name": "EVALUACIÓN PSICOPEDAGÓGICA",
        "level": 8,
        "type": "O",
        "credits": 4,
        "reqs": [
          "6400"
        ]
      },
      {
        "id": "PSI_010",
        "name": "PSICOLÓGICOS",
        "level": 8,
        "type": "O",
        "credits": 4,
        "reqs": [
          "PSI_005"
        ]
      },
      {
        "id": "6407",
        "name": "INTRODUCCIÓN A LA PSICOTERAPIA I",
        "level": 8,
        "type": "O",
        "credits": 4,
        "reqs": [
          "6403"
        ]
      },
      {
        "id": "6409",
        "name": "PSICOLOGÍA COMUNITARIA",
        "level": 8,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6292"
        ]
      },
      {
        "id": "PSI_011",
        "name": "ELECTIVO III",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "PSI_012",
        "name": "RIESGO EN AMBIENTES EDUCATIVOS",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "6400"
        ]
      },
      {
        "id": "6412",
        "name": "PROBLEMAS DE APRENDIZAJE",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "6400"
        ]
      },
      {
        "id": "6414",
        "name": "RECLUTAMIENTO Y SELECCIÓN DEL TALENTO",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "6293",
          "6399"
        ]
      },
      {
        "id": "PSI_013",
        "name": "EN CONTEXTOS DIVERSOS",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "PSI_014",
        "name": "ORGANIZACIONAL",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6416",
        "name": "PSICOLOGÍA INSTRUCCIONAL",
        "level": 9,
        "type": "O",
        "credits": 4,
        "reqs": [
          "6405"
        ]
      },
      {
        "id": "6343",
        "name": "DIAGNÓSTICO E INFORME PSICOLÓGICO",
        "level": 9,
        "type": "O",
        "credits": 4,
        "reqs": [
          "6403",
          "PSI_005"
        ]
      },
      {
        "id": "6417",
        "name": "INTRODUCCIÓN A LA PSICOTERAPIA II",
        "level": 9,
        "type": "O",
        "credits": 4,
        "reqs": [
          "6407"
        ]
      },
      {
        "id": "PSI_015",
        "name": "EN PROBLEMAS PSICOSOCIALES",
        "level": 9,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6409"
        ]
      },
      {
        "id": "6419",
        "name": "CAPACITACIÓN Y DESARROLLO DEL TALENTO",
        "level": 9,
        "type": "O",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "PSI_016",
        "name": "ELECTIVO IV",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6420",
        "name": "MODIFICACIÓN DE CONDUCTA EN EL AULA",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "6400"
        ]
      },
      {
        "id": "6421",
        "name": "PSICOLOGÍA FORENSE",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6422",
        "name": "EVALUACIÓN DE DESEMPEÑO",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "6423",
        "name": "ORIENTACIÓN VOCACIONAL Y OCUPACIONAL",
        "level": 10,
        "type": "O",
        "credits": 4,
        "reqs": [
          "6416"
        ]
      },
      {
        "id": "6424",
        "name": "PSICOLOGÍA DE LA EXCEPCIONALIDAD",
        "level": 10,
        "type": "O",
        "credits": 4,
        "reqs": [
          "6343"
        ]
      },
      {
        "id": "6208",
        "name": "ÉTICA PROFESIONAL",
        "level": 10,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6138"
        ]
      },
      {
        "id": "6297",
        "name": "DISEÑO Y EVALUACIÓN DE PROYECTOS",
        "level": 10,
        "type": "O",
        "credits": 3,
        "reqs": [
          "PSI_010"
        ]
      },
      {
        "id": "6294",
        "name": "CONSEJERÍA PSICOLÓGICA",
        "level": 10,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6343"
        ]
      },
      {
        "id": "PSI_017",
        "name": "ORGANIZACIONAL",
        "level": 10,
        "type": "O",
        "credits": 3,
        "reqs": [
          "6419"
        ]
      },
      {
        "id": "PSI_018",
        "name": "ELECTIVO V",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "PSI_019",
        "name": "ADOLESCENTES",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "6343"
        ]
      },
      {
        "id": "6427",
        "name": "DESARROLLO ORGANIZACIONAL",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": [
          "6419",
          "PSI_017"
        ]
      },
      {
        "id": "PSI_020",
        "name": "ELECTIVO VI",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "PSI_021",
        "name": "NEUROCIENCIAS APLICADAS",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "PSI_022",
        "name": "ELECTIVO 7",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "500007",
        "name": "INTERVENCIÓN PSICOLÓGICA EN EL DEPORTE",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      },
      {
        "id": "500008",
        "name": "INTERVENCIÓN PSICOLÓGICA FORENSE",
        "level": 11,
        "type": "E",
        "credits": 3,
        "reqs": []
      }
    ]
  }
};
