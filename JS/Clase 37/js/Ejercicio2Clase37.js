function camelCase (s){
    while(s.length < 1 || s.length > 10**5){
        s = prompt(`La frase camelcase debe tener mas de 1 caracter y menos de 10⁵ caracteres, Ingrese la farse tipo camelCase a analizar: `);
    }
    let cantidadPalabras = 1;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i).toUpperCase() === s.charAt(i)){
            cantidadPalabras += 1;
        }
    } 
    if (cantidadPalabras === 1){
        console.log("El texto no es tipo camelCase");
    } else {
        console.log(`El texto es tipo calmeCase y tiene ${cantidadPalabras} palabras`)
    }
}
let s = prompt(`Ingrese la frase tipo camelCase a analizar: `);
camelCase(s);
