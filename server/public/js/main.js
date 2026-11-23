/**
 * Interacciones del sitio:
 * - Navbar con fondo al hacer scroll
 * - Menú móvil
 * - Aparición suave de secciones
 * - Resaltado del enlace activo
 */

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  const links = Array.from(document.querySelectorAll(".nav__link"));
  const sections = Array.from(document.querySelectorAll("main section[id]"));

  /* ---------- Navbar al hacer scroll ---------- */
  const onScroll = () => {
    if (navbar) {
      navbar.classList.toggle("is-scrolled", window.scrollY > 24);
    }

    // Enlace activo según la sección visible
    let actual = "";
    const punto = window.scrollY + window.innerHeight * 0.35;

    sections.forEach((section) => {
      if (punto >= section.offsetTop) {
        actual = section.id;
      }
    });

    links.forEach((link) => {
      link.classList.toggle(
        "is-active",
        link.getAttribute("href") === `#${actual}`
      );
    });
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Menú móvil ---------- */
  const cerrarMenu = () => {
    document.body.classList.remove("nav-open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  };

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const abierto = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(abierto));
    });

    menu.querySelectorAll("a").forEach((enlace) => {
      enlace.addEventListener("click", cerrarMenu);
    });

    document.addEventListener("keydown", (evento) => {
      if (evento.key === "Escape") cerrarMenu();
    });
  }

  /* ---------- Aparición de secciones ---------- */
  const elementos = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("is-visible");
            observer.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    elementos.forEach((elemento) => observer.observe(elemento));
  } else {
    elementos.forEach((elemento) => elemento.classList.add("is-visible"));
  }
});
