const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
  test('Function is called with two positive integers.', () => {
    const result = multiply(3, 5);
    expect(result).toBe(15);
  });

  test('Function is called with a negative and a positive integer.', () => {
    const result = multiply(3, -5);
    expect(result).toBe(-15);
  });

  test('Function is called with any number and a number 0. The value returned should be 0', () => {
    const result = multiply(3, 0);
    expect(result).toBe(0);
  });
});
