function voltear(palabra){
    let aPalabra = palabra.split("")
    let IPalabra = aPalabra.reverse().join("")
}
let palabra = ""
const IPalabra = voltear(palabra);
if (IPalabra === palabra){
    console.log("Si es palindrome")
}
else{
    console.log("No es palindrome")
}


let vecesLetraA = [];
let pospal = 0;
for (i in IPalabra){
    var vecesLetra = 0;
    for (j in IPalabra){
        if (i === j){
            vecesLetra++
        }
    }
    vecesLetraA.append(vecesLetra)
}