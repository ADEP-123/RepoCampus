function start(){
let cantprov = Number(prompt(`Ingrese la cantidad de proveedores a registrar: `));
while(isNaN(cantprov) === true || cantprov <= 0){
    cantprov = Number(prompt(`La cantidad de proveedores debe ser numerica y mayor a 0, profavor ingrese nuevamente la cantidad de proveedores a registrar: `));
}  
let str = ``; let str2 = ``;
let incremento = Infinity;
let nomMenProv = ``; let prodMenProv = ``; let prec2022MenProv = 0; let prec2023MenProv = 0;
for (let i = 1; i <= cantprov; i++) {
    let nomprov = String(prompt(`Ingrese el nombre del proveedor: `));
    let nomprod = String(prompt(`Ingrese el nombre del producto: `));
    let prec2022 = Number(prompt(`Ingrese el precio del producto en el 2022: `));
    while(isNaN(prec2022) === true || prec2022 <= 0){
        prec2022 = Number(prompt(`El precio debe ser numerico y mayor a 0, profavor ingrese nuevamente el precio del producto en el 2022: `));
    } 
    let prec2023 = Number(prompt(`Ingrese el precio del producto en el 2023: `));
    while(isNaN(prec2023) === true || prec2023 <= 0){
        prec2023 = Number(prompt(`El precio debe ser numerico y mayor a 0, profavor ingrese nuevamente el precio del producto en el 2023: `));
    } 
    if (incremento > ((100/prec2022)*prec2023)){
        nomMenProv = nomprov;
        prodMenProv = nomprod;
        prec2022MenProv = prec2022;
        prec2023MenProv = prec2023;
        incremento = ((100/prec2022)*prec2023);
    }
    str += `<tr>
    <td>${nomprov}</td>
    <td>${nomprod}</td>
    <td>$${prec2022.toLocaleString("es")}</td>
    <td>$${prec2023.toLocaleString("es")}</td>
    </tr>`
}
str2 += `<tr>
<td>${nomMenProv}</td>
<td>${prodMenProv}</td>
<td>$${prec2022MenProv.toLocaleString("es")}</td>
<td>$${prec2023MenProv.toLocaleString("es")}</td>
<td>%${incremento.toFixed(2)}</td>`

document.getElementById("aqui1").innerHTML = str;
document.getElementById("aqui2").innerHTML = str2;
}


