# Visualizador de Mallas Curriculares Interactivos

Este proyecto es una aplicación web interactiva diseñada para visualizar las mallas curriculares (planes de estudios) de múltiples carreras universitarias mediante grafos de correlaciones. Facilita la comprensión de los prerrequisitos, los cursos electivos y el orden cronológico ideal (ciclos) de cada programa académico.

## Características Principales

- **Visualización mediante Grafos:** Representación visual de los cursos como nodos y los prerrequisitos como aristas direccionadas.
- **Soporte Multi-Carrera:** Selector dinámico que permite alternar entre las mallas de Ingeniería de Sistemas, Ingeniería Industrial, Economía y Comunicación sin necesidad de recargar la página.
- **Dos Modos de Diseño Estructural:**
  - *Diseño por Ciclos:* Organiza los cursos rígidamente por nivel jerárquico (de izquierda a derecha).
  - *Diseño Libre (Físicas):* Una red orgánica ("telaraña") donde las materias interconectadas se atraen gravitacionalmente gracias a un motor de físicas.
- **Filtrado y Búsqueda:** Filtros interactivos por nivel académico (ciclo) y un buscador en tiempo real por nombre de curso o código.
- **Explorador de Dependencias:** Al hacer clic en un curso, se ilumina toda su cadena de prerrequisitos (rojo) y cursos subsiguientes (verde), mostrando los detalles exactos en el panel lateral.
- **Diseño Premium:** Interfaz de usuario moderna con estilo *Glassmorphism*, modo oscuro e integración fluida de animaciones.

## Tecnologías Utilizadas

- **HTML5, CSS3, JavaScript (Vanilla):** Base del front-end sin dependencias de frameworks complejos.
- **Vis.js (Network):** Librería principal para el renderizado del grafo, motor de físicas y diseño jerárquico.
- **Lucide Icons:** Biblioteca ligera para los iconos vectoriales de la interfaz.

## Estructura del Proyecto

```text
/
├── index.html     # Estructura principal de la aplicación y panel de control.
├── styles.css     # Estilos globales, Glassmorphism, animaciones y diseño responsivo.
├── app.js         # Lógica de la aplicación: configuración de Vis.js, eventos y filtros.
├── data.js        # Base de datos local (JSON puro) con todas las carreras y prerrequisitos.
└── README.md      # Este documento.
```

## Instalación y Ejecución

Al ser un proyecto estático construido con Vanilla JS, no requiere un proceso de compilación complejo (build step).

1. **Clonar el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   cd <nombre-del-repositorio>
   ```

2. **Ejecutar un servidor local:**
   Debido a políticas de seguridad del navegador para la carga dinámica o fuentes locales (CORS), es recomendable servir los archivos mediante un servidor HTTP local.
   
   Usando Python:
   ```bash
   python -m http.server 8000
   ```
   *Alternativa en Node.js (usando http-server):*
   ```bash
   npx http-server
   ```

3. **Abrir en el navegador:**
   Navega a `http://localhost:8000` para visualizar la aplicación.

## Personalización de Datos

La información curricular reside en `data.js` dentro del objeto global `CAREERS_DATA`. Cada carrera posee un identificador, un nombre oficial y un arreglo `courses` que define cada materia.

### Formato de un Nodo de Curso:
```javascript
{
  "id": "650064",
  "name": "APRENDIZAJE DE MÁQUINA",
  "level": 7,              // Ciclo académico (1-10 para obligatorios, 11 para electivos)
  "type": "O",             // "O" (Obligatorio) o "E" (Electivo)
  "credits": 4,
  "reqs": ["650058"]       // Arreglo de IDs de cursos prerrequisito
}
```
Para agregar una nueva carrera, simplemente añada una nueva llave al diccionario `CAREERS_DATA` siguiendo esta misma estructura y actualice el menú `<select id="career-selector">` en `index.html`.

---
*Desarrollado para optimizar la planificación académica estudiantil.*
