/* ==========================================================
   Proyectos del portfolio (se muestran como casos de estudio).

   Para agregar uno nuevo: copiá un bloque { ... }, pegalo en la
   lista y completá los campos. No hace falta tocar el HTML.

   Campos:
   - categoria:   tipo de trabajo, ej. "Web · Desde cero" o "Power BI · Tablero"
   - titulo:      nombre del proyecto o del cliente
   - descripcion: 1 a 3 líneas: qué hiciste, para quién y qué resolviste
   - imagen:      captura (ideal 1600x900, .webp o .jpg) en assets/img/
   - imagenAlt:   descripción de la captura (accesibilidad)
   - dominio:     texto de la barra del navegador, ej. "miweb.com"
   - tecnologias: lista de tecnologías usadas
   - metricas:    resultados medibles (opcional). Ej:
                  [{ valor: "98", etiqueta: "PageSpeed móvil" }]
                  Usá solo números reales; si no tenés, dejá [].
   - demo:        link a la web o demo ("" para no mostrar el botón)
   - repo:        link al repositorio ("" para no mostrar el botón)
   ========================================================== */

const PROJECTS = [
  {
    categoria: "Web · Desde cero",
    titulo: "[COMPLETAR: nombre del proyecto web]",
    descripcion: "[COMPLETAR: qué hace el sitio, para quién es y qué problema resolviste.]",
    imagen: "assets/img/proyecto-placeholder.svg",
    imagenAlt: "[COMPLETAR: captura del sitio]",
    dominio: "[COMPLETAR: dominio]",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    metricas: [], // ej: [{ valor: "98", etiqueta: "PageSpeed móvil" }]
    demo: "",     // [COMPLETAR: link a la web]
    repo: "https://github.com/felitonelli" // [COMPLETAR: link al repo del proyecto]
  },
  {
    categoria: "Datos · Tablero",
    titulo: "[COMPLETAR: nombre del tablero]",
    descripcion: "[COMPLETAR: qué datos analizaste, qué preguntas responde el tablero y qué conclusiones sacaste.]",
    imagen: "assets/img/proyecto-placeholder.svg",
    imagenAlt: "[COMPLETAR: captura del tablero]",
    dominio: "Power BI",
    tecnologias: ["Power BI", "SQL", "Excel"],
    metricas: [],
    demo: "",
    repo: "https://github.com/felitonelli" // [COMPLETAR]
  },
  {
    categoria: "Desarrollo · Aplicación",
    titulo: "[COMPLETAR: proyecto en C#]",
    descripcion: "[COMPLETAR: qué problema resuelve la aplicación y cómo está organizada.]",
    imagen: "assets/img/proyecto-placeholder.svg",
    imagenAlt: "[COMPLETAR: captura de la aplicación]",
    dominio: "github.com/felitonelli",
    tecnologias: ["C#", "POO", "SQL"],
    metricas: [],
    demo: "",
    repo: "https://github.com/felitonelli" // [COMPLETAR]
  }
];
