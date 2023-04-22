//PROGRAMACION ORIENTADA A OBJETOS :O
//1. PILARES DE LA PROGRAMACION ORIENTADA A OBJETOS
//1.1 HERENCIA
//1.2 POLIMORFISMO
//1.3 ENCAPSULAMIENTO
//1.4 ABSTRACCIÓN
//2. QUÉ ES :
//2.1 PARADIGMA QDE PROGRAMACION QUE USA OBJETOS Y LAS INTERACCIONES ENTRE LOS MISMOS

//CLASE
//Algo generico que agrupa una cantidad de elementos similares, los agrupa por atributos o caracteristicas y por operaciones, que son los usos de la clase

//OBJETOS
//Instancias de una clase, cuando identifico un elemento en especifico, tiene atributos y metodos

const CuentaCorrienteA = {
  numero: 1234,
  nombre: "Juan",
  saldo: 350_000,
  depositar(monto) {
    this.saldo += monto; //this hace referencia a los atributos de la clase
  },
  girar(monto) {
    if (this.saldo >= monto) {
      this.saldo -= monto;
    } else {
      return false;
    }
    return true;
  },
  consultarSaldo() {
    return this.saldo;
  },
};
console.log(CuentaCorrienteA.consultarSaldo());
CuentaCorrienteA.depositar(350_000);
CuentaCorrienteA.girar(200_000);
console.log(CuentaCorrienteA.consultarSaldo());

const CuentaCorrienteB = {
  numero: 9876,
  nombre: "Maria",
  saldo: 450_600,
  depositar(monto) {
    this.saldo += monto; //this hace referencia a los atributos de la clase
  },
  girar(monto) {
    if (this.saldo >= monto) {
      this.saldo -= monto;
    } else {
      return false;
    }
    return true;
  },
  consultarSaldo() {
    return this.saldo;
  },
};
console.log(CuentaCorrienteB.consultarSaldo());
CuentaCorrienteB.depositar(3_050_000);
CuentaCorrienteB.girar(0);
console.log(CuentaCorrienteB.consultarSaldo());
