import { getCategory } from "../main/pagina.js";
export const jewelery = document.getElementById("jewelery");
jewelery.addEventListener("click", (e) => {
  document.getElementById("contenido").innerHTML = "";
  getCategory("jewelery");
  e.preventDefault();
});