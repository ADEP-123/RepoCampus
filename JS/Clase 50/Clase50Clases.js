class CuentaCorriente {
  constructor(numero, nombre, saldo) {
    this.numero = numero;
    this.nombre = nombre;
    this.saldo = saldo;
  }
  depositar(monto) {
    this.saldo += monto; //this hace referencia a los atributos de la clase
  }
  girar(monto) {
    if (this.saldo >= monto) {
      this.saldo -= monto;
    } else {
      return false;
    }
    return true;
  }
  consultarSaldo() {
    return this.saldo;
  }
}

const ctaCorrA = new CuentaCorriente(1234, "Juan", 350_000);
const ctaCorrB = new CuentaCorriente(9876, "Maria", 450_600);

console.log(ctaCorrA.consultarSaldo());
ctaCorrA.depositar(350_000);
ctaCorrA.girar(200_000);
console.log(ctaCorrA.consultarSaldo());

console.log(ctaCorrB.consultarSaldo());
ctaCorrB.depositar(3_050_000);
ctaCorrB.girar(0);
console.log(ctaCorrB.consultarSaldo());
