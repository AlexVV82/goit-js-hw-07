const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"];

const listEl = document.querySelector("#ingredients");
//через ф-цию
const makeListItems = (ingredients) => {
  return ingredients.map((ingredient) => {
    const listItemEl = document.createElement("li");
    listItemEl.textContent = ingredient;
    return listItemEl;
  });
};

const items = makeListItems(ingredients);
listEl.append(...items);
