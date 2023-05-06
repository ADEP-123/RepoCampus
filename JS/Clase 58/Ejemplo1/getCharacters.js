import buildTarjeta from "./buildtarjeta.js";
export default function getCharacters() {
  let num2 = 0;
  let num1 = Math.floor(Math.random() * 150);
  do {
    num2 = Math.floor(Math.random() * 150);
  } while (num1 === num2);
  let vnums = [num1, num2];
  console.log(vnums);
  for (let i = 0; i < vnums.length; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${vnums[i]}/`)
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        buildTarjeta(data, i);
      })
      .catch((err) => {
        console.log("Error al consumir la API\n", err.message);
      })
      .finally(() => {
        console.log("Se ha consumido toda el API");
      });
  }
}
