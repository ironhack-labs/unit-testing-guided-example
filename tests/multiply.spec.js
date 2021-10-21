const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
    test("should multiply two positive integers correctly", () => {
        const result = multiply(2, 3);
        expect(result).toBe(6);
    });

    test("should multiply negative and a positive integer. The value returned should be a negative number.", () => {
        const result = multiply(2, -3);
        expect(result).toBe(-6);
    });

    test("when multiplying with 0, should return 0", () => {
        const result = multiply(2, 0);
        expect(result).toBe(0);
    });
    
});

