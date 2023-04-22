let actual = new Date();
function CambioZonaHoraria(hora,sitio){
    let Vhoras = [hora.getHours(), hora.getMinutes(), hora.getSeconds()];
    console.log(`La hora actual en ${sitio}, es ${Vhoras[0]+1}:${Vhoras[1]}:${Vhoras[2]}`)
};
CambioZonaHoraria(actual,"New York")