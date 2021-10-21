const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
   test("should multiply two positive integers correctly", () => {
        const result = multiply(1, 2);
        expect(result).toBe(2);
    });


  test("should multiply a negative and a positive integer", () => {
    const result = multiply(1, -1);
    expect(result).toBe(-1);
  });


  test("should returned 0 when an argument is 0).", () => {
    const result = multiply(1, 0);
    expect(result).toBe(0);
  });

});
