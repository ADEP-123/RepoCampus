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
  constructor(color="Amarillo", tamaño="9cm", material="madera", mina) {
    /**
     * @param this *Es la palabra reservada que sirve para referirse a los atributos asignados a la clase
     */
    this.color = color;
    this.tamaño = tamaño;
    this.#material = material;
    this.#mina = mina;
  }
}
/**
 * ({atributo=valor}) sirve para al crear el objeto con la clase decirle que atributos llenas y con que para no repetir el undefined
 */
let lapiz1 = new Lapiz({color:"azul"});
/** */
console.log(lapiz1)