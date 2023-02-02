function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// дві кнопки.два лістенери

const inputEl = document.querySelector(`input`);
const buttonCreate = document.querySelector(`[data-create]`);
const buttonDesroy = document.querySelector(`[data-destroy]`);
const divBoxesEl = document.querySelector(`#boxes`);

// console.log(inputEl);
inputEl.addEventListener(`submit`, onInputSubmit);

function onInputSubmit() {
  return input.value;
   
};

buttonCreate.addEventListener(`click`, onButtonSubmit);

function onButtonSubmit() {


}

// створити діви,
// змінити фон та розмір
//   прикріпити

// видалити кнопкою по функціі