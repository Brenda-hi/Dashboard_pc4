/* ============================================================
   PC4 · main.js
   - Resalta la sección activa en la barra lateral al hacer scroll
   - Cierra el menú móvil al elegir una sección
   - Muestra/oculta el botón "volver arriba"
   Sin dependencias externas.
   ============================================================ */
(function () {
  "use strict";

  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".sidebar__nav a"));
  var sections = navLinks
    .map(function (link) {
      var id = link.getAttribute("href").replace("#", "");
      return document.getElementById(id);
    })
    .filter(Boolean);

  var navToggle = document.getElementById("nav-toggle");
  var backToTop = document.getElementById("back-to-top");

  /* ---- Resaltado de sección activa mediante IntersectionObserver ---- */
  if ("IntersectionObserver" in window && sections.length) {
    var byId = {};
    navLinks.forEach(function (link) {
      byId[link.getAttribute("href").replace("#", "")] = link;
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var link = byId[entry.target.id];
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach(function (l) { l.classList.remove("is-active"); });
            link.classList.add("is-active");
          }
        });
      },
      {
        rootMargin: "-15% 0px -70% 0px",
        threshold: 0,
      }
    );

    sections.forEach(function (section) { observer.observe(section); });
  }

  /* ---- Cerrar menú móvil al navegar ---- */
  if (navToggle) {
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navToggle.checked = false;
      });
    });
  }

  /* ---- Botón volver arriba ---- */
  if (backToTop) {
    var toggleBackToTop = function () {
      var show = window.scrollY > 480;
      backToTop.hidden = !show;
    };
    window.addEventListener("scroll", toggleBackToTop, { passive: true });
    toggleBackToTop();

    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
})();
