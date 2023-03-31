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

  let str = String(document.getElementById("info").innerHTML);
  str += `<tr>
<td>${nombre1}</td>
<td>${lunes1}</td>
<td>${martes1}</td>
<td>${miercoles1}</td>
<td>${jueves1}</td>
<td>${viernes1}</td>
<td>${sabado1}</td>
<td>${total}</td>
</tr>`;
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
