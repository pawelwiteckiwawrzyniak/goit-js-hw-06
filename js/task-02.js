const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

function addIngredient(ingredients) {
  ingredients.forEach((element) => {
    const listItem = document.createElement(`li`);
    listItem.textContent = element;
    listItem.classList.add(`item`);
    document.querySelector(`#ingredients`).append(listItem);
  });
}

addIngredient(ingredients);
