window.onload = function () {
  if (localStorage.tabla1 != undefined) {
    document.getElementById("here").content = localStorage.tabla1;
    document.getElementById("cantProd").textContent = JSON.parse(localStorage.cantProdIngre);
    document.getElementById("cantPrend").textContent = JSON.parse(localStorage.cantPrendVestIngre);
    document.getElementById("cantProdReq").textContent = JSON.parse(localStorage.cantProdAPedir);
    document.getElementById("mayPorCod").textContent = localStorage.mayPorCod;
    document.getElementById("mayPorDesc").textContent = localStorage.mayPorDesc;
    document.getElementById("mayPorComp").textContent = localStorage.mayPorComp;
    document.getElementById("mayPorVentas").textContent = localStorage.mayPorVentas;
    document.getElementById("mayPorPor").textContent = localStorage.mayPorPor;
  }
};
class Producto {
  #codigo;
  #descripcion;
  #precioDeCompra;
  #precioDeVenta;
  #cantidadEnBodega;
  #canMinBod;
  #canMaxInv;
  #porcDesc;
  #tipo;
  constructor(
    codigo,
    descripcion,
    precioDeCompra,
    precioDeVenta,
    cantidadEnBodega,
    canMinBod,
    canMaxInv,
    porcDesc,
    tipo
  ) {
    this.#codigo = codigo;
    this.#descripcion = descripcion;
    this.#precioDeCompra = precioDeCompra;
    this.#precioDeVenta = precioDeVenta;
    this.#cantidadEnBodega = cantidadEnBodega;
    this.#canMinBod = canMinBod;
    this.#canMaxInv = canMaxInv;
    this.#porcDesc = porcDesc;
    this.#tipo = tipo;
  }
  //encapsulamiento
  get Codigo() {
    return this.#codigo;
  }
  set Codigo(newCodigo) {
    this.#codigo = newCodigo;
  }
  get Descripcion() {
    return this.#descripcion;
  }
  set Descripcion(newDescripcion) {
    this.#descripcion = newDescripcion;
  }
  //metodos
  SolicitarPedido() {
    if (this.#canMinBod >= this.#cantidadEnBodega) {
      return true;
    }
    return false;
  }
  CalcularTotalAPagar() {
    let valor;
    if (SolicitarPedido() === true) {
      valor =
        this.#precioDeCompra * (this.#canMinBod - this.#cantidadEnBodega + 1);
    }
    return valor;
  }
  Mostrar() {
    crearTarjeta();
  }
}
//Clases hijos
class PrendasDeVestir extends Producto {
  #talla;
  #permitePlanchado;
  constructor(
    codigo,
    descripcion,
    precioDeCompra,
    precioDeVenta,
    cantidadEnBodega,
    canMinBod,
    canMaxInv,
    porcDesc,
    tipo,
    talla,
    permitePlanchado
  ) {
    super(
      codigo,
      descripcion,
      precioDeCompra,
      precioDeVenta,
      cantidadEnBodega,
      canMinBod,
      canMaxInv,
      porcDesc,
      tipo
    );
    this.#talla = talla;
    this.#permitePlanchado = permitePlanchado;
  }
}

class Calzado extends Producto {
  #talla;
  constructor(
    codigo,
    descripcion,
    precioDeCompra,
    precioDeVenta,
    cantidadEnBodega,
    canMinBod,
    canMaxInv,
    porcDesc,
    tipo,
    talla
  ) {
    super(
      codigo,
      descripcion,
      precioDeCompra,
      precioDeVenta,
      cantidadEnBodega,
      canMinBod,
      canMaxInv,
      porcDesc,
      tipo
    );
    this.#talla = talla;
  }
}
const agregarAdicional = document.getElementById("tipo");
agregarAdicional.addEventListener("click", (e) => {
  if (agregarAdicional.value === "2") {
    document.getElementById("permPlan").setAttribute("disabled", "");
  } else {
    if (document.getElementById("permPlan").getAttribute("disabled") != null)
      document.getElementById("permPlan").removeAttribute("disabled");
  }
});

let cantProdIngre = 0;
let cantPrendVestIngre = 0;
let cantProdAPedir = 0;
let mayCant = 0;
let mayoPorGan = 0;

const formulario = document.querySelector("form");
formulario.addEventListener("submit", AgregarPrenda);

function AgregarPrenda(event) {
  event.preventDefault();
  let datosPrenda = new FormData(formulario);
  crearTarjeta(datosPrenda);
}

function crearTarjeta(datosPrenda) {
  cantProdIngre += 1;
  let porGanan =
    (datosPrenda.get("precioVenta") / datosPrenda.get("precioCompra")) * 100;
  let template = document.getElementById("temp3").content;
  let fragment = document.createDocumentFragment();
  fragment = document.getElementById("here");
  let clone = template.cloneNode(true);
  clone.getElementById("codHere").textContent = datosPrenda.get("codigo");
  if (datosPrenda.get("tipo") === "1") {
    cantPrendVestIngre += 1;
    clone.getElementById("tipoHere").textContent = "Prendas de Vestir";
  } else {
    if (mayCant < Number(datosPrenda.get("cantBodega"))) {
      mayCantDescr = datosPrenda.get("descripcion");
      document.getElementById(
        "calMayCantCod"
      ).textContent = `Cantidad: ${datosPrenda.get("cantBodega")}`;
      document.getElementById(
        "calMayCantDescr"
      ).textContent = `Codigo: ${datosPrenda.get("codigo")}`;
    }
    clone.getElementById("tipoHere").textContent = "Calzado";
  }

  clone.getElementById("cantHere").textContent = datosPrenda.get("cantBodega");
  clone.getElementById("precHere").textContent = `Precio venta $${datosPrenda
    .get("precioVenta")
    .toLocaleString("es")}`;
  clone.getElementById("decrpHere").textContent =
    datosPrenda.get("descripcion");
  if (
    Number(datosPrenda.get("cantBodega")) <=
    Number(datosPrenda.get("cantMinBodega"))
  ) {
    cantProdAPedir += 1;
    clone.querySelector("div").style.backgroundColor = "#808080";
  }
  fragment.appendChild(clone);
  if (mayoPorGan < porGanan) {
    document.getElementById("mayPorCod").textContent =
      datosPrenda.get("codigo");
    document.getElementById("mayPorDesc").textContent =
      datosPrenda.get("descripcion");
    document.getElementById("mayPorComp").textContent = `${datosPrenda
      .get("precioCompra")
      .toLocaleString("es")}`;
    document.getElementById("mayPorVentas").textContent = `${datosPrenda
      .get("precioVenta")
      .toLocaleString("es")}`;
    document.getElementById("mayPorPor").textContent = porGanan;
  }

  document.getElementById("here").content = fragment;
  document.getElementById("cantProd").textContent = cantProdIngre;
  document.getElementById("cantPrend").textContent = cantPrendVestIngre;
  document.getElementById("cantProdReq").textContent = cantProdAPedir;
  localStorage.clear();
  console.log(fragment);
  localStorage.tabla1 = fragment;
  localStorage.cantProdIngre = JSON.stringify(cantProdIngre);
  localStorage.cantPrendVestIngre = JSON.stringify(cantPrendVestIngre);
  localStorage.cantProdAPedir = JSON.stringify(cantProdAPedir);
  localStorage.mayPorCod = document.getElementById("mayPorCod").textContent
  localStorage.mayPorDesc = document.getElementById("mayPorDesc").textContent
  localStorage.mayPorComp = document.getElementById("mayPorComp").textContent
  localStorage.mayPorVentas = document.getElementById("mayPorVentas").textContent
  localStorage.mayPorPor = document.getElementById("mayPorPor").textContent
}
