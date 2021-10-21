const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
  test("should multiply two positive integers correctly", () => {
    const result = multiply(1, 2);
    expect(result).toBe(2);
  });

  test("should multiply two floating point numbers correctly", () => {
    const result = multiply(2.5, 1.35);
    expect(result).toBe(3.375);
  });

  test("should return 0 when function is called without arguments", () => {
    const result = multiply();
    expect(result).toBe(0);
  });
});