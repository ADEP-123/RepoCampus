let nuip = String(prompt("Ingrese el nuip del participante, para finalizar escriba FIN"));
let vnuip = [];
let vnombre = [];
let vpuntaje = [];
let valnuip = false;
while (nuip.toLowerCase() != "fin") {
    while (valnuip === false) {
        aux = isNaN(nuip);
        if (aux = true) {
            if (nuip.toLowerCase() === "fin") {
                valnuip = true;
            }
        } else if (nuip > 10000) {
            valnuip = true;
        }
        nuip = String(prompt("El nuip debe ser mayor a 10000, ingrese el nuip del participante, para finalizar escriba FIN"));
    }

    do {
        let nombre = String(prompt(`Ingrese el nombre de participante identificado con el nuip ${nuip}`));
    } while (nombre.length < 10);

    do {
        let puntaje = Number(prompt(`Ingrese el puntaje del participante entre 0 y 50`))
    } while (puntaje < 0 || puntaje > 50);
    vnuip.push(nuip)
    vnombre.push(nombre)
    vpuntaje.push(puntaje.trunc())
    nuip = Number(prompt("Ingrese el nuip del siguiente participante, para finalizar escriba FIN"));
}

for (let i = 0; i < vnuip.length; i++) {
    for (let j = 1; j < (vnuip.length - 1); j++) {
        let aux = 0;
        if (vpuntaje[i] < vpuntaje[j]) {
            aux = vpuntaje[i];
            vpuntaje[i] = vpuntaje[j];
            vpuntaje[j] = aux;
            aux = vnuip[i];
            vnuip[i] = vnuip[j];
            vnuip[j] = aux;
            aux = vnombre[i];
            vnombre[i] = vnombre[j];
            vnombre[j] = aux;
        }
    }
}
console.log(vnombre);
console.log(vnuip);
console.log(vpuntaje);




nuip = String(prompt("Ingrese el nuip del participante, para finalizar escriba FIN"));

let isnumber = isNaN(nuip);
console.log(isnumber)
if (isnumber = true) {
    console.log("adsadsa")
}