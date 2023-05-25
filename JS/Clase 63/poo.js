class Persona {
  ojos;
  #nombre;
  costrunctor(ojos, nombre) {
    this.ojos = ojos;
    this.#nombre = nombre;
  }
  set setOjos(ojos) {
    return (this.ojos = ojos);
  }
  get getOjos() {
    return this.ojos;
  }
  set setNombre(nombre) {
    this.#nombre = nombre;
  }
  get getNombre() {
    return this.#nombre;
  }
  saludar() {
    return `Hola, mi nombre es ${this.#nombre} y mi color de ojos es ${
      this.ojos
    }`;
  }
}
/**
 * *La palabra reservada Lapiz es la clase padre de mi plantilla
 */
class Lapiz {
  color;
  tamaño;
  #material;
  #mina;
  /**
   *
   * @param {color} *el parametro color es el color que tendra el lapiz
   * @param {tamaño} *el parametro tamaño es el tamaño del lapiz
   * @param {material} *el parametro material es el material del cual esta hecho el lapiz
   * @param {mina} *el parametro mina es el material del cual esta hecha la mina
   * @param {constructor} *el constructor es el encargado de asignar los valores (si es que asi se desea) a los atributos de el objeto
   */
  constructor({
    color = "Amarillo",
    tamaño = "9cm",
    material = "Madera",
    mina = "Carbon",
  }) {
    /**
     * @param this *Es la palabra reservada que sirve para referirse a los atributos asignados a la clase
     */
    this.color = color;
    this.tamaño = tamaño;
    this.#material = material;
    this.#mina = mina;
  }
  /**
   * @param {get} *obtiene el valor de la caracteristica
   * @param {set} *modifica el valor de la caracteristica
   */
  get getMina() {
    return this.#mina;
  }
  set setMina(p1) {
    this.#mina = p1;
  }
  /**
   *
   * @param {static} *Los metodos estaticos pueden ser llamados directamente desde la clase, no necesitan de una instancia
   * @returns
   */
  static afilar(p1) {
    return `la mina de ${p1} ha sido afilada`;
  }
}
/**
 * @param {extends} *sive para traer las caracteristicas y los metodos de la clase padre
 * *Observe que en el constructor  se coloca {} para que se puede cambiar la propiedad del padre
 */
class LapizMecanico extends Lapiz {
  constructor({ mina = "Metalica" }) {
    super({ mina });
  }
  /**
   * El polimorfismo no es del todo bien definido en js pero se puede simular llamando el mismo metodo y cambiandolo en el hijo 
   */
  static afilar(p1){
    return `La mina es de ${p1} por lo tanto no se puede afilar`
  }
}
let mecanico = new LapizMecanico({});
mecanico.setMina = "Aluminio";
console.log(LapizMecanico.afilar(mecanico.getMina));
/**
 * ({atributo=valor}) sirve para al crear el objeto con la clase decirle que atributos llenas y con que para no repetir el undefined
 */
let lapiz1 = new Lapiz({ color: "Azul", mina: "Grafito" });

lapiz1.setMina = "tinta";

let lapiz2 = new Lapiz({ tamaño: "Azul" });

console.log(Lapiz.afilar(lapiz1.getMina));
console.log(lapiz1);

/**Separadores y destructores */
let [a, b] = ["Emily", "Andres"];
console.log(a, b);
/**separador */
console.log(["a", "b", "c"]);
console.log(...["a", "b", "c"]);
/**destructor */
function saludar(...arg) {
  return `Hola ${arg[0]} ${arg[1]}`;
}
console.log(saludar(...["Emily", "Nieves"]));
