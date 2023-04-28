    class ClaseAbstracta {
    constructor() {
        if (new.target === ClaseAbstracta) {
        throw new Error("No se puede crear una instancia de esta clase.");
        }
    }

    metodoNormal() {
        console.log("Ejecución del metodo normal");
    }
    metodoAbstracto(){
        throw new Error("El metodo no ha sido implementadto")
    }
    }
    class HijaAbstracta extends ClaseAbstracta {
        metodoAbstracto(){
            console.log("Ejecucion del metodo abstracto")
        }
    }

    let obj2 = new HijaAbstracta();
    obj2.metodoNormal();
    obj2.metodoAbstracto();


    //EXPRESIONES REGULARES:
    //Son patrones de busqueda para encontrar y manipular texto
