
//recorre el vector
let arr = [1, 2, 3];
arr.forEach(function (element) {
    console.log(element);
});

//recorre el array y lo devuelve
let arr2 = [1, 2, 3];
let mappedArr = arr2.map(function (element) {
    return element * 2;
});
console.log(arr2)

//filter crea un array coin los elementos que cumplan una condicion
let arr3 = [1, 2, 3, 4, 5, 6];
let filteredArr = arr3.filter(function (element) {
    return element % 2 === 0;
});
console.log(arr3)

//reduce el array a un unico valor meidante la ejecuciuon de una funcion para cada elemento del array
let arr4 = [1, 2, 3, 4, 5, 6, 7];
let sum = arr.reduce(function (acumulator, currentValue) {
    return acumulator + currentValue;
})
console.log(arr4)

//funcion para dar maximo
let arr5 = [5, 10, 2, 8, 3];
let maxNumber = arr5.reduce(function (acumulator, currentValue) {
    return Math.max(acumulator, currentValue);
});
console.log(maxNumber);


let arr6 = [5, 10, 2, 8, 3];
let sum1 = arr6.reduce(function (acumulator, currentValue) {
    return acumulator + currentValue
})
let average = sum1 / arr6.length;
console.log(average);