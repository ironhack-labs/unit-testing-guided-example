const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
  // Our tests will be added here.
    test("should multiply two positive integers correctly", () => {
      const result = multiply(1, 2);
      expect(result).toBe(2);
    });

    test("should multiply one positive integer and one negative integer", () => {
        const result = multiply(-1, 2);
        expect(result).toBe(-2);
    });
    
    test("should multiply any number to zero and return zero", () => {
        const result = multiply(0, 2);
        expect(result).toBe(0);
    });

});
