import { getCategory } from "../main/pagina.js";
export const manClothing = document.getElementById("manClothing");
manClothing.addEventListener("click", (e) => {
  document.getElementById("contenido").innerHTML = "";
  getCategory("men's clothing");
  e.preventDefault();
});
