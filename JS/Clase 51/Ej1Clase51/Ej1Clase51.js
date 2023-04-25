class Producto {
  constructor(code, purPrice, quant, minQuant) {
    this._code = code;
    this._purPrice = purPrice;
    this._quant = quant;
    this._minQuant = minQuant;
  }
  productRequerid() {
    if (this._quant <= this._minQuant) {
      return true;
    } else return false;
  }
  get code() {
    return this._code;
  }
  get purPrice() {
    return this._purPrice;
  }
  get quant() {
    return this._quant;
  }
  get minQuant() {
    return this._minQuant;
  }
}
let code = 1;
let products = [];
let start = document.getElementById("fill");
start.addEventListener("click", (e) => {
  e.preventDefault();
  let purPrice = document.getElementById("purPrice").value;
  let quant = document.getElementById("storQuant").value;
  let minQuant = document.getElementById("minQuant").value;
  const product = new Producto(code, purPrice, quant, minQuant);
  products.push(product);
  let fragment = document.createDocumentFragment();
  fragment = document.getElementById("here");
  console.log(fragment);
  let template = document.getElementById("example").content;
  let clone = template.cloneNode(true);
  clone.querySelector("h5").textContent = `Codigo Producto: ${product.code}`;
  clone.querySelector(
    "h6"
  ).textContent = `Precio Producto: ${product.purPrice}`;
  clone.querySelector("p").textContent = `Cantidad Producto: ${product.quant}`;
  if (Number(product.quant) <= Number(product.minQuant)) {
    clone.querySelector("div").style.backgroundColor = "#FF00FF";
  }
  fragment.appendChild(clone);

  document.getElementById("here").content = fragment;
  code = code + 1;
});
