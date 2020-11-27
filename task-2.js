const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingList = document.getElementById("ingredients");

const ingredientsItems = (el) => {
  const itemRef = document.createElement("li");
  itemRef.textContent = el;
  return itemRef;
};

const list = ingredients.map((item) => ingredientsItems(item));
ingList.append(...list);
