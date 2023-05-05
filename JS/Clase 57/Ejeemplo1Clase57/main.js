import cargarTexto from "./cargartexto.js";
import CargarJson from "./cargartexto2.js";

const cargartxt = document.getElementById("cargartxt");
const btnCargartxt = document.getElementById("btntexto");

btnCargartxt.addEventListener("click", (e) => {
  cargarTexto(cargartxt);

  e.stopPropagation();
});

const btnCargarJson = document.getElementById("btnjson");
const tblBody = document.getElementById("dattable");

btnCargarJson.addEventListener("click", (e) => {
  CargarJson(tblBody);
  
  e.stopPropagation();
});
