export default function buildTarjeta(pokemones, num) {
  const pok1 = document.getElementById("pok1");
  const pok2 = document.getElementById("pok2");
  const article = `
      <article>
          <div class="image-container">
            <img
              src= ${pokemones.sprites.front_default}
              alt="personaje Rick and Morty"
            />
          </div>
          <h2> NAME: ${pokemones.name}</h2>
      </article>`;
  if (num === 0) {
    pok1.innerHTML = article;
  } else pok2.innerHTML = article;
}
