//
//1. npm i -g json-server
//2. npm init enter a todoooo luego yes
//3. json-server --watch db.json
//4. en el package cambiar "script" por "server": "json-server -w db.json -p 4001"
//5. npm run server
//abrir api en nav http://localhost:4001

class Persona {
  #cedula;
  #nombre;
  #carro;
  constructor(cedula, nombre, carro) {
    this.#cedula = cedula;
    this.#nombre = nombre;
    this.#carro = carro;
  }

  get Cedula() {
    return this.#cedula;
  }
  set Cedula(newCedula) {
    this.#cedula = newCedula;
  }
  get Nombre() {
    return this.#nombre;
  }
  set Nombre(newNombre) {
    this.#nombre = newNombre;
  }
  get Carro() {
    return this.#carro;
  }
  set Cedula(newCarro) {
    this.#carro = newCarro;
  }
}

function AgregarPersona(a, b, c) {
  const persona = new Persona(a, b, c);
  fetch("http://localhost:4001/persona/", {
    method: "POST",
    body: JSON.stringify({
      id: persona.Cedula,
      nombre: persona.Nombre,
      carro: persona.Carro,
    }),
    headers: {
      "Content-type": "application/json",
    },
  }).then((res) => console.log(res));
}
