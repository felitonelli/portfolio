/* ==========================================================
   Lógica del portfolio:
   1. Dibuja los casos de estudio a partir de PROJECTS.
   2. Menú desplegable en celular.
   3. Marca en el menú la sección que se está viendo.
   4. Aparición suave de los bloques al hacer scroll.
   5. Año actual en el pie.
   ========================================================== */

/* ---------- 1. Casos de estudio ---------- */

// Crea un elemento con clase y texto (textContent evita inyectar HTML)
function crearElemento(etiqueta, clase, texto) {
  const el = document.createElement(etiqueta);
  if (clase) el.className = clase;
  if (texto) el.textContent = texto;
  return el;
}

// Botón-link que abre en pestaña nueva
function crearLink(url, texto, clase) {
  const a = crearElemento("a", `btn btn--small ${clase}`, texto);
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.append(crearElemento("span", "visually-hidden", " (se abre en una pestaña nueva)"));
  return a;
}

function crearCaso(proyecto, indice) {
  const caso = crearElemento("article", "case");

  /* Encabezado: número, categoría y título | descripción, tecnologías y links */
  const head = crearElemento("div", "case__head reveal");

  const titulos = crearElemento("div");
  const label = crearElemento("p", "case__label");
  label.append(crearElemento("span", "", String(indice + 1).padStart(2, "0")));
  label.append(proyecto.categoria || "");
  titulos.append(label, crearElemento("h3", "case__title", proyecto.titulo));

  const info = crearElemento("div", "case__info");
  info.append(crearElemento("p", "case__desc", proyecto.descripcion));

  // Lo que tiene el sitio (opcional)
  if (proyecto.destacados && proyecto.destacados.length) {
    const lista = crearElemento("ul", "case__features");
    proyecto.destacados.forEach((d) => lista.append(crearElemento("li", "", d)));
    info.append(lista);
  }

  if (proyecto.tecnologias && proyecto.tecnologias.length) {
    const tags = crearElemento("ul", "tags");
    tags.setAttribute("aria-label", "Tecnologías usadas");
    proyecto.tecnologias.forEach((t) => tags.append(crearElemento("li", "", t)));
    info.append(tags);
  }

  const links = crearElemento("div", "case__links");
  if (proyecto.demo) links.append(crearLink(proyecto.demo, "Ver la web", "btn--primary"));
  if (proyecto.repo) links.append(crearLink(proyecto.repo, "Repositorio", "btn--ghost"));
  if (links.children.length) info.append(links);

  head.append(titulos, info);

  /* Capturas: escritorio en marco de navegador + celular (si hay) */
  const media = crearElemento("div", "case__media reveal");
  const frame = crearElemento("figure", "frame");
  const bar = crearElemento("div", "frame__bar");
  bar.setAttribute("aria-hidden", "true");
  bar.append(crearElemento("span"), crearElemento("span"), crearElemento("span"));
  bar.append(crearElemento("p", "frame__url", proyecto.dominio || "vista previa"));

  const img = crearElemento("img");
  img.src = proyecto.imagen;
  img.alt = proyecto.imagenAlt || "";
  img.width = 1600;
  img.height = 1000;
  img.loading = "lazy";
  img.decoding = "async";
  frame.append(bar, img);
  media.append(frame);

  if (proyecto.imagenMovil) {
    const phone = crearElemento("figure", "phone");
    const imgMovil = crearElemento("img");
    imgMovil.src = proyecto.imagenMovil;
    imgMovil.alt = `${proyecto.titulo} en el celular`;
    imgMovil.width = 450;
    imgMovil.height = 975;
    imgMovil.loading = "lazy";
    imgMovil.decoding = "async";
    phone.append(imgMovil);
    media.append(phone);
    media.classList.add("case__media--doble");
  }

  caso.append(head, media);

  /* Métricas (solo si hay) */
  if (proyecto.metricas && proyecto.metricas.length) {
    const dl = crearElemento("dl", "metrics reveal");
    proyecto.metricas.forEach((m) => {
      const item = crearElemento("div");
      item.append(crearElemento("dt", "", m.etiqueta), crearElemento("dd", "", m.valor));
      dl.append(item);
    });
    caso.append(dl);
  }

  return caso;
}

function renderProyectos() {
  const contenedor = document.getElementById("lista-proyectos");
  if (!contenedor) return;

  if (typeof PROJECTS === "undefined" || !PROJECTS.length) {
    contenedor.append(crearElemento("p", "note", "Pronto voy a sumar proyectos acá."));
    return;
  }
  PROJECTS.forEach((p, i) => contenedor.append(crearCaso(p, i)));
}

/* ---------- 2. Menú en celular ---------- */

function iniciarMenu() {
  const boton = document.querySelector(".nav-toggle");
  const menu = document.getElementById("menu");
  if (!boton || !menu) return;

  const textoBoton = boton.querySelector(".visually-hidden");

  function setAbierto(abierto) {
    boton.setAttribute("aria-expanded", String(abierto));
    menu.classList.toggle("is-open", abierto);
    textoBoton.textContent = abierto ? "Cerrar menú" : "Abrir menú";
  }

  boton.addEventListener("click", () => {
    setAbierto(boton.getAttribute("aria-expanded") !== "true");
  });
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setAbierto(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("is-open")) {
      setAbierto(false);
      boton.focus();
    }
  });
}

/* ---------- 3. Sección activa en el menú ---------- */

function iniciarSeccionActiva() {
  const links = document.querySelectorAll(".nav a");
  if (!("IntersectionObserver" in window) || !links.length) return;

  const porId = {};
  links.forEach((a) => (porId[a.getAttribute("href").slice(1)] = a));

  const observadorSecciones = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        const link = porId[entrada.target.id];
        if (!link || !entrada.isIntersecting) return;
        links.forEach((l) => {
          l.classList.remove("is-active");
          l.removeAttribute("aria-current");
        });
        link.classList.add("is-active");
        link.setAttribute("aria-current", "true");
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );

  document.querySelectorAll("main section[id]").forEach((s) => observadorSecciones.observe(s));
}

/* ---------- 4. Aparición al hacer scroll ---------- */

function iniciarApariciones() {
  const elementos = document.querySelectorAll(".reveal");

  // Sin soporte: mostrar todo de una
  if (!("IntersectionObserver" in window)) {
    elementos.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observadorApariciones = new IntersectionObserver(
    (entradas, obs) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;
        entrada.target.classList.add("is-visible");
        obs.unobserve(entrada.target); // aparece una sola vez
      });
    },
    { rootMargin: "0px 0px -8% 0px" }
  );

  elementos.forEach((el) => observadorApariciones.observe(el));
}

/* ---------- 5. Año en el pie ---------- */

function ponerAnio() {
  const anio = document.getElementById("anio");
  if (anio) anio.textContent = new Date().getFullYear();
}

/* ---------- Arranque ---------- */
renderProyectos();      // primero los proyectos, así sus bloques también aparecen suave
iniciarMenu();
iniciarSeccionActiva();
iniciarApariciones();
ponerAnio();
