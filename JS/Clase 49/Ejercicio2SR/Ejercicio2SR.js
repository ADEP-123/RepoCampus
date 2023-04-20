let bRegistrar = document.getElementById("registrar");
bRegistrar.addEventListener("click",(e)=>{
    e.preventDefault();
    let numFact = document.getElementById("numeracion").value;
    let valFact = document.getElementById("vFactura").value;
    let tBody = document.getElementById("aqui");
    let tr = document.createElement("tr");
    tr.setAttribute("id",`Fac${numFact}`)
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    td1.textContent = numFact;
    td2.textContent = valFact;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tBody.appendChild(tr);
    document.getElementById("numeracion").value = Number(numFact) + 1
    document.getElementById("vFactura").value = ""
});

let bPagarF = document.getElementById("pagarF");
bPagarF.addEventListener("click", (e)=>{
    e.preventDefault();
    document.getElementById(`Fac${document.getElementById("numeracionP").value}`).innerHTML="";
});