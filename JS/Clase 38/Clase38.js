//ARRAY
let arrayName = [valor1, valor2, valor3, valor4, valor5];
let arrayValue = new arrayName(10, 20, 30, 40, 50);


//ejemplos
let casa = ["1BHK", "2BHK", "3BHK", "4BHK"];
console.log(casa);

let house = new Array(10, 20, 30, 40, 50);
console.log(house);

let house1 = new Array(5);
console.log(house1[0]);

//Como recorrer un array
pato = ["a", 1, true]
for (let i = 0; i < pato.length; i++) {
    console.log(pato[i]);
}




//copiar ciertas posiciones
let v = [2, 5, 6, 7, -1];
console.log(v);
let v2 = elevarImparesCuadrados(v);
console.log(v2);
console.log(v);

//let f = v[0];
//let s = v[1];
let(f, s, t) = v;
console.log(f, t);


//funciones con array

//Para agregar al final
let arr = [1, 2, 3, 4, 5, 6, 7];
arr.push(8);
console.log(arr);