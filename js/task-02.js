const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector(`#ingredients`);

function addIngredient(ingredients) {
  const list = [];
  ingredients.forEach((element) => {
    const listItem = document.createElement(`li`);
    listItem.textContent = element;
    listItem.classList.add(`item`);
    list.push(listItem);
  });
  ingredientsList.append(...list);
}

addIngredient(ingredients);
