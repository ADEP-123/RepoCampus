import { llenarFormulario } from "../views/utils.js";
export function get(url, formulario) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      llenarFormulario(formulario,data);
    })
    .catch((error) => {
      console.error(error);
    });
}
