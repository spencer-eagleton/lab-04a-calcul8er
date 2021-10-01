// import functions
import { add } from './calculations.js';
import { subtract } from './calculations.js';
import { multiply, divide } from './calculations.js';

const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addOutput = document.getElementById('add-output');



addButton.addEventListener('click', ()=> {
    const value1 = Number(addInput1.value);
    const value2 = Number(addInput2.value);
    const result = add(value1, value2);
    
    addOutput.textContent = result;
});

const subtractInput1 = document.getElementById('subtract-input-1');
const subtractInput2 = document.getElementById('subtract-input-2');
const subtractButton = document.getElementById('subtract-button');
const subtractAnswer = document.getElementById('subtract-answer');

subtractButton.addEventListener('click', ()=> {
    const value1 = Number(subtractInput1.value);
    const value2 = Number(subtractInput2.value);
    const answer = subtract(value1, value2);

    subtractAnswer.textContent = answer;
});

//  and grab DOM elements

const multiplyInput1 = document.getElementById('multiply-input-1');
const multiplyInput2 = document.getElementById('multiply-input-2');
const multiplyButton = document.getElementById('multiply-button');
const multiplyAnswer = document.getElementById('multiply-answer');


// initialize global state
//set event listeners 

multiplyButton.addEventListener('click', ()=> {
    const num1 = Number(multiplyInput1.value);
    const num2 = Number(multiplyInput2.value);
    const answer = multiply(num1, num2);

    multiplyAnswer.textContent = answer;
    // console.log('clicked!');
});

const divideInput1 = document.getElementById('divide-input-1');
const divideInput2 = document.getElementById('divide-input-2');
const divideButton = document.getElementById('divide-button');
const divideAnswer = document.getElementById('divide-answer');

divideButton.addEventListener('click', ()=> {

    const value1 = Number(divideInput1.value);
    const value2 = Number(divideInput2.value);
    const answer = divide(value1, value2);

    divideAnswer.textContent = answer;

});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
