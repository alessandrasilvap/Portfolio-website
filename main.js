const menuHamburguer = document.querySelector(".menuHamburguer");
const menu = document.querySelector("nav ul");
	
menuHamburguer.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});
