class Figura {
  color;
  area;
  constructor({ color = "Negro", area = "0" }) {
    this.color = color;
    this.area = area;
  }
  get getColor() {
    return this.color;
  }
  get getArea() {
    return this.area;
  }
  calcularArea() {
    return `La figura tiene ${this.area} de area`;
  }
}

class Circulo extends Figura {
  radio;
  constructor({ color = "Negro", radio = "0" }) {
    super({color});
    this.radio = radio;
  }
  get getRadio() {
    return this.radio;
  }
  calcularArea() {
    return `El ciruclo tiene ${Math.PI * this.radio ** 2} de area`;
  }
}

class Rectangulo extends Figura {
  largo;
  ancho;
  constructor({ color = "Negro", largo = "0", ancho = "0" }) {
    super({color});
    this.largo = largo;
    this.ancho = ancho;
  }
  get getLargo() {
    return this.largo;
  }
  get getAncho() {
    return this.ancho;
  }
  calcularArea() {
    return `El rectangulo tiene ${this.largo * this.ancho} de area`;
  }
}

//entradas de informacion en html

let cantFiguras = [];
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
        <th colspan="4">FIGURAS</th>
      </tr>
      <tr>
        <th colspan="2">COLOR</th>
        <th>AREA</th>
      </tr>
      <tr>
        <td colspan="2">
          <input
            type="text"
            placeholder="Escriba el color"
            id="colorInput"
          />
        </td>
        <td>
          <input type="text" placeholder="Escriba el area" id="areaInput" />
        </td>
      </tr>
      <tr>
        <td colspan="3"><button id="start1">Ingresar</button></td>
      </tr>
      `;
      //Crear nueva figura e insertar en tabla
      const start = document.getElementById("start1");
      start.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        let figura1 = new Figura({
          color: document.getElementById("colorInput").value,
          area: document.getElementById("areaInput").value,
        });
        cantFiguras.push(figura1);

        document.getElementById("colorInput").value = "";
        document.getElementById("areaInput").value = "";
        let str = String(document.getElementById("res1").innerHTML);
        str =
          str +
          `
            <tr>
              <td><button id="A${
                cantFiguras.length - 1
              }">Calcular Area</button></td>
              <td>FIGURA</td>
              <td>${figura1.getColor}</td>
              <td>${figura1.getArea}</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
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

    case "2":
      document.getElementById("tipoIngreso").innerHTML = `
      <tr>
      <th colspan="4">CIRCULOS</th>
    </tr>
    <tr>
      <th colspan="2">COLOR</th>
      <th>RADIO</th>
    </tr>
    <tr>
      <td colspan="2">
        <input
          type="text"
          placeholder="Escriba el color"
          id="colorInput"
        />
      </td>
      <td>
        <input type="text" placeholder="Escriba el radio" id="radioInput" />
      </td>
    </tr>
    <tr>
      <td colspan="3"><button id="start2">Ingresar</button></td>
    </tr>
      `;
      //Crear nueva figura e insertar en tabla
      const start2 = document.getElementById("start2");
      start2.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        let circulo1 = new Circulo({
          color: document.getElementById("colorInput").value,
          radio: document.getElementById("radioInput").value,
        });
        cantFiguras.push(circulo1);

        document.getElementById("colorInput").value = "";
        document.getElementById("radioInput").value = "";
        let str = String(document.getElementById("res1").innerHTML);
        str =
          str +
          `
            <tr>
              <td><button id="A${
                cantFiguras.length - 1
              }">Calcular Area</button></td>
              <td>CIRCULO</td>
              <td>${circulo1.getColor}</td>
              <td>-</td>
              <td>${circulo1.getRadio}</td>
              <td>-</td>
              <td>-</td>
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
