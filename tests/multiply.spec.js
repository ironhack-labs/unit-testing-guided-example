const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
    // Our tests will be added here.
    //Function is called with two positive integers. The value returned should be the result of the multiplication of both values.
    test("should multiply two positive integers correctly", () => {
        const result = multiply(3, 2);
        expect(result).toBe(6);
    });
    //Function is called with a negative and a positive integer. The value returned should be a negative number.
    test("should multiply a positive and a negative integers correctly", () => {
        const result = multiply(3, -4);
        expect(result).toBe(-12);
    });
    //Function is called with any number and a number 0. The value returned should be 0 (any number multiplied by 0 equals 0).
    test("should multiply one integer by 0 correctly", () => {
        const result = multiply(7, 0);
        expect(result).toBe(0);
    });
});
  