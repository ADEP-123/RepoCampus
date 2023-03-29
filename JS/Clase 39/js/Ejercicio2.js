//for
function filterByLength(arr) {
    let arrfix = []
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length >= 4) {
            arrfix.push(arr[i])
        }
    }
    return arrfix
}

let arr = [];
let palabras = String(prompt(`Ingrese las palabras, para finalizar digite 0: `));
while (palabras != 0) {
    arr.push(palabras)
    palabras = String(prompt(`Ingrese las palabras, para finalizar digite 0: `));
}
console.log(filterByLength(arr))

//foearch
function filterByLength2(arr) {
    let arrfix = []
    arr.forEach(element => {
        if (element.length >= 4) {
            arrfix.push(element)
        }
    });
    return arrfix
}
let arr2 = [];
let palabras2 = String(prompt(`Ingrese las palabras, para finalizar digite 0: `));
while (palabras2 != 0) {
    arr2.push(palabras2)
    palabras2 = String(prompt(`Ingrese las palabras, para finalizar digite 0: `));
}
console.log(filterByLength2(arr2))

//mapped
const filterByLength3 = (arr) => arr.map(element => {
    if(element.length >= 4)
    return element
})

let arr3 = [];
let palabras3 = String(prompt(`Ingrese las palabras, para finalizar digite 0: `));
while (palabras3 != 0) {
    arr3.push(palabras3)
    palabras3 = String(prompt(`Ingrese las palabras, para finalizar digite 0: `));
}
console.log(filterByLength3(arr3))  

const filterByLength4 = vec.filter(function(e){
    return e.length >= 4;
})