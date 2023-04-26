class Cuenta {
  //ESTATICOS
  static cantidad = 0;
  //atributos
  constructor(numero, saldo = 0) {
    this._numero = numero;
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
  constructor(numero, saldo = 0) {
    super(numero, saldo);
    ++CuentaAhorro.cantidad;
  }
}

class CuentaCorriente extends Cuenta {
  static cantidad = 0;
  constructor(numero, saldo = 0, topeCredito) {
    super(numero, saldo); //hace referencia a los atributos y metodos de la clase padre
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

class Persona {
  static cantPersona = 0;
  constructor(
    tipoPersona,
    tipoIdentificacion,
    numIdentificacion,
    nombre,
    telefono,
    cuenta
  ) {
    this._tipoPersona = tipoPersona;
    this._tipoIdentificacion = tipoIdentificacion;
    this._numIdentificacion = numIdentificacion;
    this._nombre = nombre;
    this._telefono = telefono;
    this._cuenta = cuenta;
    ++Persona.cantPersona;
  }
  set tipoPersona(nuevoTipoPersona) {
    this._tipoPersona = nuevoTipoPersona;
  }
  get tipoPersona() {
    return this._tipoPersona;
  }
  set tipoIdentificacion(nuevoTipoIdentificacion) {
    this._tipoIdentificacion = nuevoTipoIdentificacion;
  }
  get tipoIdentificacion() {
    return this._tipoIdentificacion;
  }
  set numIdentificacion(nuevoNumeroIdentificacion) {
    this._numIdentificacion = nuevoNumeroIdentificacion;
  }
  get numIdentificacion() {
    return this._numIdentificacion;
  }
  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }
  get nombre() {
    return this._nombre;
  }
  set telefono(nuevoTelefono) {
    this._telefono = nuevoTelefono;
  }
  get telefono() {
    return this._telefono;
  }
  set cuenta(nuevaCuenta) {
    this._cuenta = nuevaCuenta;
  }
  get cuenta() {
    return this._cuenta;
  }
}

class PersonaNatural extends Persona {
  static cantPersona = 0;
  constructor(
    tipoPersona,
    tipoIdentificacion,
    numIdentificacion,
    nombre,
    telefono,
    cuenta,
    sexo
  ) {
    super(
      tipoPersona,
      tipoIdentificacion,
      numIdentificacion,
      nombre,
      telefono,
      cuenta
    );
    this._sexo = sexo;
    ++PersonaNatural.cantPersona;
  }
}

class PersonaJuridica extends Persona {
  static cantPersona = 0;
  constructor(
    tipoPersona,
    tipoIdentificacion,
    numIdentificacion,
    nombre,
    telefono,
    cuenta
  ) {
    super(
      tipoPersona,
      tipoIdentificacion,
      numIdentificacion,
      nombre,
      telefono,
      cuenta
    );
    ++PersonaNatural.cantPersona;
  }
}
