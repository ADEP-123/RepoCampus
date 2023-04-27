class Empresa {
    static _identificador = 0;
    constructor(nombre) {
        this._nombre = nombre;
        ++Empresa.dentificador;
    }
    get identificador() {
        return this._identificador;
    }
}

class Empleado extends Empresa {
    static identificador = 0
    #edad
    #salario
    #experiencia
    constructor(nombre, edad, salario, experiencia) {
        super(nombre);
        this.#edad = edad;
        this.#salario = salario;
        this.#experiencia = experiencia;
        ++Empleado.identificador;
    }
    set Edad(newEdad) {
        this.#edad = newEdad
    }
    get Edad() {
        return this.#edad
    }
    set Salario(newSalario) {
        this.#salario = newSalario
    }
    get Salario() {
        return this.#salario
    }
    set Experiencia(newExperiencia) {
        this.#experiencia = newExperiencia
    }
    get Experiencia() {
        return this.#experiencia
    }
    IncrementoSalario(incremento) {
        this.#salario += incremento
    }
}

class Cliente extends Empresa {
    static identificador = 0
    #edad
    #historialDeVentas
    #telefono
    #email
    constructor(nombre, edad, historialDeVentas, telefono, email) {
        super(nombre);
        this.#edad = edad;
        this.#historialDeVentas = historialDeVentas;
        this.#telefono = telefono;
        this.#email = email;
        ++Empleado.identificador;
    }
    set Edad(newEdad) {
        this.#edad = newEdad
    }
    get Edad() {
        return this.#edad
    }
    set historialDeVentas(newhistorialDeVentas) {
        this.#historialDeVentas = newhistorialDeVentas
    }
    get historialDeVentas() {
        return this.#historialDeVentas
    }
    set telefono(newTelefono) {
        this.#telefono = newTelefono
    }
    get telefono() {
        return this.#telefono
    }
    set email(newEmail) {
        this.#email = newEmail
    }
    get email() {
        return this.#email
    }
    Sansion() { }
}

class Experiencia {
    #descripcion
    #tiempo
    constructor(descripcion, tiempo) {
        this.#descripcion = descripcion;
        this.#tiempo = tiempo;
    }
    set descripcion(newDescripcion) {
        this.#descripcion = newDescripcion
    }
    get descripcion() {
        return this.#descripcion
    }
    set tiempo(newTiempo) {
        this.#tiempo = newTiempo
    }
    get tiempo() {
        return this.#tiempo
    }
}

class HistorialDeVentas {
    #descripcion
    #valorvendido
    constructor(descripcion, valorVendido) {
        this.#descripcion = descripcion;
        this.#valorvendido = valorVendido;
    }
    set descripcion(newDescripcion) {
        this.#descripcion = newDescripcion
    }
    get descripcion() {
        return this.#descripcion
    }
    set valorvendido(newValorvendido) {
        this.#valorvendido = newValorvendido
    }
    get valorvendido() {
        return this.#valorvendido
    }
}
let exp1 = new Experiencia("Developer senior 1 año", "8 años");
let empleado1 = new Empleado("paco", 25, 4000000, exp1)
delete Empleado.empleado1;
console.log(empleado1)