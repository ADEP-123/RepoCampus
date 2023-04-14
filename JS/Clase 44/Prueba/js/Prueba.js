function calcularDatos() {
    const salBasico = 1160000
    let cedula1 = document.getElementById("cedula").value;
    let nombre1 = document.getElementById("nombre").value;
    let categoria1 = Number(document.getElementById("categoria").value);
    let salarioBruto1 = 0;
    let auxTransporte1 = 0;
    let bonificacion1 = 0;
    switch (String(categoria1)) {
        case "1":
            salarioBruto1 = salBasico;
            auxTransporte1 = 400000;
            bonificacion1 = 100000;
            categoria1 = "Auxiliar A"
            break
        case "2":
            salarioBruto1 = 1.2 * salBasico;
            auxTransporte1 = 400000;
            bonificacion1 = 100000;
            categoria1 = "Auxiliar B"
            break
        case "3":
            salarioBruto1 = 1.5 * salBasico;
            bonificacion1 = 150000;
            categoria1 = "Tecnico A"
            break
        case "4":
            salarioBruto1 = 2 * salBasico;
            bonificacion1 = 150000;
            categoria1 = "Tecnico B"
            break
        case "5":
            salarioBruto1 = 2.5 * salBasico;
            bonificacion1 = 200000;
            categoria1 = "Profesional A"
            break
        case "6":
            salarioBruto1 = 3 * salBasico;
            bonificacion1 = 250000;
            categoria1 = "Profesional B"
            break
        case "7":
            salarioBruto1 = 4 * salBasico;
            bonificacion1 = 500000;
            categoria1 = "Director A"
            break
        case "8":
            salarioBruto1 = 4.5 * salBasico;
            bonificacion1 = 1000000;
            categoria1 = "Director B"
            break
        case "9":
            salarioBruto1 = 6 * salBasico;
            bonificacion1 = 2000000;
            categoria1 = "Gerente de departamento A"
            break
        case "10":
            salarioBruto1 = 10 * salBasico;
            bonificacion1 = 5000000;
            categoria1 = "Gerente de departamento B"
            break
    }
    let pension1 = salarioBruto1 * 0.04;
    let eps1 = salarioBruto1 * 0.04;
    let salNeto1 = salarioBruto1 + auxTransporte1 + bonificacion1 - eps1 - pension1;
    let vRes = [];
    vRes[0] = cedula1; vRes[1] = nombre1; vRes[2] = categoria1; vRes[3] = salarioBruto1; vRes[4] = auxTransporte1; vRes[5] = bonificacion1; vRes[6] = eps1
    vRes[7] = pension1; vRes[8] = salNeto1
    salarioBrutoTot += salarioBruto1;
    auxTransporteTot += auxTransporte1;
    bonificacionTot += bonificacion1;
    epsTot += eps1;
    pensionTot += pension1;
    salNetoTot += salNeto1;
    cantEmpl += 1;
    if (salNeto1 < menSal) {
        menSal = salNeto1
        nomMenSal = nombre1
    }
    promSal = salNetoTot / cantEmpl;
    if (categoria1 != "Director A" && categoria1 != "Director B" && categoria1 != "Gerente de departamento A" && categoria1 != "Gerente de departamento B") {
        if (salNeto1 > maySal) {
            maySal = salNeto1;
            nomMaySal = nombre1
        }
    }
    return vRes
}

let salarioBrutoTot = 0;
let auxTransporteTot = 0;
let bonificacionTot = 0;
let epsTot = 0;
let pensionTot = 0;
let salNetoTot = 0;
let cantEmpl = 0;
let menSal = Infinity;
let nomMenSal = "";
let promSal = 0;
let maySal = 0;
let nomMaySal = "";


function agregar1() {
    let vRes = calcularDatos()

    document.getElementById("cedula").value = "";
    document.getElementById("nombre").value = "";



    document.getElementById("salarioBrutoTot1").innerHTML = `$${salarioBrutoTot.toLocaleString("es")}`
    document.getElementById("auxTransporteTot1").innerHTML = `$${auxTransporteTot.toLocaleString("es")}`
    document.getElementById("bonificacionTot1").innerHTML = `$${bonificacionTot.toLocaleString("es")}`
    document.getElementById("epsTot1").innerHTML = `$${epsTot.toLocaleString("es")}`
    document.getElementById("pensionTot1").innerHTML = `$${pensionTot.toLocaleString("es")}`
    document.getElementById("salNetoTot1").innerHTML = `$${salNetoTot.toLocaleString("es")}`

    let str = String(document.getElementById("info").innerHTML);
    str =
        `<tr>
  <td>${vRes[0]}</td>
  <td>${vRes[1]}</td>
  <td>${vRes[2]}</td>
  <td>$${vRes[3].toLocaleString("es")}</td>
  <td>$${vRes[4].toLocaleString("es")}</td>
  <td>$${vRes[5].toLocaleString("es")}</td>
  <td>$${vRes[6].toLocaleString("es")}</td>
  <td>$${vRes[7].toLocaleString("es")}</td>
  <td>$${vRes[8].toLocaleString("es")}</td>
  </tr>` + str;
    document.getElementById("info").innerHTML = str;

    document.getElementById("estadisticas").innerHTML =
        `<tr>
    <td>${cantEmpl}</td>
    <td>${nomMenSal}<br>$${menSal.toLocaleString("es")}</td>
    <td>${promSal.toLocaleString("es")}</td>
    <td>${nomMaySal}<br>$${maySal.toLocaleString("es")}</td>
    <td id="salnetoTot">$${salNetoTot.toLocaleString("es")}</td>
    </tr>`;
}


function limpiar1() {
    document.getElementById("cedula").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("categoria").value = "";
}

function limpiar2() {
    document.getElementById("info").innerHTML = "";
    document.getElementById("salarioBrutoTot1").innerHTML = "";
    document.getElementById("auxTransporteTot1").innerHTML = "";
    document.getElementById("bonificacionTot1").innerHTML = "";
    document.getElementById("epsTot1").innerHTML = "";
    document.getElementById("pensionTot1").innerHTML = "";
    document.getElementById("salNetoTot1").innerHTML = "";
    document.getElementById("estadisticas").innerHTML = "";
}