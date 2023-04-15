function super_digit(digit) {
    while (String(digit).length != 1) {
        digit = Array.from(String(digit));
        let newDig = 0;
        digit.forEach((element) => {
            console.log(element)
            newDig += Number(element)
        });
        digit = newDig
        console.log(digit)
    }

}
super_digit(9875);