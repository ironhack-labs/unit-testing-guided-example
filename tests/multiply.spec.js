const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
    test("should multiply two positive integers correctly", () => {
        const result = multiply(4, 2);
        expect(result).toBe(8);
    });
    test("should multiply a positive and a negative integers correctly", () => {
        const result = multiply(-1, 5);
        expect(result).toBe(-5);
    });
    test("should multiply any number and a number 0", () => {
        const result = multiply(3, 0);
        expect(result).toBe(0);
    });
});
