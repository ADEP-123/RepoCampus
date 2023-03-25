function celsiusFar (celsius){
    farenheit = (celsius * 1.8) + 32;
    return farenheit
}
let celsius = Number(prompt(`Ingrese la cantidad de grados en celsius para convertir: `));
console.log(celsiusFar(celsius));