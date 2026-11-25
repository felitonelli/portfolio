/* ==========================================================
   Proyectos del portfolio (se muestran como casos de estudio).

   Para agregar uno nuevo: copiá un bloque { ... }, pegalo en la
   lista y completá los campos. No hace falta tocar el HTML.

   Campos:
   - categoria:   tipo de trabajo, ej. "Landing page · Propuesta"
   - titulo:      nombre del proyecto o del cliente
   - descripcion: 1 a 3 líneas: qué hiciste, para quién y qué resolviste
   - destacados:  (opcional) lista corta de lo que tiene el sitio
   - imagen:      captura de escritorio (ideal 1600x1000) en assets/img/
   - imagenMovil: (opcional) captura del celular (ideal 450x975)
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
    categoria: "Landing page · Propuesta para cliente",
    titulo: "Cabañas 360 Cumbre",
    descripcion:
      "Sitio de una página para cabañas de montaña para parejas en El Durazno, Córdoba. Pensado como link de la bio de Instagram: el visitante recorre las sierras y las casas, y consulta por WhatsApp con las fechas ya cargadas.",
    destacados: [
      "Portada panorámica que se recorre con el dedo",
      "Modo día / noche",
      "Formulario que arma el mensaje de WhatsApp",
      "Panel para editar textos y fotos"
    ],
    imagen: "assets/img/proyectos/360-escritorio.webp",
    imagenMovil: "assets/img/proyectos/360-celular.webp",
    imagenAlt: "Portada de 360 Cumbre: sierras al atardecer con el nombre en letra serif y el botón Consultar disponibilidad",
    dominio: "360-cumbre.vercel.app",
    tecnologias: ["Astro", "Tailwind CSS", "Keystatic", "Vercel"],
    metricas: [],
    demo: "https://360-cumbre.vercel.app",
    repo: "https://github.com/felitonelli/360-cumbre"
  },
  {
    categoria: "Landing page · Propuesta para cliente",
    titulo: "Cabañas Los Naranjos",
    descripcion:
      "Sitio de una página para un complejo de cabañas en Villa Urquiza, Entre Ríos. La idea: que una familia entienda en 10 segundos qué ofrece el lugar y consulte disponibilidad por WhatsApp con las fechas ya cargadas.",
    destacados: [
      "Cabañas, predio, tarifas y cómo llegar",
      "Consulta por WhatsApp con fechas",
      "Fotos optimizadas automáticamente",
      "Panel para editar el contenido"
    ],
    imagen: "assets/img/proyectos/naranjos-escritorio.webp",
    imagenMovil: "assets/img/proyectos/naranjos-celular.webp",
    imagenAlt: "Portada de Cabañas Los Naranjos: la pileta con reposeras y los botones Consultar disponibilidad y Ver las cabañas",
    dominio: "los-naranjos-propuesta.vercel.app",
    tecnologias: ["Astro", "Tailwind CSS", "Keystatic", "Vercel"],
    metricas: [],
    demo: "https://los-naranjos-propuesta.vercel.app",
    repo: "https://github.com/felitonelli/los-naranjos-propuesta"
  },
  {
    categoria: "Datos · Tablero",
    titulo: "[COMPLETAR: nombre del tablero]",
    descripcion: "[COMPLETAR: qué datos analizaste, qué preguntas responde el tablero y qué conclusiones sacaste.]",
    destacados: [],
    imagen: "assets/img/proyecto-placeholder.svg",
    imagenMovil: "",
    imagenAlt: "[COMPLETAR: captura del tablero]",
    dominio: "Power BI",
    tecnologias: ["Power BI", "SQL", "Excel"],
    metricas: [],
    demo: "",
    repo: "" // [COMPLETAR: link al repo o a la demo]
  }
];
