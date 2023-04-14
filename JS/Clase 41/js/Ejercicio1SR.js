let totAnt = 0;
function agregar1() {
  while (
    isNaN(document.getElementById("lunes").value) == true ||
    isNaN(document.getElementById("martes").value) == true ||
    isNaN(document.getElementById("miercoles").value) == true ||
    isNaN(document.getElementById("jueves").value) == true ||
    isNaN(document.getElementById("viernes").value) == true ||
    isNaN(document.getElementById("sabado").value) == true
  ) {
    alert("Los kilometros deben estar escritos en numeros");
  }
  let nombre1 = document.getElementById("nombre").value;
  let lunes1 = Number(document.getElementById("lunes").value);
  let martes1 = Number(document.getElementById("martes").value);
  let miercoles1 = Number(document.getElementById("miercoles").value);
  let jueves1 = Number(document.getElementById("jueves").value);
  let viernes1 = Number(document.getElementById("viernes").value);
  let sabado1 = Number(document.getElementById("sabado").value);
  let total = Number(
    lunes1 + martes1 + miercoles1 + jueves1 + viernes1 + sabado1
  );

  document.getElementById("nombre").value = "";
  document.getElementById("lunes").value = "";
  document.getElementById("martes").value = "";
  document.getElementById("miercoles").value = "";
  document.getElementById("jueves").value = "";
  document.getElementById("viernes").value = "";
  document.getElementById("sabado").value = "";

  if (totAnt > total) {
    totAnt = total;
  }

  let str = String(document.getElementById("info").innerHTML);
  let str2 = "";
  str =
    `<tr>
<td>${nombre1}</td>
<td>${lunes1}</td>
<td>${martes1}</td>
<td>${miercoles1}</td>
<td>${jueves1}</td>
<td>${viernes1}</td>
<td>${sabado1}</td>
<td>${total}</td>
</tr>` + str;
  document.getElementById("info").innerHTML = str;
}
function limpiar1() {
  document.getElementById("nombre").value = "";
  document.getElementById("lunes").value = "";
  document.getElementById("martes").value = "";
  document.getElementById("miercoles").value = "";
  document.getElementById("jueves").value = "";
  document.getElementById("viernes").value = "";
  document.getElementById("sabado").value = "";
}

function limpiar2() {
  document.getElementById("info").innerHTML = "";
}




function agregar1() {
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
          break
      case "2":
          salarioBruto1 = 1.2 * salBasico;
          auxTransporte1 = 400000;
          bonificacion1 = 100000;
          break
      case "3":
          salarioBruto1 = 1.5 * salBasico;
          bonificacion1 = 150000;
          break
      case "4":
          salarioBruto1 = 2 * salBasico;
          bonificacion1 = 150000;
          break
      case "5":
          salarioBruto1 = 2.5 * salBasico;
          bonificacion1 = 200000;
          break
      case "6":
          salarioBruto1 = 3 * salBasico;
          bonificacion1 = 250000;
          break
      case "7":
          salarioBruto1 = 4 * salBasico;
          bonificacion1 = 500000;
          break
      case "8":
          salarioBruto1 = 4.5 * salBasico;
          bonificacion1 = 1000000;
          break
      case "9":
          salarioBruto1 = 6 * salBasico;
          bonificacion1 = 2000000;
          break
      case "10":
          salarioBruto1 = 10 * salBasico;
          bonificacion1 = 5000000;
          break
  }
  let pension1 = salarioBruto1 * 0.04;
  let eps1 = salarioBruto1 * 0.04;
  let salNeto1 = salarioBruto1 + auxTransporte1 + bonificacion1 - eps1 - pension1;

  let salarioBrutoTot = 0;
  salarioBrutoTot += salarioBruto1;

  document.getElementById("cedula").value = "";
  document.getElementById("nombre").value = "";

  let str =
      `<tr>
  <td>Total:</td>
  <td></td>
  <td></td>
  <td>$${salarioBrutoTot.toLocaleString("es")}</td>
  <td>$${auxTransporte1.toLocaleString("es")}</td>
  <td>$${bonificacion1.toLocaleString("es")}</td>
  <td>$${eps1.toLocaleString("es")}</td>
  <td>$${pension1.toLocaleString("es")}</td>
  <td>$${salNeto1.toLocaleString("es")}</td>
  </tr>`
      + String(document.getElementById("info").innerHTML);
  str =
      `<tr>
<td>${cedula1}</td>
<td>${nombre1}</td>
<td>${categoria1}</td>
<td>$${salarioBruto1.toLocaleString("es")}</td>
<td>$${auxTransporte1.toLocaleString("es")}</td>
<td>$${bonificacion1.toLocaleString("es")}</td>
<td>$${eps1.toLocaleString("es")}</td>
<td>$${pension1.toLocaleString("es")}</td>
<td>$${salNeto1.toLocaleString("es")}</td>
</tr>` + str;
  document.getElementById("info").innerHTML = str;
}
function limpiar1() {
  document.getElementById("cedula").value = "";
  document.getElementById("nombre").value = "";
  document.getElementById("categoria").value = "";
}

function limpiar2() {
  document.getElementById("info").innerHTML = "";
}