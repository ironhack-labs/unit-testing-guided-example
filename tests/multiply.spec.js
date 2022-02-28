const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
    test("should multiply two positive integers correctly", () => {
        const result = multiply(1, 2);
        expect(result).toBe(2);
      });
    test ("should return a negative number if one of the parameters provided is negative", () => {
        const result = multiply(-1, 2);
        expect(result).toBe(-2);
      });
    test ("should return 0 if one of the parameters provided is 0", () => {
        const result = multiply(0, 2);
        expect(result).toBe(0);
      });
    });