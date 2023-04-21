//Ahora
const ahora = new Date();
// Tue Apr 18 2023 23:43:08 GMT-0500

//Una fecha especifica
//Los meses empiezan desde 0
const randomdate = new Date(2015, 3, 12, 6, 25, 58);
//Sun Apr 12 2015 06:25:58 GMT-0500

// Una fecha especifica a media noche
const win95 = new Date(1995, 7, 27);
//Sun Aug 27 1995 00:00:00 GMT-0500

const ahora1 = new Date();
ahora1.setFullYear(2014);
ahora1.setMonth(3);
ahora1.setDate(4);

console.log(ahora);

console.log(ahora1.getMonth());
console.log(ahora1.getTime());
console.log(ahora1.getDay());
console.log(ahora1.getFullYear());
console.log(ahora1.getHours());
console.log(ahora1.getMinutes());
console.log(ahora1.getSeconds());
