//Storage: sirve para guardar datos en el navegador
//localStorage: propiedad del objeto Storage, tiene la funcion de almacenar de manera local hasta que se decida limpiar los datos del navegador
//metodos del localStorage setIgem(clave,valor)- almacenar clave/valor
//getItem(clave)-obtener el valor

if (typeof(Storage) !== 'undefined'){
    //Codigo cuando storage es compatible
}else {
    //codigo cuando storage no es compatible
}

//formas de guardar datos:
//Tipo mapa
localStorage.setItem('Nombre', 'Miguel Antonio')

//tipo objeto
localStorage.Apellido = 'Márquez Montoya'

//formas para recuperar datos
//tipo mapa
let Apellido = localStorage.getItem("Apellido");

//tipo objeto
let nombre = localStorage.Nombre;

//Eliminar datos
localStorage.removeItem('Nombre')
//sessionStorage: los datos sobreviven un refuerzo de la pagina pero no cerrar y abrir una pestaña, solo existe dento de la pasteaña actual del navegador
