class Numero {
  constructor(numero) {
    this.numero = numero;
  }
  parOImpar() {
    if (this.numero % 2 === 0) {
      return "es par";
    } else {
      return "es impar";
    }
  }
  signo() {
    if (this.numero >= 0) {
      return "el numero es positivo";
    } else {
      return "el numero es negativo";
    }
  }
  primo() {
    let divisores = 0;
    for (let i = 1; i < this.numero + 1; i++) {
      if (this.numero % i === 0) {
        divisores += 1;
      }
    }
    if (divisores > 2) {
      return "el numero no es primo";
    } else {
      return "el numero es primo";
    }
  }
}
const numero1 = new Numero(2);
console.log(numero1.parOImpar());
console.log(numero1.signo());
console.log(numero1.primo());
