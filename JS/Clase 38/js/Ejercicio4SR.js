function detstring (str){
    let contmay = 0;
    let contmin = 0;
    for (let i = 0; i < str.length; i++){
      if (str.charAt(i).toLowerCase() === str.charAt(i)){
          contmin += 1;
      } else {
          contmay += 1; 
      }
    }
    if (contmay === 0 && contmin != 0){
          console.log(`El texto esta compuesto unicamente por minusculas`)
      } else if (contmin === 0 && contmay != 0){
          console.log(`El texto esta compuesto unicamente por mayusculas`)
      } else {
          console.log(`El texto esta compuesto por mayusculas y minusculas`)
      }
  }
  let str = String(prompt(`Ingrese el string a verificar: `))
  detstring(str)