let f1 = prompt( "ingrese la fecha 1");
let f2 = prompt("ingrese la fecha 2")

f1 = new Date(f1);
f2 = new Date(f2);

let diff = f1.getTime() - f2.getTime();
if (diff < 0){
    diff = -diff
}
console.log(`Los dias transcurridos entre las dos fechas son ${diff/1000/60/60/24}`)