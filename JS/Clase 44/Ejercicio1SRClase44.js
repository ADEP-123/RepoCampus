let t1 = Number(prompt("Ingrese el primer termino"));
let t2 = Number(prompt("Ingrese el segundo termino"));
let it = Number(prompt("Ingrese la iteracion que quiere calcular "))
function fibonacci(t1, t2, it) {
    let Vf = [];
    Vf[0] = t1; Vf[1] = t2
    for (let i = 2; i < it; i++) {
        Vf[i] = (Vf[i - 2]) + (Vf[i-1]**2)
        console.log(Vf[i])
    }
    return Vf[it-1]
}
fibonacci(t1,t2,it)