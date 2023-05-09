import { getCategory } from "../main/pagina.js";
export const electronics = document.getElementById("electronics");
electronics.addEventListener("click", (e) => {
  document.getElementById("contenido").innerHTML = "";
  getCategory("electronics");
  e.preventDefault();
});
