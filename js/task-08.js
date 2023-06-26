const form = document.querySelector(`.login-form`);
const inputEmail = document.querySelector(`[name="email"]`);
const inputPass = document.querySelector(`[name="password"]`);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  const user = {
    email: email.value,
    password: password.value,
  };

  console.log(user);
  event.currentTarget.reset();
});
