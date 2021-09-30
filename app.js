// import functions and grab DOM elements
import { add } from './calculations.js';
import { subtract } from './calculations.js';

const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addOutput = document.getElementById('add-output');


// initialize global state
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



// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
