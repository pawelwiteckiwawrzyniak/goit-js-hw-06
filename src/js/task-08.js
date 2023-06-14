const form = document.querySelector(`.login-form`);
const btn = document.querySelector(`.login-form button`);

btn.addEventListener(`click`, (event) => {
  event.preventDefault();
});

console.log(form);
console.log(btn);
