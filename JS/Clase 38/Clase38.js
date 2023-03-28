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

//para eliminar y devolver
let arr2 = [1, 2, 3];
let lastElement = arr2.pop();
console.log(lastElement);
console.log(arr2)

//eliminar y devolver primer elemento
let arr3 = [1, 2, 3];
let firstElement = arr2.shift();
console.log(firstElement);
console.log(arr3)

//Agregar uno o màs elementos al principio del arrayt y devuelve la longitud del array
let arr4 = [1, 2, 3];
arr4.unshift(0, -1);
console.log(arr4)

//Devuelve una parte del array seleccionada desde el indice hasta el finañ
let arr5 = [1, 2, 3, 4, 5, 6];
let slicedArr = arr5.slice(1, 4);
console.log(slicedArr);
console.log(arr5);

//Agregar o elimina elementos del array y devueñve los elementos eliminados
let arr6 = [1, 2, 3, 4, 5, 6, 7, 8];
let removedElements = arr6.splice(1, 2);
console.log(removedElements);
console.log(arr6);

//une dos o mas arrays en uno solo
let arr7 = [1, 2, 3, 4, 5, 6, 7];
let arr8 = ["a", "b", "c"];
let newArr = arr7.concat(arr8);
console.log(newArr)

//une todos los ele,mentos dela rray en una cadena de texto separada por un separador
let arr9 = ["apple", "banana", "orange"];
let str2 = arr9.join(`, `);
console.log(str2);

//Devuelve el indice del primer elemento encontrado en el array, o -1 si no lo encuentra (binaria)
let arr10 = ["apple", "banana", "orange"];
let index = arr10.indexOf("banana");
console.log(index);


