const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const frase = document.querySelector(".scale-in-hor-left");
const whatsappButton = document.querySelector(".whatsapp-float");
abrir.addEventListener("click", () => {
  nav.classList.add("visible");
  frase.classList.remove("scale-in-hor-left");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});


//boton de whatsapp
window.addEventListener("scroll", function() {
  if (window.scrollY > window.innerHeight * 0.8) {
      whatsappButton.style.display = "flex";
  } else {
      whatsappButton.style.display = "none";
  }
});