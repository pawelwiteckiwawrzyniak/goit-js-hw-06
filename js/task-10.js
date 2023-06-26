const boxes = document.querySelector(`#boxes`);
const createBtn = document.querySelector(`button[data-create]`);
const destroyBtn = document.querySelector(`button[data-destroy]`);
const input = document.querySelector(`#controls input`);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxList = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxList.push(box);
  }
  boxes.append(...boxList);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

createBtn.addEventListener("click", () => createBoxes(input.value));

destroyBtn.addEventListener("click", () => destroyBoxes());
