const { multiply } = require('./../calculator');

describe('Multiply', () => {
  test('should divide two positive integers correctly', () => {
    const result = multiply(1, 2);
    expect(result).toBe(2);
  });

  test('should multiply two floating point numbers correctly', () => {
    const result = multiply(4.5, 2.5);
    expect(result).toBe(11.25);
  });

  test('should be 0 when multiplying by 0', () => {
    const result = multiply(0, 2);
    expect(result).toBe(0);
  });

  test('should throw error when function is called without arguments', () => {
    expect(() => multiply()).toThrow();
  });
});
