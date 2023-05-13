export function llenarFormulario(formu, datos) {
  if (datos !== undefined) {
    console.table(datos);
    for (let key in datos) {
      const campo = formu.elements[key];
      if (campo) {
        campo.value = datos[key];
      }
    }
  } else {
    alert("No se encontró ningun registro con ese id");
  }
}
