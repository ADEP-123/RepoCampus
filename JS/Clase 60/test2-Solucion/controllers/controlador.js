import { post } from "../models/post.js";
import { get } from "../models/get.js";
import { put } from "../models/put.js";
import { delet } from "../models/delete.js";
export function controlador(formu, event, entidad) {
  console.log(event.target.value);

  const URL = "http://localhost:4001/";
  let url = "";
  let datos = Object.fromEntries(new FormData(formu));
  switch (event.target.value) {
    case "Agregar":
      url = URL + entidad;
      post(url, datos);
      formu.reset();
      break;
    case "Consultar":
      url = URL + entidad + `/${datos.id}`;
      get(url, formu);
      break;
    case "Modificar":
      url = URL + entidad + `/${datos.id}`;
      put(url, datos);
      formu.reset();
      break;
    case "Borrar":
      url = URL + entidad + `/${datos.id}`;
      delet(url);
      break;
  }
}
