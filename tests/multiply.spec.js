const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
    test("should multiply two positive integers correctly", () => {
    const result = multiply(1, 2);
    expect(result).toBe(2);
  });

  test("should multiply a negative and a positive integers correctly", () => {
    const result = multiply(-1, 2);
    expect(result).toBe(-2);
  });

  test("should multiply any number and a number 0 correctly", () => {
    const result = multiply(a, 0);
    expect(result).toBe(0);
  });
});