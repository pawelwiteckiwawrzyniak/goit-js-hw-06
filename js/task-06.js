const inputArea = document.querySelector(`#validation-input`);

inputArea.addEventListener(`blur`, (event) => {
  if (event.currentTarget.value.length == inputArea.dataset.length) {
    inputArea.classList.add(`valid`);
    inputArea.classList.remove(`invalid`);
    return;
  }
  inputArea.classList.add(`invalid`);
  inputArea.classList.remove(`valid`);
});
