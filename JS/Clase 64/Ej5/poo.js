class Empleado {
  nombre;
  edad;
  sueldo;
  static id = 0;

  constructor({ nombre = "N.N", edad = "0", sueldo = 0 }) {
    this.nombre = nombre;
    this.edad = edad;
    this.sueldo = sueldo;
  }
  get getNombre() {
    return this.nombre;
  }
  get getEdad() {
    return this.edad;
  }
  get getSueldo() {
    return this.sueldo;
  }
  calcularSalarioAnual() {
    return `El salario anual de ${this.nombre} es $${(this.sueldo * 12).toLocaleString("es")}`;
  }
  static generarIdEmpleado(){
    this.id += 1;
    return `E${this.id}`
  }
}
class Gerente extends Empleado {
  departamento;
  constructor({ nombre = "N.N", edad = "0", sueldo = 0 , departamento = "Ninguno"}) {
    super({ nombre, edad, sueldo});
    this.departamento = departamento;
  }
  get getDepartamento() {
    return this.departamento;
  }
  calcularSalarioAnual() {
    return `El salario anual de ${this.nombre} es $${((this.sueldo*1.1) * 12).toLocaleString("es")}`;
  }
}

//entradas de informacion en html

let cantEmpleados = [];
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
        <th colspan="4">EMPLEADO</th>
      </tr>
      <tr>
        <th colspan="2">NOMBRE</th>
        <th>EDAD</th>
        <th>SUELDO</th>
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
        <input type="text" placeholder="Escriba el sueldo mensual" id="sueldoInput" />
      </td>
      </tr>
      <tr>
        <td colspan="4"><button id="start1">Ingresar</button></td>
      </tr>
      `;
      //Crear un nuevo empleado e insertar en tabla
      const start = document.getElementById("start1");
      start.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        let empleado1 = new Empleado({
          nombre: document.getElementById("nombreInput").value,
          edad: document.getElementById("edadInput").value,
          sueldo: Number(document.getElementById("sueldoInput").value),
        });
        cantEmpleados.push(empleado1);

        document.getElementById("nombreInput").value = "";
        document.getElementById("edadInput").value = "";
        document.getElementById("sueldoInput").value = "";
        let str = String(document.getElementById("res1").innerHTML);
        str =
          str +
          `
            <tr>
              <td><button id="SA${
                cantEmpleados.length - 1
              }">Calcular Salario Anual</button></td>
              <td>EMPLEADO</td>
              <td>${Empleado.generarIdEmpleado()}</td>
              <td>${empleado1.getNombre}</td>
              <td>${empleado1.getEdad}</td>
              <td>$${(empleado1.getSueldo).toLocaleString("es")}</td>
              <td>-</td>
            </tr>
          `;
        document.getElementById("res1").innerHTML = str;

        for (let i = 0; i < cantEmpleados.length; i++) {
          let salAnual = document.getElementById(`SA${i}`);
          salAnual.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            document.getElementById("aquiSueldo").innerHTML = `${empleado1.calcularSalarioAnual()}`;
          });
        }
      });
      break;

    case "2":
      document.getElementById("tipoIngreso").innerHTML = `
      <tr>
        <th colspan="4">EMPLEADO</th>
      </tr>
      <tr>
        <th>NOMBRE</th>
        <th>EDAD</th>
        <th>SUELDO</th>
        <th>DEPARTAMENTO</th>
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
        <input type="text" placeholder="Escriba el sueldo mensual" id="sueldoInput" />
        </td>
        <td>
        <input type="text" placeholder="Escriba el departamento" id="departamentoInput" />
        </td>
      </tr>
      <tr>
        <td colspan="4"><button id="start2">Ingresar</button></td>
      </tr>
      `;
      //Crear un nuevo Gerente e insertar en tabla
      const start2 = document.getElementById("start2");
      start2.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        let gerente1 = new Gerente({
          nombre: document.getElementById("nombreInput").value,
          edad: document.getElementById("edadInput").value,
          sueldo: Number(document.getElementById("sueldoInput").value),
          departamento: document.getElementById("departamentoInput").value,
        });
        cantEmpleados.push(gerente1);

        document.getElementById("nombreInput").value = "";
        document.getElementById("edadInput").value = "";
        document.getElementById("sueldoInput").value = "";
        document.getElementById("departamentoInput").value = "";
        let str = String(document.getElementById("res1").innerHTML);
        str =
          str +
          `
            <tr>
              <td><button id="SA${
                cantEmpleados.length - 1
              }">Calcular Salario Anual</button></td>
              <td>GERENTE</td>
              <td>${Empleado.generarIdEmpleado()}</td>
              <td>${gerente1.getNombre}</td>
              <td>${gerente1.getEdad}</td>
              <td>$${(gerente1.getSueldo).toLocaleString("es")}</td>
              <td>${gerente1.getDepartamento}</td>
            </tr>
          `;
        document.getElementById("res1").innerHTML = str;

        for (let i = 0; i < cantEmpleados.length; i++) {
          let salAnual = document.getElementById(`SA${i}`);
          salAnual.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            document.getElementById("aquiSueldo").innerHTML = `${gerente1.calcularSalarioAnual()}`;
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
