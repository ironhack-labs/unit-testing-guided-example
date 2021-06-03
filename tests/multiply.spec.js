const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
    // Our tests will be added here.
    test("should multiply two positive integers correctly", () => {
        const result = multiply(2, 2);
        expect(result).toBe(4);
    });

    test("should multiply a positive and a negative integer correctly", () => {
        const result = multiply(-2, 2);
        expect(result).toBe(-4);
    });

    test("should multiply any number by 0 correctly", () => {
        const result1 = multiply(2, 0);
        const result2 = multiply(0, 2);
        expect(result1).toBe(0);
        expect(result2).toBe(0);
    });
});