const { multiply } = require('./../calculator.js');

describe("Multiply", () => {
    test("should multiply two positive integers correctly", () => {
        const result = multiply(4, 5);
        expect(result).toBe(20);
    })
    test("should multiply a negative and a positive integer to result a negative number", () => {
        const result = multiply(-3, 5);
        expect(result).toBe(-15);
    })
    test("should multiply any number by 0 to return 0", () => {
        const result = multiply(10, 0);
        expect(result).toBe(0);
    })
  });