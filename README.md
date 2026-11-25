# Portfolio — Felipe Tonelli

Sitio personal hecho con HTML, CSS y JavaScript, sin frameworks.

## Estructura

```
portfolio/
├── index.html                 ← contenido y secciones
├── css/styles.css             ← estilos (colores y medidas en :root)
├── js/projects.js             ← LISTA DE PROYECTOS (editá acá)
├── js/main.js                 ← arma las tarjetas, menú en celular, etc.
└── assets/
    ├── favicon.svg
    └── img/
        ├── og-image.png       ← imagen que aparece al compartir el link
        └── proyecto-placeholder.svg
```

## Agregar un proyecto

1. Guardá la captura en `assets/img/` (ideal 1280×720, `.webp` o `.jpg`).
2. Abrí `js/projects.js`, copiá un bloque `{ ... }` y completá los campos.
3. Si un proyecto no tiene demo o repo, dejá ese campo en `""` y el botón no aparece.

## Pendientes (`[COMPLETAR: ...]`)

Buscá `COMPLETAR` en todos los archivos. Hoy faltan:

- Los proyectos reales en `js/projects.js` (títulos, descripciones, capturas y links).
- Tu email en la sección Contacto (`index.html`, reemplazar `tu-email@ejemplo.com`).
- Años y links de los certificados en Formación, y confirmar la institución de Data Analytics.
- La URL final del sitio en `canonical`, `og:url` y `og:image` (si no usás `felitonelli.github.io`).

## Verlo en tu computadora

Abrí `index.html` con doble clic, o usá la extensión **Live Server** de VS Code.

## Publicar

**GitHub Pages**
1. Creá un repositorio llamado `felitonelli.github.io` y subí el contenido de esta carpeta (que `index.html` quede en la raíz).
2. En el repo: *Settings → Pages → Branch: main / (root) → Save*.
3. En unos minutos queda online en `https://felitonelli.github.io/`.

**Vercel**
1. Subí la carpeta a un repo de GitHub.
2. En vercel.com: *Add New → Project*, elegí el repo y tocá *Deploy* (no hace falta configurar nada).
3. Si la URL final es otra, actualizala en las metaetiquetas de `index.html`.
