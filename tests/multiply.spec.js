const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
    test("you must multiply two integers correctly", () => {
        const result = multiply(1, 2);
        expect(result).toBe(2);
    });
});