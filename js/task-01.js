const categories = document.querySelectorAll(`li.item`);
console.log(`Number of categories: `, categories.length);

function namesOfCategories() {
  categories.forEach((element) => {
    const category = element.querySelector(`h2`);
    const elements = element.querySelectorAll(`li`);

    console.log(`Category: `, category.textContent);
    console.log(`Elements: `, elements.length);
  });
}

namesOfCategories();
