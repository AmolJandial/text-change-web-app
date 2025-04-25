const containerEl = document.querySelector(".container");

const fields = ["Web Developer", "Flutter Developer", "React Developer"];

let index = 0;
let characterIndex = 0;

createElement();

function createElement() {
  characterIndex++;
  containerEl.innerHTML = `
<h1>I am a ${fields[index].slice(0, characterIndex)}</h1>
`;
  if (characterIndex == fields[index].length) {
    characterIndex = 0;
    index++;
  }
  if (index == fields.length) {
    index = 0;
  }

  setTimeout(createElement, 400);
}
