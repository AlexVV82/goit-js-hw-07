const categoriesList = document.querySelector('#categories');
console.log(`В списке ${categoriesList.children.length} категории`);

const categoriesListItemArray = [...categoriesList.children];

categoriesListItemArray.forEach(element => {
  console.log(
    `Категория: ${
      element.querySelector('h2').textContent
    }\nКоличество элементов: ${element.querySelectorAll('li').length}`,
  );
});