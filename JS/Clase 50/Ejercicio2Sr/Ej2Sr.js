//libreria
let calcular = document.getElementById("start");
calcular.addEventListener("click", (e) => {
    e.preventDefault();
    let fechaInicio = document.getElementById("fIni").value;
    fechaInicio = new Date(fechaInicio);
    let dias = 90*24*60*60*1000
    let fechaFin = new Date(fechaInicio.getTime()+dias)
    document.getElementById("aqui").textContent = `90 días despues desde ${fechaInicio} es ${fechaFin} `
});
