const myRe = /d(b+)d/g;
let myArray = myRe.exec("cdbbdbsbz");
for (let exp of myArray) {
  console.log(exp);
}

///Escroibir una expresion regular que valide que un relefojo fijo está bien escrito para colombia, teniento presente el indicatibo +57

const telRe = /^(\+57)(60[1-8])([0-9]{7})/g;
let valido = telRe.exec("+576076363636");
for (let exp of valido){
    console.log(exp)
}
