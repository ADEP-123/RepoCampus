class cliente {
  constructor(codigo, nombre, estrato, consumo) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.estrato = estrato;
    this.consumo = consumo;

    this.mapa = new Map([
      [1, 10_000],
      [2, 15_000],
      [3, 20_000],
      [4, 25_000],
      [5, 30_000],
    ]);
  }

  valorPagar() {
    let tarBas = this.mapa.get(this.estrato);
    let tarcons = this.consumo * 100;
    let tarTot = tarBas + tarcons;
    return tarTot;
  }
}
let CalcularTarifa = document.getElementById("calcular");
CalcularTarifa.addEventListener("click", (e) => {
  e.preventDefault();
  let codigo = document.getElementById("cod").value;
  let nombre = document.getElementById("nombreA").value;
  let estrato = Number(document.getElementById("estrato").value);
  let consumo = document.getElementById("consumo").value;

  let cliente1 = new cliente(codigo, nombre, estrato, consumo);
  document.getElementById(
    "valorAPagar"
  ).textContent = `El valor a pagar del cliente ${
    cliente1.nombre
  } es de $${cliente1.valorPagar().toLocaleString("es")}`;
});
