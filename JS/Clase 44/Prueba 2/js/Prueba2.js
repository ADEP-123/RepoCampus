function compareTriplets(a, b) {
    let res = [];
    let Pa = 0;
    let Pb = 0;
    for (let i = 0; i < 3; i++) {
        if (a[i] < b[i]) {
            Pb += 1;
        } else if (a[i] > b[i]) {
            Pa += 1;
        }
    }
    res[0] = Pa; res[1] = Pb;
    return res
}
let a = [1, 2, 3];
let b = [3, 2, 1];
compareTriplets(a, b)