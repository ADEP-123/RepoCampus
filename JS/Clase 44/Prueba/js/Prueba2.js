function compareTriplets(a, b) {
    let res = [0, 0];

    for (let i = 0; i < 3; i++) {
        if (a[i] < b[i]) {
            res[1] += 1;
        } else if (a[i] > b[i]) {
            res[0] += 1;
        }
    }
    return res
}
let a = [1, 2, 3];
let b = [3, 2, 1];
compareTriplets(a, b)