const body = document.querySelector(`body`);

const button = document.querySelector(`.change-color`);

const colorSpan = document.querySelector(`.color`);

button.addEventListener(`click`, onColorChange);

function onColorChange() {
  body.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;

  colorSpan.textContent = `#${Math.floor(Math.random() * 16777215).toString(
    16
  )}`;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
