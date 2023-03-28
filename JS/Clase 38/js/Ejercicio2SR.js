function diasMes(mes){
    switch (mes.toLowerCase()){
      case "enero":
        console.log(`El mes ${mes} tiene 31 días`)
        break;
      case "febrero":
        console.log(`El mes ${mes} tiene 28 días`)
        break;    
      case "marzo":
        console.log(`El mes ${mes} tiene 31 días`)
        break;
      case "abril":
        console.log(`El mes ${mes} tiene 30 días`)
        break;     
      case "mayo":
        console.log(`El mes ${mes} tiene 31 días`)
        break;
      case "junio":
        console.log(`El mes ${mes} tiene 30 días`)
        break;      
      case "julio":
        console.log(`El mes ${mes} tiene 31 días`)
        break;
      case "agosto":
        console.log(`El mes ${mes} tiene 31 días`)
        break;
      case "septiembre":
        console.log(`El mes ${mes} tiene 30 días`)
        break;    
      case "octubre":
        console.log(`El mes ${mes} tiene 31 días`)
        break;
      case "noviembre":
        console.log(`El mes ${mes} tiene 30 días`)
        break;      
      case "diciembre":
        console.log(`El mes ${mes} tiene 31 días`)
        break;
      default:
        console.log(`La palabra ${mes} no es un mes del año`);
    }
  }
  let mes = String(prompt("Ingrese el mes del año del cual quiere saber los dias: "))
  diasMes(mes);