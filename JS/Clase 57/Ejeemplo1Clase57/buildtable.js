export default function BuildTable(elemHTML, datos) {
  let filas = "";
  for (let valor of datos) {
    filas += `
    <tr>
        <td>${valor.NOMBRE}</td>
        <td>${valor.EQUIPO}</td>
        <td>${valor.EDAD}</td>
        <td class="imgtable">
        <img src= ${valor.SEXO === "M" ? "man.png" : "woman.png"} alt="Camper">
        </td>
    </tr>
    `;
  }
  elemHTML.innerHTML = filas;
}
