const vCar = [];

export const contenidoTarjetas = document.getElementById("contenido");
contenidoTarjetas.addEventListener("click", (e) => {
  const tarjetapress = e.target;
  if (tarjetapress.className == "tarjeta") {
    fetch("https://fakestoreapi.com/products/" + tarjetapress.id)
      .then((result) => result.json())
      .then((data) => {
        localStorage.clear();
        vCar.push(data);
        localStorage.vCar = JSON.stringify(vCar);
      })
      .catch((err) => {
        console.log("Error al consumir la API\n", err.message);
      })
      .finally(() => {
        console.log("Se ha consumido toda el API");
      });
  }
});

// Ventana modal
var modal = document.getElementById("ventanaModal");

// Botón que abre el modal
var boton = document.getElementById("shbag");

// Hace referencia al elemento <span> que tiene la X que cierra la ventana
var span = document.getElementsByClassName("cerrar")[0];

// Cuando el usuario hace click en el botón, se abre la ventana
boton.addEventListener("click", function () {
  modal.style.display = "block";

  const contCarrComp = document.getElementById("contencontCarrCompido");
  const prendas = JSON.parse(localStorage.vCar);
  let article = "";
  prendas.forEach((element) => {
    //console.log(element);
    article += `
    <h2>${element.title}: </h2>
    <span>
    <b>${element.price}: $</b>
    </span>
    `;
    document.getElementById("resumencarrito").innerHTML = article;
    console.log(vCar);
  });
});

// Si el usuario hace click en la x, la ventana se cierra
span.addEventListener("click", function () {
  modal.style.display = "none";
});

// Si el usuario hace click fuera de la ventana, se cierra.
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

const pagar = document.getElementById("pagar");
pagar.addEventListener("click", (e) => {
  document.getElementById("resumencarrito").innerHTML = "";
  localStorage.clear();
});
