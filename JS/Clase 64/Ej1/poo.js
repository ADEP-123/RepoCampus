class Persona {
  nombre;
  edad;
  sexo;
  constructor({ nombre = "N.N", edad = "0", sexo = "indefinido" }) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
  }
  get getNombre() {
    return this.nombre;
  }
  get getEdad() {
    return this.edad;
  }
  get getsexo() {
    return this.sexo;
  }
  saludar() {
    return `Hola ${this.nombre}`;
  }
  static esMayorDeEdad(edad){
    let is = false
    if(edad>=18){
      is = true
    }
    return is
  }
}



class Estudiante extends Persona {
  carrera;
  constructor({
    nombre = "N.N",
    edad = "0",
    sexo = "indefinido",
    carrera = "Ninguna",
  }) {
    super({});
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.carrera = carrera;
  }
  get getCarrera() {
    return this.carrera;
  }
  estudiar() {
    return `${this.nombre} está estudiando ${this.carrera}`;
  }
}


//entradas de informacion en html

let cantPersonas = [];
//Seleccionar tipo de entrada
let selector = document.getElementById("tipoTabla");
selector.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();

  console.log(selector.value);
  switch (selector.value) {
    case "1":
      document.getElementById("tipoIngreso").innerHTML = `
      <tr>
        <th colspan="4">PERSONAS</th>
      </tr>
      <tr>
        <th colspan="2" >Nombre</th>
        <th>Edad</th>
        <th>Sexo</th>
      </tr>
      <tr>
        <td colspan="2">
          <input
            type="text"
            placeholder="Escriba el nombre"
            id="nombreInput"
          />
        </td>
        <td>
          <input type="text" placeholder="Escriba la edad" id="edadInput" />
        </td>
        <td>
          <input type="text" placeholder="Escriba el sexo" id="sexoInput" />
        </td>
      </tr>
      <tr>
        <td colspan="4"><button id="start1">Ingresar</button></td>
      </tr>
      `;
      //Crear nueva persona e insertar en tabla
      const start = document.getElementById("start1");
      start.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        let persona1 = new Persona({
          nombre: document.getElementById("nombreInput").value,
          edad: document.getElementById("edadInput").value,
          sexo: document.getElementById("sexoInput").value,
        });
        cantPersonas.push(persona1);

        document.getElementById("nombreInput").value = "";
        document.getElementById("edadInput").value = "";
        document.getElementById("sexoInput").value = "";
        let str = String(document.getElementById("res1").innerHTML);
        str =
          str +
          `
            <tr>
              <td></td>
              <td><button id="S${cantPersonas.length - 1}">Saludar</button></td>
              <td>Persona</td>
              <td>${persona1.getNombre}</td>
              <td>${persona1.getEdad}</td>
              <td>${persona1.getsexo}</td>
              <td></td>
              <td>${Persona.esMayorDeEdad(persona1.getEdad)}</td>
            </tr>
          `;
        document.getElementById("res1").innerHTML = str;

        for (let i = 0; i < cantPersonas.length; i++) {
          let saludar = document.getElementById(`S${i}`);
          saludar.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            document.getElementById("aquiSaludo").innerHTML = `
      Hola ${cantPersonas[i].getNombre}`;
          });
        }
      });
      break;

    case "2":
      document.getElementById("tipoIngreso").innerHTML = `
        <tr>
          <th colspan="4">ESTUDIANTES</th>
        </tr>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Sexo</th>
          <th>Carrera</th>
        </tr>
        <tr>
          <td>
            <input
              type="text"
              placeholder="Escriba el nombre"
              id="nombreInput"
            />
          </td>
          <td>
            <input type="text" placeholder="Escriba la edad" id="edadInput" />
          </td>
          <td>
            <input type="text" placeholder="Escriba el sexo" id="sexoInput" />
          </td>
          <td>
          <input type="text" placeholder="Escriba la carrera que cursa" id="carreraInput" />
        </td>
        </tr>
        <tr>
          <td colspan="4"><button id="start2">Ingresar</button></td>
        </tr>
      `;
      //Crear un nuevo estudiante e insertar en tabla
      const start2 = document.getElementById("start2");
      start2.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        let estudiante1 = new Estudiante({
          nombre: document.getElementById("nombreInput").value,
          edad: document.getElementById("edadInput").value,
          sexo: document.getElementById("sexoInput").value,
          carrera: document.getElementById("carreraInput").value,
        });
        cantPersonas.push(estudiante1);

        document.getElementById("nombreInput").value = "";
        document.getElementById("edadInput").value = "";
        document.getElementById("sexoInput").value = "";
        document.getElementById("carreraInput").value = "";
        let str = String(document.getElementById("res1").innerHTML);
        str =
          str +
          `
        <tr>
          <td><button id="E${cantPersonas.length - 1}">Estudiar</button></td>
          <td><button id="S${cantPersonas.length - 1}">Saludar</button></td>
          <td>Estudiante</td>
          <td>${estudiante1.getNombre}</td>
          <td>${estudiante1.getEdad}</td>
          <td>${estudiante1.getsexo}</td>
          <td>${estudiante1.getCarrera}</td>
          <td>${Persona.esMayorDeEdad(estudiante1.getEdad)}</td>
        </tr>
      `;
        document.getElementById("res1").innerHTML = str;

        for (let i = 0; i < cantPersonas.length; i++) {
          let saludar = document.getElementById(`S${i}`);
          saludar.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            document.getElementById("aquiSaludo").innerHTML = `${cantPersonas[i].saludar()}`;
          });
          let estudiar = document.getElementById(`E${i}`);
          if(estudiar != null){
            estudiar.addEventListener("click", e=>{
              e.preventDefault() ; e.stopPropagation();
              document.getElementById("aquiSaludo").innerHTML = `${cantPersonas[i].estudiar()}`;
            });
          }
        }
      });

      break;

    case "":
      document.getElementById("tipoIngreso").innerHTML = ``;

      break;
  }
  if (selector.value === "1") {
  }
});
