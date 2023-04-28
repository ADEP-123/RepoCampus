// const myRe = /d(b+)d/g;
// let myArray = myRe.exec("cdbbdbsbz");
// for (let exp of myArray) {
//   console.log(exp);
// }

// ///Escroibir una expresion regular que valide que un relefojo fijo está bien escrito para colombia, teniento presente el indicatibo +57

// const telRe = /^(\+57)(60[1-8])([0-9]{7})/g;
// let valido = telRe.exec("+576076363636");
// for (let exp of valido){
//     console.log(exp)
// }

//DETECTAR UNA PARTE DEL TEXTO EN ESPECIFICO
const myRe1 = /abcd/g;
let str1 = myRe1.exec("abcdefg")
console.log(str1)

//detectar archivos pdf
const myRe2 = /^\w+\.pdf$/g;
let str2 = ["readme.md", "document.pdf", "image.png", "music.mp4", "manual.pdf"];
let prueb = myRe2.exec(str2);
console.log(prueb)

//"." permite seleccionar cualquier caracter incluyendo especiales y espacios
const myRe3 = /./g;
let str3 = myRe3.exec("abcABC123 .:!?")
console.log(str3);

//[] todos los posibles en un espacio, sin comas
const myRe4 = /b[aeiou]r/g;
let str4 = myRe4.exec("bar","ber","bir","bor","bur")
console.log(str4);

//[^caracteres que no queremos de este lado]
const myRe5 = /b[^eo]r/g;
let str5 = myRe5.exec("bar","ber","bir","bor","bur")
console.log(str5); //solo seleccionaria bar bir bur

//letras entre letras [letra de inicio-letra final], tambien funciona con numeros
const myRe6 = /[e-o]/g;
let str6 = myRe6.exec("abcdefghijklmnopqrstuvwxyz")
console.log(str6);

//caracter que no coincide en lo absoluto o puede coincidir muchas veces
const myRe7 = /be*r/g;
let str7 = myRe7.exec("br","ber","beer")
console.log(str7); //deberia devolver todos

//caracter que coincide una o mas veces
const myRe8 = /be+r/g;
let str8 = myRe8.exec("br","ber","beer")
console.log(str8); //deberia devolver ber y beer

//caracter que es opcional
const myRe9 = /colou?r/g;
let str9 = myRe9.exec("color","colour","colouur")
console.log(str9); //deberia devolver color y colour

//{n} veces la letra que le precede
const myRe10 = /be{2}r/g;
let str10 = myRe10.exec("br","beer","beeer")
console.log(str10); //deberia devolver beer

//almenos{n,} veces la letra que le precede
const myRe11 = /be{2,}r/g;
let str11 = myRe11.exec("br","beer","beeer")
console.log(str11); //deberia devolver beer y beeer

////entre {n,n} veces la letra que le precede
const myRe12 = /be{2,3}r/g;
let str12 = myRe12.exec("br","beer","beeer","beeeer")
console.log(str12); //deberia devolver beer y beeer

////(dsadsa) Agrupar expresiones
const myRe13 = /(haa)/g;
let str13 = myRe13.exec("ha-ha","haa-haa")
console.log(str13); //deberia devolver haa

//// \1 para evitar reescribir grupos
const myRe14 = /(ha)-\1,(haa)-\2/g;
let str14 = myRe14.exec("ha-ha","haa-haa")
console.log(str14); //deberia devolver haa y ha

// uno u otro caracter (c|r)at
const myRe15 = /(c|r)at/g;
let str15 = myRe15.exec("cat","rat","dog")
console.log(str15); //deberia devolver cat y rat

// \* caracteres especiales
const myRe16 = /(\*|\,)/g;
let str16 = myRe16.exec("(*) Asterisk.")
console.log(str16); //deberia seleccionar solo el * y el .

// ^al comienzo de una linea lo que le sigue

// $al final de una linea lo que le precede

// \w letras, numeros, y guiones bajos 

// \W caractesres diferentes a letras, numeros y guines bajos

// \d solo datos numericos

// \D diferente a datos numericos

// \s caracteres de espacio

// \S caracteres diferentes a espacio

// Expresion look ahead positiva (?=) seleccionar valores que tienen lo que este despues del igual despues de estos
const myRe17 = /\d+(?=PM)/g;
let str17 = myRe17.exec("Date: 4 Aug 3PM")
console.log(str17); //deberia seleccionar solo el 3

// Expresion look ahead negativa (?!) seleccionar valores que NO tienen lo que este despues del ! despues de estos
const myRe18 = /\d+(?!PM)/g;
let str18 = myRe18.exec("Date: 4 Aug 3PM")
console.log(str18); //deberia seleccionar solo el 4

// Expresion look behind positiva (?<=) seleccionar valores que tienen lo que este despues del igual antes de estos
const myRe19 = /(?<=\$)\d+/g;
let str19 = myRe19.exec("Product Code: 1064 Price: $5")
console.log(str19); //deberia seleccionar solo el 5

// Expresion look behind negativa (?<=) seleccionar valores que NO tienen lo que este despues del ! antes de estos
const myRe20 = /(?<!\$)\d+/g;
let str20 = myRe20.exec("Product Code: 1064 Price: $5")
console.log(str20); //deberia seleccionar solo el 1064

// banderas g: global m:multilinea i:no distingue entre mayusculas y minusculas

// coincidencia codiciosa, cualquier valor que termine en r cualquier caracter precedido por ella y no se detiene en la primera
const myRe21 = /.*r/g;
let str21 = myRe21.exec("ber beer beeer beeeer")
console.log(str21); //deberia seleccionar ber beer beeer beeeer

//emparejamiento perezoso que se para en el primero
const myRe22 = /.*?r/g;
let str22 = myRe22.exec("ber beer beeer beeeer")
console.log(str22); //deberia seleccionar ber





