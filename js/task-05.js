const inputArea = document.querySelector(`#name-input`);
const outputArea = document.querySelector(`#name-output`);

inputArea.addEventListener(`input`, () => {
  if (inputArea.value == "") {
    outputArea.textContent = "Anonymous";
    return;
  }
  outputArea.textContent = inputArea.value;
});
