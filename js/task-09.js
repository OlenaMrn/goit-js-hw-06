const body = document.querySelector(`body`);

const button = document.querySelector(`.change-color`);

const colorSpan = document.querySelector(`.color`);

button.addEventListener(`click`, onColorChange);

function onColorChange() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;

  colorSpan.textContent = `${randomColor}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
