function factorial(num){
    let fact = 1;
    for (let i = 0; i < num ; i++){
      fact *= (num-i);
    }
    console.log(`El factorial de ${num} es ${fact}`);
  }
  let num = Number(prompt(`Ingrese el numero al que quiere hallar su factorial`));
  factorial(num);