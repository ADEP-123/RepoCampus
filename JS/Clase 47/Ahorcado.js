let aPal = [
  "paco",
  "pato",
  "parangaricutirimicuaro",
  "esternocleidomastoideo",
  "casa",
  "puerta",
  "siete",
  "computador",
  "chulo",
  "ventana",
  "palabras",
  "aire",
  "acondicionado",
  "televisor",
];

let pal = "";
let bStart = document.getElementById("bStart");
bStart.addEventListener("click", (e) => {
  e.preventDefault();
  pal = aPal[Math.floor(Math.random() * aPal.length)];
  document.getElementById("letras").innerHTML = "";
  let letras = document.getElementById("letras");
  for (let i = 0; i < pal.length; i++) {
    let elemento = document.createElement("input");
    elemento.setAttribute("id", `${i}`);
    elemento.setAttribute("type", "text");
    elemento.setAttribute("maxlength", "1");
    elemento.setAttribute("class", "santiago");
    letras.appendChild(elemento);
  }
  bStart.setAttribute("class", "invisible");
  let terminar = document.getElementById("nojugar");
  terminar.classList.toggle("invisible");
});
