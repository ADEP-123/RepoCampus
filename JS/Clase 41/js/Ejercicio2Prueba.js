function agregar1() {
    let estrato1 = document.getElementById("estrato").value;
    let estado1 = document.getElementById("estado").value;
    console.log(estrato1)
    if (String(estado1) === "2") {
        document.getElementById("valorAPagar").value = "El valor a pagar es $0"
    } else {
        switch (String(estrato1)) {
            case "1":
                document.getElementById("valorAPagar").value = "El valor a pagar es $10.000"
                break
            case "2":
                document.getElementById("valorAPagar").value = "El valor a pagar es $15.000"
                break
            case "3":
                document.getElementById("valorAPagar").value = "El valor a pagar es $30.000"
                break
            case "4":
                document.getElementById("valorAPagar").value = "El valor a pagar es $50.000"
                break
            case "5":
                document.getElementById("valorAPagar").value = "El valor a pagar es $65.000"
                break
        }
    }

}