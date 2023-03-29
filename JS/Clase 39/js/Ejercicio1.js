//for
function impuesto(arr,imp){
    let arrConImp = []
    for (i = 0; i < arr.length;i++ ){
        arrConImp.push(Math.round(arr[i]*imp/100))
    }
    return arrConImp
}

let arr = []

aux = Number(prompt(`Ingrese los precios a calcular iva, para terminar escriba el -1`))
while (aux != -1){
    arr.push(aux)
    aux = Number(prompt(`Ingrese los precios a calcular iva, para terminar escriba el -1`))
}

let imp = Number(prompt(`Ingrese el impuesto a deducir para cada precio`))


console.log(impuesto(arr,imp))



///mapped
function impuesto2(arr,imp){
    let mappedArr = arr.map(function (element) {
        return Math.round(element*imp/100);
    });
    return mappedArr
}
let arr2 = []

aux = Number(prompt(`Ingrese los precios a calcular iva, para terminar escriba el -1`))
while (aux != -1){
    arr2.push(aux)
    aux = Number(prompt(`Ingrese los precios a calcular iva, para terminar escriba el -1`))
}

let imp2 = Number(prompt(`Ingrese el impuesto a deducir para cada precio`))


console.log(impuesto2(arr2,imp2))

///foreach
function impuesto3(arr,imp){
    let arrImp = []
    arr.forEach(function (element) {
        arrImp.push(Math.round(element*imp/100));
    });
    return arrImp
}
let arr3 = []

aux = Number(prompt(`Ingrese los precios a calcular iva, para terminar escriba el -1`))
while (aux != -1){
    arr3.push(aux)
    aux = Number(prompt(`Ingrese los precios a calcular iva, para terminar escriba el -1`))
}

let imp3 = Number(prompt(`Ingrese el impuesto a deducir para cada precio`))


console.log(impuesto3(arr3,imp3))