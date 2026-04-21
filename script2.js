document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    alert("Proyecto abierto 🚀");
  });
});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

function cambiarIdioma(idioma) {
  const elementos = document.querySelectorAll("[data-en]");

  elementos.forEach(el => {
    el.textContent = el.getAttribute(`data-${idioma}`);
  });
}
