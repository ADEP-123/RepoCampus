let s = "abaccb";
let distance = [
    1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];


function confirm(array, distance) {
    let abcdario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let disreal = [];
    let bandera = true
    for (let i = 0; i < abcdario.length; i++) {
        let pos1 = [];

        for (let j = 0; j < array.length; j++) {
            if (abcdario[i] === array.charAt(j)) {
                pos1.push(j)
            }
        }
        console.log(pos1)

        let dis = pos1[1] - (pos1[0] + 1)

        if (pos1.length === 0) {
            disreal.push(0)
        } else {
            disreal.push(dis)
        }

    }
    console.log(disreal)
    for (let i = 0; i < abcdario.length; i++) {
        if (array.indexOf(abcdario[i]) != -1) {
            if (disreal[i] === distance[i]) {
            } else {
                bandera = false
            }
        }
    }
    console.log(bandera)
}
confirm(s, distance);
