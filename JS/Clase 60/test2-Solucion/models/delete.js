export function delet(url) {
  fetch(url, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        console.log("El recurso ha sio eliminado exitosamente.");
      } else {
        console.log("No se pudo eliminar el recurso.");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
