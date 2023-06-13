const categories = document.querySelectorAll(`li.item`);
console.log(`Number of categories: `, categories.length);

function namesOfCategories() {
  categories.forEach((element) => {
    console.log(`Category: `, element.firstElementChild.textContent);
    console.log(`Elements: `, element.lastElementChild.children.length);
  });
}

namesOfCategories();
