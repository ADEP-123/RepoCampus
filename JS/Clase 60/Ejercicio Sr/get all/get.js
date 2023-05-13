let url = "http://localhost:4001";
window.onload = (event) => {
  getAllFacturas();
  getAllPersonas();
  get1y3Facturas();
  get2PrimFact();
  getPag2Limi2();
  getAllValDesc();
  getAllPersApellDesc();
  getFact2a4OrdValDesc();
  getFactMayVal();
  getFactMenVal();
  getFactAntigRec();
  getPersSinM();
};
//Facturas
function getAllFacturas() {
  fetch(url + "/facturas")
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      buildTablaFacturas(data);
    })
    .catch((err) => {
      console.log("Error al consumir la API\n", err.message);
    })
    .finally(() => {
      console.log("Se ha consumido toda el API");
    });
}

function buildTablaFacturas(info) {
  let str = "";
  info.forEach((element) => {
    str += `<tr>
    <td>${element.id}</td>
    <td>${element.fecha}</td>
    <td>$${element.valor.toLocaleString("es")}</td>
    </tr>`;
  });

  document.getElementById("facturas").innerHTML = str;
}
//Personas
function getAllPersonas() {
  fetch(url + "/personas")
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      buildTablaPersonas(data);
    })
    .catch((err) => {
      console.log("Error al consumir la API\n", err.message);
    })
    .finally(() => {
      console.log("Se ha consumido toda el API");
    });
}

function buildTablaPersonas(info) {
  let str = "";
  info.forEach((element) => {
    str += `<tr>
    <td>${element.id}</td>
    <td>${element.nombre}</td>
    <td>${element.apellido}</td>
    </tr>`;
  });

  document.getElementById("personas").innerHTML = str;
}

//Facturas con id 1 y 3
function get1y3Facturas() {
  fetch(url + "/facturas?id=1&id=3")
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      buildTablaFacturas1y3(data);
    })
    .catch((err) => {
      console.log("Error al consumir la API\n", err.message);
    })
    .finally(() => {
      console.log("Se ha consumido toda el API");
    });
}

function buildTablaFacturas1y3(info) {
  let str = "";
  info.forEach((element) => {
    str += `<tr>
    <td>${element.id}</td>
    <td>${element.fecha}</td>
    <td>$${element.valor.toLocaleString("es")}</td>
    </tr>`;
  });

  document.getElementById("facturas1y3").innerHTML = str;
}

//Dos primeras facturas
function get2PrimFact() {
  fetch(url + "/facturas?_limit=2")
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      buildTablaDosPrimerasFacturas(data);
    })
    .catch((err) => {
      console.log("Error al consumir la API\n", err.message);
    })
    .finally(() => {
      console.log("Se ha consumido toda el API");
    });
}

function buildTablaDosPrimerasFacturas(info) {
  let str = "";
  info.forEach((element) => {
    str += `<tr>
    <td>${element.id}</td>
    <td>${element.fecha}</td>
    <td>$${element.valor.toLocaleString("es")}</td>
    </tr>`;
  });
  document.getElementById("dosPrimFact").innerHTML = str;
}

//Paginar de a dos pagina 2
function getPag2Limi2() {
  fetch(url + "/facturas?_page=2&_limit=2")
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      buildTablapg2Limi2(data);
    })
    .catch((err) => {
      console.log("Error al consumir la API\n", err.message);
    })
    .finally(() => {
      console.log("Se ha consumido toda el API");
    });
}

function buildTablapg2Limi2(info) {
  let str = "";
  info.forEach((element) => {
    str += `<tr>
    <td>${element.id}</td>
    <td>${element.fecha}</td>
    <td>$${element.valor.toLocaleString("es")}</td>
    </tr>`;
  });
  document.getElementById("pag2limi2").innerHTML = str;
}

//FACTURAS ORDENADAS DE FORMA DESCENDENTE POR VALOR
function getAllValDesc() {
  fetch(url + "/facturas?_sort=valor&_order=desc")
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      buildTablaAllValDesc(data);
    })
    .catch((err) => {
      console.log("Error al consumir la API\n", err.message);
    })
    .finally(() => {
      console.log("Se ha consumido toda el API");
    });
}

function buildTablaAllValDesc(info) {
  let str = "";
  info.forEach((element) => {
    str += `<tr>
    <td>${element.id}</td>
    <td>${element.fecha}</td>
    <td>$${element.valor.toLocaleString("es")}</td>
    </tr>`;
  });
  document.getElementById("valDesc").innerHTML = str;
}

//PERSONAS ORDENADAS DE FORMA DESCENDENTE POR APELLIDO
function getAllPersApellDesc() {
  fetch(url + "/personas?_sort=apellido&_order=desc")
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      buildTablaAllPersApellDesc(data);
    })
    .catch((err) => {
      console.log("Error al consumir la API\n", err.message);
    })
    .finally(() => {
      console.log("Se ha consumido toda el API");
    });
}

function buildTablaAllPersApellDesc(info) {
  let str = "";
  info.forEach((element) => {
    str += `<tr>
    <td>${element.id}</td>
    <td>${element.nombre}</td>
    <td>${element.apellido}</td>
    </tr>`;
  });

  document.getElementById("persApllDesc").innerHTML = str;
}

//FACTURAS DE LA 2 A LA 4 DE FORMA DESCENDENTE POR VALOR
function getFact2a4OrdValDesc() {
  fetch(url + "/facturas?_sort=valor&_order=desc&id_gte=2&id_lte=20")
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      buildTablaFact2a4OrdValDesc(data);
    })
    .catch((err) => {
      console.log("Error al consumir la API\n", err.message);
    })
    .finally(() => {
      console.log("Se ha consumido toda el API");
    });
}

function buildTablaFact2a4OrdValDesc(info) {
  let str = "";
  info.forEach((element) => {
    str += `<tr>
    <td>${element.id}</td>
    <td>${element.fecha}</td>
    <td>$${element.valor.toLocaleString("es")}</td>
    </tr>`;
  });
  document.getElementById("fact2a4ValDesc").innerHTML = str;
}

//FACTURA MAYOR VALOR
function getFactMayVal() {
  fetch(url + "/facturas?_sort=valor&_order=desc&_limit=1")
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      buildTablaFactMayVal(data);
    })
    .catch((err) => {
      console.log("Error al consumir la API\n", err.message);
    })
    .finally(() => {
      console.log("Se ha consumido toda el API");
    });
}

function buildTablaFactMayVal(info) {
  let str = "";
  info.forEach((element) => {
    str += `<tr>
    <td>${element.id}</td>
    <td>${element.fecha}</td>
    <td>$${element.valor.toLocaleString("es")}</td>
    </tr>`;
  });
  document.getElementById("factMAyVal").innerHTML = str;
}

//FACTURA MENOR VALOR
function getFactMenVal() {
  fetch(url + "/facturas?_sort=valor&_order=asc&_limit=1")
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      buildTablaFactMenVal(data);
    })
    .catch((err) => {
      console.log("Error al consumir la API\n", err.message);
    })
    .finally(() => {
      console.log("Se ha consumido toda el API");
    });
}

function buildTablaFactMenVal(info) {
  let str = "";
  info.forEach((element) => {
    str += `<tr>
    <td>${element.id}</td>
    <td>${element.fecha}</td>
    <td>$${element.valor.toLocaleString("es")}</td>
    </tr>`;
  });
  document.getElementById("factMenVal").innerHTML = str;
}

//FACTURA MENOR VALOR
function getFactAntigRec() {
  fetch(url + "/facturas?_sort=fecha&_order=desc")
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      buildTablaFactAntigRec(data);
    })
    .catch((err) => {
      console.log("Error al consumir la API\n", err.message);
    })
    .finally(() => {
      console.log("Se ha consumido toda el API");
    });
}

function buildTablaFactAntigRec(info) {
  let str = "";
  info.forEach((element) => {
    str += `<tr>
    <td>${element.id}</td>
    <td>${element.fecha}</td>
    <td>$${element.valor.toLocaleString("es")}</td>
    </tr>`;
  });
  document.getElementById("factFechDesc").innerHTML = str;
}

//NOMBRES SIN M
function getPersSinM() {
  fetch(url + "/personas?nombre_like=^[^M]")
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      buildTablaPersSinM(data);
    })
    .catch((err) => {
      console.log("Error al consumir la API\n", err.message);
    })
    .finally(() => {
      console.log("Se ha consumido toda el API");
    });
}

function buildTablaPersSinM(info) {
  let str = "";
  info.forEach((element) => {
    str += `<tr>
    <td>${element.id}</td>
    <td>${element.nombre}</td>
    <td>${element.apellido}</td>
    </tr>`;
  });

  document.getElementById("persSinM").innerHTML = str;
}
