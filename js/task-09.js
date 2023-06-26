const body = document.querySelector(`body`);
const btn = document.querySelector(`.change-color`);
const colorName = document.querySelector(`.color`);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

console.log(getRandomHexColor());

btn.addEventListener(`click`, () => {
  colorName.textContent = getRandomHexColor();
  body.style.backgroundColor = colorName.textContent;
});
