const { TestScheduler } = require('jest');
const { multiply } = require('./../calculator.js');

// create a test suite 
 

describe('Multiply', () => {
// 1 - Function is called with two positive integers. The value returned should be the result of the multiplication of both values.
    test("The value should be the result of the multiplication of both values", () => { 
   const result = multiply(2, 5);
    expect(result).toBe(10);
});

// 2 - Function is called with a negative and a positive integer. The value returned should be a negative number.
    test("when we have one negative and one positive, the value should be a negative number", () => {
        const result = multiply(-2, 10);
        expect(result).toBe(-20);   
});

// 3 - Function is called with any number and a number 0. The value returned should be 0 (any number multiplied by 0 equals 0)
    test("when one of numbers is 0, result should be 0", () => {
        const result = multiply(0, 1);
        expect(result).toBe(0);
    
});
});