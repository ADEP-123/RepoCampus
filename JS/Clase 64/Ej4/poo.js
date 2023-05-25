class Vehiculo {
  marca;
  modelo;
  velocidad;

  constructor({ marca = "China", modelo = "0", velocidad = 100 }) {
    this.marca = marca;
    this.modelo = modelo;
    this.velocidad = velocidad;
  }
  get getMarca() {
    return this.marca;
  }
  get getModelo() {
    return this.modelo;
  }
  get getVelocidad() {
    return this.velocidad;
  }
  acelerar() {
    this.velocidad += 10;
    return `La velocidad actual es de ${this.velocidad}`;
  }
  static convertirKmHEnMph(vel) {
    return vel / 1.60934;
  }
}

let veh1 = new Vehiculo({});
console.log(Vehiculo.convertirKmHEnMph(100));

class Coche extends Vehiculo {
  combustible;
  constructor({
    marca = "China",
    modelo = "0",
    velocidad = 100,
    combustible = 100,
  }) {
    super({ marca, modelo, velocidad });
    this.combustible = combustible;
  }
  get getCombustible() {
    return this.combustible;
  }
  acelerar() {
    this.velocidad += 20;
    return `La velocidad actual es de ${this.velocidad}`;
  }
}

//entradas de informacion en html

let cantVehiculos = [];
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
        <th colspan="4">VEHICULOS</th>
      </tr>
      <tr>
        <th colspan="2">MARCA</th>
        <th>MODELO</th>
        <th>VELOCIDAD</th>
      </tr>
      <tr>
        <td colspan="2">
          <input
            type="text"
            placeholder="Escriba la marca"
            id="marcaInput"
          />
        </td>
        <td>
          <input type="text" placeholder="Escriba el modelo" id="modeloInput" />
        </td>
        <td>
        <input type="text" placeholder="Escriba la velocidad" id="velocidadInput" />
      </td>
      </tr>
      <tr>
        <td colspan="4"><button id="start1">Ingresar</button></td>
      </tr>
      `;
      //Crear un nuevo vehiculo e insertar en tabla
      const start = document.getElementById("start1");
      start.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        let vehiculo1 = new Vehiculo({
          marca: document.getElementById("marcaInput").value,
          modelo: document.getElementById("modeloInput").value,
          velocidad: Number(document.getElementById("velocidadInput").value),
        });
        cantVehiculos.push(vehiculo1);

        document.getElementById("marcaInput").value = "";
        document.getElementById("modeloInput").value = "";
        document.getElementById("velocidadInput").value = "";
        let str = String(document.getElementById("res1").innerHTML);
        str =
          str +
          `
            <tr>
              <td><button id="A${
                cantVehiculos.length - 1
              }">Acelerar</button></td>
              <td><button id="CAL${
                cantVehiculos.length - 1
              }">Calcular millas/h</button></td>
              <td>VEHICULO</td>
              <td>${vehiculo1.getMarca}</td>
              <td>${vehiculo1.getModelo}</td>
              <td>${vehiculo1.getVelocidad}</td>
              <td>-</td>
              <td><input type="text" placeholder="Escriba la velocidad" id="conv${
                cantVehiculos.length - 1
              }" /></td>
            </tr>
          `;
        document.getElementById("res1").innerHTML = str;

        for (let i = 0; i < cantVehiculos.length; i++) {
          let acelerar = document.getElementById(`A${i}`);
          acelerar.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            document.getElementById("aquiSaludo").innerHTML = `${cantVehiculos[
              i
            ].acelerar()}`;
          });
          let convertir = document.getElementById(`CAL${i}`);
          convertir.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            let kmh = Number(document.getElementById(`conv${i}`).value);
            document.getElementById(
              "aquiSaludo"
            ).innerHTML = `La velocidad en millas por hora es ${Vehiculo.convertirKmHEnMph(
              kmh
            )}`;
          });
        }
      });
      break;

    case "2":
      document.getElementById("tipoIngreso").innerHTML = `
      <tr>
        <th colspan="4">COCHES</th>
      </tr>
      <tr>
        <th>MARCA</th>
        <th>MODELO</th>
        <th>VELOCIDAD</th>
        <th>COMBUSTIBLE</th>
      </tr>
      <tr>
        <td>
          <input
            type="text"
            placeholder="Escriba la marca"
            id="marcaInput"
          />
        </td>
        <td>
          <input type="text" placeholder="Escriba el modelo" id="modeloInput" />
        </td>
        <td>
        <input type="text" placeholder="Escriba la velocidad" id="velocidadInput" />
        </td>
        <td>
        <input type="text" placeholder="Escriba el combustible" id="combustibleInput" />
        </td>
      </tr>
      <tr>
        <td colspan="4"><button id="start2">Ingresar</button></td>
      </tr>
      `;
      //Crear un nuevo vehiculo e insertar en tabla
      const start2 = document.getElementById("start2");
      start2.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        let choche1 = new Coche({
          marca: document.getElementById("marcaInput").value,
          modelo: document.getElementById("modeloInput").value,
          velocidad: Number(document.getElementById("velocidadInput").value),
          combustible: document.getElementById("combustibleInput").value,
        });
        cantVehiculos.push(choche1);

        document.getElementById("marcaInput").value = "";
        document.getElementById("modeloInput").value = "";
        document.getElementById("velocidadInput").value = "";
        document.getElementById("combustibleInput").value = "";
        let str = String(document.getElementById("res1").innerHTML);
        str =
          str +
          `
            <tr>
              <td><button id="A${
                cantVehiculos.length - 1
              }">Acelerar</button></td>
              <td><button id="CAL${
                cantVehiculos.length - 1
              }">Calcular millas/h</button></td>
              <td>VEHICULO</td>
              <td>${choche1.getMarca}</td>
              <td>${choche1.getModelo}</td>
              <td>${choche1.getVelocidad}</td>
              <td>${choche1.getCombustible}</td>
              <td><input type="text" placeholder="Escriba la velocidad" id="conv${
                cantVehiculos.length - 1
              }" /></td>
            </tr>
          `;
        document.getElementById("res1").innerHTML = str;

        for (let i = 0; i < cantVehiculos.length; i++) {
          let acelerar = document.getElementById(`A${i}`);
          acelerar.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            document.getElementById("aquiSaludo").innerHTML = `${cantVehiculos[
              i
            ].acelerar()}`;
          });
          let convertir = document.getElementById(`CAL${i}`);
          convertir.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            let kmh = Number(document.getElementById(`conv${i}`).value);
            document.getElementById(
              "aquiSaludo"
            ).innerHTML = `La velocidad en millas por hora es ${Coche.convertirKmHEnMph(
              kmh
            )}`;
          });
        }
      });
      break;

    case "3":
      document.getElementById("tipoIngreso").innerHTML = `
      <tr>
      <th colspan="4">RECTANGULOS</th>
    </tr>
    <tr>
      <th>COLOR</th>
      <th>LARGO</th>
      <th>ANCHO</th>
    </tr>
    <tr>
      <td>
        <input
          type="text"
          placeholder="Escriba el color"
          id="colorInput"
        />
      </td>
      <td>
        <input type="text" placeholder="Escriba el largo" id="largoInput" />
      </td>
      <td>
      <input type="text" placeholder="Escriba el ancho" id="anchoInput" />
    </td>
    </tr>
    <tr>
      <td colspan="3"><button id="start3">Ingresar</button></td>
    </tr>
      `;
      //Crear nueva figura e insertar en tabla
      const start3 = document.getElementById("start3");
      start3.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        let rectangulo1 = new Rectangulo({
          color: document.getElementById("colorInput").value,
          largo: document.getElementById("largoInput").value,
          ancho: document.getElementById("anchoInput").value,
        });
        cantFiguras.push(rectangulo1);

        document.getElementById("colorInput").value = "";
        document.getElementById("largoInput").value = "";
        document.getElementById("anchoInput").value = "";
        let str = String(document.getElementById("res1").innerHTML);
        str =
          str +
          `
            <tr>
              <td><button id="A${
                cantFiguras.length - 1
              }">Calcular Area</button></td>
              <td>RECTANGULO</td>
              <td>${rectangulo1.getColor}</td>
              <td>-</td>
              <td>-</td>
              <td>${rectangulo1.getLargo}</td>
              <td>${rectangulo1.getAncho}</td>
            </tr>
          `;
        document.getElementById("res1").innerHTML = str;

        for (let i = 0; i < cantFiguras.length; i++) {
          let calcArea = document.getElementById(`A${i}`);
          calcArea.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            document.getElementById("aquiSaludo").innerHTML = `${cantFiguras[
              i
            ].calcularArea()}`;
          });
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
