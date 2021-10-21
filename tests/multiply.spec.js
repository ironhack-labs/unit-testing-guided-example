const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
  test('should multiplly two positive integers correctly', () => {
    const result = multiply(3, 2);
    expect(result).toBe(6);
  });
  test('should return negative number if one of them are negative, and positie if both positive or both negative', () => {
    expect(multiply(1, 2)).toBeGreaterThan(0);
    expect(multiply(-1, 2)).toBeLessThan(0);
    expect(multiply(-1, -2)).toBeGreaterThan(0);
  });
  test('should return ZERO if any of given numbers is ZERO', () => {
    expect(multiply(1, 0)).toBe(0);
    expect(multiply(0, 2)).toBe(0);
  });
});
