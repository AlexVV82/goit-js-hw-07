const addName = document.getElementById("name-input");
const newName = document.getElementById("name-output");

const templateName = newName.textContent;
addName.addEventListener("input", handelInput);
function handelInput(elm) {
  newName.textContent =
    elm.target.value !== "" ? elm.target.value : templateName;
}і
