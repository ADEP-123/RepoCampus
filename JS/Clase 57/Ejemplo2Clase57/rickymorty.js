function buildTarjeta(personajes) {
  const main = document.querySelector("main");
  personajes.results.forEach((element) => {
    console.log(element);
    const article = document.createRange().createContextualFragment(`
    <article>
        <div class="image-container">
          <img
            src=${element.image}
            alt="personaje Rick and Morty"
          />
        </div>
        <h2>${element.name}</h2>
        <span>${element.status}</span>
    </article>`);
    main.append(article);
  });
}
function getCharacters() {
  fetch("https://rickandmortyapi.com/api/character")
    .then((result) => result.json())
    .then((data) => {
      //console.log(data);
      buildTarjeta(data);
    })
    .catch((err) => {
      console.log("Error al consumir la API\n", err.message)
    })
    .finally(()=>{
      console.log("Se ha consumido toda el API")
    })
}
getCharacters();
