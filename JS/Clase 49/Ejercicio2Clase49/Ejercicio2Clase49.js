//libreria
let calcular = document.getElementById("start");
calcular.addEventListener("click", (e) => {
    e.preventDefault();
    let fechaReal = document.getElementById("fReal").value;
    let fechaPactada = document.getElementById("fPact").value;
    fechaReal = fechaReal.split("-");
    fechaPactada = fechaPactada.split("-");
    let dateFechaReal = new Date(fechaReal[0], fechaReal[1], fechaReal[2]);
    let dateFechaPactada = new Date(fechaPactada[0], fechaPactada[1], fechaPactada[2]);
    let diff = dateFechaReal.getTime() - dateFechaPactada.getTime();
    let multa = 0;
    if (0 < (diff / 1000 / 60 / 60 / 24) && (diff / 1000 / 60 / 60 / 24) <= 3) {
        multa = (diff / 1000 / 60 / 60 / 24) * 7000
        document.getElementById("aqui").textContent = `Tiene una multa de $${multa.toLocaleString("es")}`
    } else if ((diff / 1000 / 60 / 60 / 24) >= 4) {
        multa = (diff / 1000 / 60 / 60 / 24) * 10000
        document.getElementById("aqui").textContent = `Tiene una multa de $${multa.toLocaleString("es")} y una sansion de 6 meses sin prestamo de libros`
    } else {
        document.getElementById("aqui").textContent = `el libro se entregó a tiempo, no tiene multa`
    }

});
