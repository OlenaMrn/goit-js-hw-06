const input = document.querySelector(`#validation-input`);

//     input.addEventListener(`focus`, onInputFocus);
// function onInputFocus() {
//     console.log("input in focus");
//     }
const dataLength = 6;

input.addEventListener(`blur`, onValidInput);

function onValidInput() {
  input.value.length === dataLength
    ? input.classList.add(`valid`)
    : input.classList.add(`invalid`);

}
