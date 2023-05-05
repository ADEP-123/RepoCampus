import BuildTable from "./buildtable.js";
export default function CargarJson(elemHTML) {
  fetch("datos.json")
    .then((response) => response.json())
    .then((datos) => {
      console.table(datos);
      BuildTable(elemHTML, datos);
    });
}
