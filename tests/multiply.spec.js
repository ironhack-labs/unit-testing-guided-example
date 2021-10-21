const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
    test("should multiply two positive integers correctly", () => {
        const result = multiply(2, 3);
        expect(result).toBe(6);
    });

    test("should multiply a positive integer and a negative correctly", () => {
        const result = multiply(3, -3);
        expect(result).toBe(-9);
    });

    test("should multiply an integer and 0 correctly", () => {
        const result = multiply(5, 0);
        expect(result).toBe(0);
    });

});