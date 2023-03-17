const multilinea = `
Esta es una
cadena con muchas
lienas.`;
console.log(multilinea);

console.log("*".repeat(10));

const str = "Hola estoy aprendiendo JavaScript en Campus";
console.log(str.startsWith("Hola"));
console.log(str.startsWith("Hola", 2));
console.log(str.startsWith("Script", 27));

const str2 = "Hello, My name is Inigo Montoya. You killed my father. Prepare to die"
console.log(str2.endsWith("Prepare to die"));
console.log(str2.endsWith("Montoya", 31));
console.log(str2.endsWith("Prepare to die",2));

console.log(str2.includes('Inigo Montoya'));
console.log(str2.includes('Westley'));
console.log(str2.includes('Hello', 1));

// Prompt permite pregntarle al usuario y que el devuelva ok o cancelar
// result = prompt(title,[default])
sexo = prompt("Ingrese el sexo");
sexo = prompt("Ingrese el sexo" , "Femenino");

//confirm muesta una ventana modal con una pregunta y dos botones ok y cancelar    result = confirm(pregunta);

isBoss = confirm("¿Eres el jefe?");
alert(isBoss);//retorna true si le da ok, false si le da cancelar

//String convierte ese valor a cadena
let value = true;
alert(typeof value);

value = String(value);
alert(typeof value);

//la conexion numerica ocurre automaticamente en funciones matematicas y expresiones

alert("6"/"2")

//convertir una variable cadena a numero

let str3 = "123";
alert(typeof str3);

let num = Number(str3);
alert(typeof num);

let age = Number("texto cualquiera");
alert(age);

//Boolean, si se tiene u valor 1 es true 0 es false, vacia es falso , string no vacio es verdadero

alert(Boolean(1));
alert(Boolean(0));
alert(Boolean(""));
alert(Boolean("a"));


//Salidas de JavaScript interno
//se usa con el objeto document, y el metodo getElementById(id).

