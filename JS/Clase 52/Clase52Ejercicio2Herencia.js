class Cuenta {
  //ESTATICOS
  static cantidad = 0;
  //atributos
  constructor(numero, nombre, saldo = 0) {
    this._numero = numero;
    this._nombre = nombre;
    this._saldo = saldo;

    ++Cuenta.cantidad;
  }
  //metodos
  depositar(monto) {
    this._saldo += monto; //this hace referencia a los atributos de la clase
  }
  girar(monto) {
    if (this._saldo >= monto) {
      this._saldo -= monto;
    } else {
      return false;
    }
    return true;
  }
  consultarSaldo() {
    return this._saldo;
  }
  // pilar de encapsulamiento
  set numero(nuevoNumero) {
    this._numero = nuevoNumero;
  }
  get numero() {
    return this.numero;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }
  get nombre() {
    return this._nombre;
  }

  set saldo(nuevoSaldo) {
    this._saldo = nuevoSaldo;
  }
  get saldo() {
    return this._saldo;
  }
  static nombreBanco() {
    return "Campus Bank";
  }
}

class CuentaAhorro extends Cuenta {
  static cantidad = 0;
  constructor(numero, nombre, saldo = 0) {
    super(numero, nombre, saldo);
    ++CuentaAhorro.cantidad;
  }
}
let ctAh1 = new CuentaAhorro(789, "Mariana", 50_000);
ctAh1.depositar(1_200_000);
console.log(ctAh1.consultarSaldo());
console.log("Cuentas de ahorro: ", CuentaAhorro.cantidad);
console.log("Cuentas totales: ", Cuenta.cantidad);

class CuentaCorriente extends Cuenta {
  static cantidad = 0;
  constructor(numero, nombre, saldo = 0, topeCredito) {
    super(numero, nombre, saldo); //hace referencia a los atributos y metodos de la clase padre
    this._topeCredito = topeCredito;
    if (this._topeCredito === undefined) {
      this._topeCredito = saldo;
    }
    ++CuentaCorriente.cantidad;
  }
  set topeCredito(nuevoTopeCredito) {
    this._topeCredito = nuevoTopeCredito;
  }
  get topeCredito() {
    return this._topeCredito;
  }
  //Metodo de la clase
  girar(monto) {
    if (this._saldo - monto >= -this._topeCredito) {
      this._saldo -= monto;
      return true;
    }
    return false;
  }
}
let ctCr1 = new CuentaCorriente(753, "Daniela", 2_000_000, 2_000_000);
ctCr1.girar(2_500_000);
ctCr1.depositar(500_000);
console.log(ctCr1.girar(7_000_000));
console.log("Saldo: $", ctCr1.consultarSaldo());
console.log("Cuentas corrientes: ", CuentaCorriente.cantidad);
console.log("Cuentas totales: ", Cuenta.cantidad);
