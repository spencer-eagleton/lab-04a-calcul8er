// IMPORT MODULES under test here:
import { add } from '../calculations.js';
import { subtract } from '../calculations.js';


const test = QUnit.test;



    //Arrange
    // Set up your arguments and expectations
    
    
    //Act 
    // Call the function you're testing and set the result to a cons

    //Expect
    // Make assertions about what is expected versus the actual result


test('add(3,2) function', (expect) => {

    const input1 = 3;
    const input2 = 2;
    const expected = 5;

    const actual = add(input1, input2);

    expect.equal(actual, expected);

});

test('add(4,5) function', (expect) => {

    const input1 = 4;
    const input2 = 5;
    const expected = 9;

    const actual = add(input1, input2);

    expect.equal(actual, expected);

});

test('subtract function', (expect) => {

    const input1 = 7;
    const input2 = 57;
    const expected = -50;

    const actual = subtract(input1, input2);

    expect.equal(actual, expected);

});
