const counter = document.querySelector(`#value`);
let counterValue = 0;

const decrement = document.querySelector(`button[data-action="decrement"]`);
decrement.addEventListener("click", () => {
  counterValue -= 1;
  counter.innerHTML = counterValue;
});

const increment = document.querySelector(`button[data-action="increment"]`);
increment.addEventListener("click", () => {
  counterValue += 1;
  counter.innerHTML = counterValue;
});
