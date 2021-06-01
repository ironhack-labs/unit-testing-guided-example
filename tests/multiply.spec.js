const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
    //Our tests will be added here.
    test("should multiply two positive integers correctly", () => {
        const result = multiply(2, 4);
        expect(result).toBe(8);
    });
    test("should multiply a negative and positive integer correctly", () => {
        const result = multiply(-4, 3);
        expect(result).toBe(-12);
    });
    test("should multiply 0 correctly", () => {
        const result = multiply(4, 0);
        expect(result).toBe(0);
      });
});