const boxes = document.querySelector(`#boxes`);
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const input = document.querySelector(`input`);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonCreate.addEventListener(`click`, function (event) {
  createBoxes(event);
});

function createBoxes(event) {
  const amount = input.valueAsNumber;
  const allBoxes = [];

  for (let i = 1; i <= amount; i++) {
    const box = document.createElement(`div`);
    box.style.width = `${30 + 10 * (i - 1)}px`;
    box.style.height = `${30 + 10 * (i - 1)}px`;
    box.style.backgroundColor = getRandomHexColor();

    allBoxes.push(box);
  }
  //  console.log(allBoxes);
  boxes.append(...allBoxes);
  // console.log(boxes);
}

buttonDestroy.addEventListener(`click`, destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = "";
}
