//Ejercicio 1: Escribir una funcion que eleve al cuadrado todos los numeros impares de un vector
function elevarImparesCuadrado (vector) {
    for (let i = 0; i < vector.length; i++) {
        if (vector[i]%2 != 0){
            vector[i] = vector[i]**2;
        }
    }
    return vector;
}
let v = [2, 5, 6, 7, 5, -1];
console.log(v);
console.log(elevarImparesCuadrado(v));
