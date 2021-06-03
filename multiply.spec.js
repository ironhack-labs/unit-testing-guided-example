const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
    test("should multiply two positive integers correctly", () => {
        const result = multiply(1, 2);
        expect(result).toBe(2);
    });

    test("should return a negative result if it has one", () => {
        const result = multiply(1, -2);
        expect(result).toBe(-2);
    });
    test("should return a 0 when any of the arguments it's 0", () => {
        const result = multiply(1, 0);
        expect(result).toBe(0);
    });

});