class Animal {
  nombre;
  edad;
  constructor({ nombre = "N.N", edad = "0" }) {
    this.nombre = nombre;
    this.edad = edad;
  }
  get getNombre() {
    return this.nombre;
  }
  get getEdad() {
    return this.edad;
  }
  hacerSonido(p1) {
    return `${this.nombre} hace ${p1}`;
  }
  static esMayorDeEdad(edad) {
    let is = false;
    if (edad >= 18) {
      is = true;
    }
    return is;
  }
}

class Perro extends Animal {
  raza;
  constructor({ nombre = "N.N", edad = "0", raza = "Crioca" }) {
    super({});
    this.nombre = nombre;
    this.edad = edad;
    this.raza = raza;
  }
  get getRaza() {
    return this.raza;
  }
  moverCola() {
    return `${this.nombre} movio la cola`;
  }
}

//entradas de informacion en html

let cantAnimales = [];
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
        <th colspan="3">ANIMALES</th>
      </tr>
      <tr>
        <th colspan="2">Nombre</th>
        <th>Edad</th>
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
      </tr>
      <tr>
        <td colspan="3"><button id="start1">Ingresar</button></td>
      </tr>
      `;
      //Crear nuevo animal e insertar en tabla
      const start = document.getElementById("start1");
      start.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        let animal1 = new Animal({
          nombre: document.getElementById("nombreInput").value,
          edad: document.getElementById("edadInput").value,
        });
        cantAnimales.push(animal1);

        document.getElementById("nombreInput").value = "";
        document.getElementById("edadInput").value = "";
        let str = String(document.getElementById("res1").innerHTML);
        str =
          str +
          `
            <tr>
              <td colspan="2"><button id="S${
                cantAnimales.length - 1
              }">Hacer Sonido</button></td>
              <td>Animal</td>
              <td>${animal1.getNombre}</td>
              <td>${animal1.getEdad}</td>
              <td>-</td>
              <td><input type="text" placeholder="Escriba el sonido" id="animSon${
                cantAnimales.length - 1
              }"/></td>
            </tr>
          `;
        document.getElementById("res1").innerHTML = str;

        for (let i = 0; i < cantAnimales.length; i++) {
          let hacSonido = document.getElementById(`S${i}`);
          hacSonido.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            document.getElementById("aquiSaludo").innerHTML = `${cantAnimales[
              i
            ].hacerSonido(document.getElementById(`animSon${i}`).value)}`;
          });
        }
      });
      break;

    case "2":
      document.getElementById("tipoIngreso").innerHTML = `
        <tr>
          <th colspan="3">PERROS</th>
        </tr>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Raza</th>
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
            <input type="text" placeholder="Escriba la raza" id="razaInput" />
          </td>
        </tr>
        <tr>
          <td colspan="3"><button id="start2">Ingresar</button></td>
        </tr>
      `;
      //Crear un nuevo perro e insertar en tabla
      const start2 = document.getElementById("start2");
      start2.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        let perro1 = new Perro({
          nombre: document.getElementById("nombreInput").value,
          edad: document.getElementById("edadInput").value,
          raza: document.getElementById("razaInput").value,
        });
        cantAnimales.push(perro1);

        document.getElementById("nombreInput").value = "";
        document.getElementById("edadInput").value = "";
        document.getElementById("razaInput").value = "";
        let str = String(document.getElementById("res1").innerHTML);
        str =
          str +
          `
        <tr>
          <td><button id="P${
            cantAnimales.length - 1
          }">Mover La Cola</button></td>
          <td><button id="S${
            cantAnimales.length - 1
          }">Hacer Sonido</button></td>
          <td>Perro</td>
          <td>${perro1.getNombre}</td>
          <td>${perro1.getEdad}</td>
          <td>${perro1.getRaza}</td>
          <td><input type="text" placeholder="Escriba el sonido" id="animSon${
            cantAnimales.length - 1
          }"/ value="wof" disabled></td>
        </tr>
      `;
        document.getElementById("res1").innerHTML = str;

        for (let i = 0; i < cantAnimales.length; i++) {
          let hacSonido = document.getElementById(`S${i}`);
          hacSonido.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            document.getElementById("aquiSaludo").innerHTML = `${cantAnimales[
              i
            ].hacerSonido(document.getElementById(`animSon${i}`).value)}`;
          });
          let moverCola = document.getElementById(`P${i}`);
          if (moverCola != null) {
            moverCola.addEventListener("click", (e) => {
              e.preventDefault();
              e.stopPropagation();
              document.getElementById("aquiSaludo").innerHTML = `${cantAnimales[
                i
              ].moverCola()}`;
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
