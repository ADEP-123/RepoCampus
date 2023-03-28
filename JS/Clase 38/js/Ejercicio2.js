//con un array volver el mayor 

let mayorElemVector = vector => {
    if (vector.length === 0){
        return null;
    }
    let mayor = vector[0]
    for (let i = 1; i < vector.length; i++){
        if (vector[i] > mayor){
            mayor = vector[i]
        }
    }
    return mayor;
}

let v = [2,5,6,7,-1];
console.log(mayorElemVector(v));

let h = ["a", "z", "1"];
console.log(mayorElemVector(h));
