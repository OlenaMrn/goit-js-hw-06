const input = document.querySelector(`#name-input`);
const nameOutput = document.querySelector(`#name-output`);
 
// console.log(input);

input.addEventListener(`input`, onInputSubmit);

function onInputSubmit() {
   input.value === "" ? nameOutput.textContent = `Anonymous` : nameOutput.textContent = input.value;
};