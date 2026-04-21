function cambiarIdioma(idioma) {
  const elementos = document.querySelectorAll("[data-en]");

  elementos.forEach(el => {
    const texto = el.getAttribute(`data-${idioma}`);
    if (texto) {
      el.textContent = texto;
    }
  });

  localStorage.setItem("idioma", idioma);
}

// cargar idioma guardado o inglés por defecto
window.addEventListener("DOMContentLoaded", () => {
  const idiomaGuardado = localStorage.getItem("idioma") || "en";
  cambiarIdioma(idiomaGuardado);
});
