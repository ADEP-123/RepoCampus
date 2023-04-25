class CuentaCorriente {
  //atributos  
  constructor(numero, nombre, saldo) {
    this.numero = numero;
    this.nombre = nombre;
    this.saldo = saldo;
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
  set numero (nuevoNumero){
    this._numero = nuevoNumero
  }
  get numero (){
    return this.numero
  }

  set nombre (nuevoNombre){
    this._nombre = nuevoNombre
  }
  get nombre (){
    return this._nombre
  }

  set saldo (nuevoSaldo){
    this._saldo = nuevoSaldo
  }
  get saldo (){
    return this._saldo
  }
}

const ctaCorrA = new CuentaCorriente(1234, "Juan", 350_000);
ctaCorrA.depositar(100_000)
console.log(ctaCorrA.consultarSaldo())
