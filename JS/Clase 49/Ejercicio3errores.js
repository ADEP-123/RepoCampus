function calcularCuadradoNumero(numero) {
    if (isNaN(numero))
        throw new Error('La entrada debe ser un número');
    return numero * numero;
}

try {
    console.log(calcularCuadradoNumero("a"));
} catch (error) {
    console.log("Ha ocurrido una excepcion. \n", error);
}

function registrarUsuario(email) {
    try {
        if (!email || !email.includes('@')){
            throw new Error('Direccion de correo electronico no valida.');
        }
    } catch (error){
        mostrarMensajeDeError(error.message);
    }
}

function mostrarMensajeDeError(mensaje){
    //
}

//