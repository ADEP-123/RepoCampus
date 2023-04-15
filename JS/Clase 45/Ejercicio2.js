function prefijo(arr, pref) {
    let prefijos = 0;
    arr.forEach((element) => {
        let flag = true
        for (let i = 0; i < pref.length; i++) {
            if (element.charAt(i) != pref.charAt(i)) {
                flag = false
            }
        }
        if (flag === true) {
            prefijos += 1
        }
    });
    console.log(prefijos)
}

function prefijo2(arr, pref) {
    arr.unshift("")
    let prefijos = arr.reduce((acc, item) => {
        acc = 0;
        let flag = true;
        for (let i = 0; i < pref.length; i++) {
            if (item.charAt(i) != pref.charAt(i)) {
                flag = false
            }
        }
        if (flag === true) {
            return acc += 1
        }
    });
    console.log(prefijos)
}
let words = ["pay", "attention", "practice", "attend"]; let pref = "at"
prefijo2(words, pref)


