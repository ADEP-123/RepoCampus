//Crear un vector que devuelva true o falso si un elemento existe en un vector

function existeVector(vector, elem) {
    for (let i = 0; i < vector.length; i++) {
        if (vector[i] === elem)
            return true;
    }
    return false;
}

let v = ["daniela", "zafiro", "ana", "gabriela"];
console.log(v);
console.log(existeVector(v, "ana"));
console.log(existeVector(v, "paco"));