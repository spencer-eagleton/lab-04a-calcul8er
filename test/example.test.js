// IMPORT MODULES under test here:
import { add, multiply } from '../calculations.js';
import { subtract, divide } from '../calculations.js';


const test = QUnit.test;



  

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

test('multiply function', (expect) => {

 //Arrange
    // Set up your arguments and expectations
    const input1 = 7;
    const input2 = 5;
    const expected = 35;
    
    //Act 
    // Call the function you're testing and set the result to a cons
    const actual = multiply(input1, input2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);


});

test('divide function', (expect) => {

    const input1 = 24;
    const input2 = 6;
    const expected = 4;

    const actual = divide(input1, input2);

    expect.equal(actual, expected);

});