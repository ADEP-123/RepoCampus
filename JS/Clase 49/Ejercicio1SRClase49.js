function VecesPalabra (txt){
    txt = txt.split(" ");
    const mapPalabra = new Map();
    console.log(console.log("Palabra      Veces\n"+"-".repeat(18)));
    for (let i = 0; i < txt.length; i++){
        let veces = 0
        for (let j = i; j < txt.length; j++){
            if (txt[i] === txt[j]){
                veces += 1;
            }
        }
        if (mapPalabra.has(txt[i]) === false){
            mapPalabra.set(txt[i],veces);
        }
        console.log(`\n${txt[i]}` + " ".repeat((17-txt[i].length)) + `${mapPalabra.get(txt[i])}`)
    }
    
}
texto = "Este es un ejemplo de un texto que es ideal para procesar"
VecesPalabra(texto);

