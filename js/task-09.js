const body = document.querySelector(`body`);

const button = document.querySelector(`.change-color`);

const colorSpan = document.querySelector(`.color`);

button.addEventListener(`click`, onColorChange);

function onColorChange() {
  const hexColor = getRandomHexColor();

  document.body.style.backgroundColor = hexColor;
  console.log(hexColor);

  colorSpan.textContent = hexColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
