
let counterValue = 0; 

const decrementButton = document.querySelector(`[data-action="decrement"]`);

const valueSpan = document.querySelector(`#value`);

const incrementButton = document.querySelector(`[data-action="increment"]`);

decrementButton.addEventListener (`click`, oneDecrementButtonClick);

function oneDecrementButtonClick () {
 
    counterValue--;

    valueSpan.textContent = counterValue;

};

incrementButton.addEventListener (`click`, oneIncrementButtonClick);

function oneIncrementButtonClick () {
 
    counterValue++;

    valueSpan.textContent = counterValue;

};
