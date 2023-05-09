import { getCategory } from "../main/pagina.js";
export const womanClothing = document.getElementById("womanClothing");
womanClothing.addEventListener("click", (e) => {
  document.getElementById("contenido").innerHTML = "";
  getCategory("women's clothing");
  e.preventDefault();
});
