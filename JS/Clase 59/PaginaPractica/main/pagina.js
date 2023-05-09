function buildTarjeta(prendas) {
  const main = document.getElementById("contenido");
  prendas.forEach((element) => {
    //console.log(element);
    const article = document.createRange().createContextualFragment(`
    <article id="${element.id}" class="tarjeta">
        <div class="image-container">
          <img
            src=${element.image}
            alt="prenda"
          />
        </div>
        <h2>${element.title}</h2>
        <span></span>
        <span>
        <b>${element.price}$</b>
        </br>
        ${element.category}
        </span>
    </article>`);
    main.append(article);
  });
}
function getAll() {
  fetch("https://fakestoreapi.com/products")
    .then((result) => result.json())
    .then((data) => {
      //console.log(data);
      buildTarjeta(data);
    })
    .catch((err) => {
      console.log("Error al consumir la API\n", err.message);
    })
    .finally(() => {
      console.log("Se ha consumido toda el API");
    });
}
export function getCategory(category) {
  fetch("https://fakestoreapi.com/products/category/" + category)
    .then((result) => result.json())
    .then((data) => {
      //console.log(data);
      buildTarjeta(data);
    })
    .catch((err) => {
      console.log("Error al consumir la API\n", err.message);
    })
    .finally(() => {
      console.log("Se ha consumido toda el API");
    });
}

window.onload = (event) => {
  getAll();
};

const home = document.getElementById("home");
home.addEventListener("click", (e) => {
  document.getElementById("contenido").innerHTML = "";
  getAll();
  e.preventDefault();
});

import * as electronics from "../electronics/electronics.js";
import * as jewelery from "../jewelery/jewelery.js";
import * as manClothing from "../manClothing/manClothing.js";
import * as womanClothing from "../womanClothing/womanClothing.js";
import * as activarCarrito from "./carritodeCompra.js"

