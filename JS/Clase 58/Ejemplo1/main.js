import getCharacters from "./getCharacters.js";

let start = document.getElementById("start");
start.addEventListener("click", (e) => {
  getCharacters();

  e.stopPropagation();
  e.preventDefault();
});
getCharacters();
