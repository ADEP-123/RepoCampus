//Desestructuracion:
const vector = [1, 2, 3];
const [a, b, c] = vector;
console.log(a);
console.log(b);
console.log(c);

const [d, ...e] = vector;
console.log(d);
console.log(e);

const perfil = [`Oluwatobi`, `Sofela`];

//Definir una funciuon con un arrelgo desestructurado conteniendo dos parametros:
function obtenerInfoUsuario([nombre, apellido]) {
  return `Mi nombre es ${nombre} ${apellido}`;
}
//Invocar la funcion
obtenerInfoUsuario(perfil);

const vector1 = [1, [2, 3], 4];
const [f, g, h] = vector1;
console.log(f);
console.log(g);
console.log(h);

const vector2 = [1, [2, 3], 4];
const [i, ...k] = vector2;
console.log(k);

const vector3 = [1, [2, 3], 4];
const [...l] = vector3;
console.log(l);

const vector4 = [1, [2, 3], 4, 5, 6, 7];
const [m, , n] = vector3;
console.log(m);
console.log(n);

let [saludo, , , nombre] = [`Hola`, `Yo`, `Soy`, `Sarah`];
console.log(saludo);
console.log(nombre);


//DOM:  Es un modelo que me permite navegar a travez de los estilos de un documento en general , permite que las paginas sean dinamicas 
