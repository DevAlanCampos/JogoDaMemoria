const btnMobile = document.getElementById("btnMobile");

function abrirMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", abrirMenu);
