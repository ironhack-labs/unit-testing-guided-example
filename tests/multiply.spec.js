const { multiply } = require('./../calculator');

describe('Multiply', () => {
  //TEST 1
  // Function is called with two positive integers. The value returned should be the result of the multiplication of both values.
  test('should divide two positive integers correctly', () => {
    const result = multiply(1, 2);
    expect(result).toBe(2);
  });

  //TEST 2
  // Function is called with a negative and a positive integer. The value returned should be a negative number.
  test('should multiply negative and positive numbers correctly', () => {
    const result = multiply(-4, 2);
    expect(result).toBe(-8);
  });

  //TEST 3
  // Function is called with any number and a number 0. The value returned should be 0 (any number multiplied by 0 equals 0).
  test('should be 0 when multiplying by 0', () => {
    const result = multiply(0, 2);
    expect(result).toBe(0);
  });

  //BONUS
  test('should multiply two floating point numbers correctly', () => {
    const result = multiply(4.5, 2.5);
    expect(result).toBe(11.25);
  });

  test('should throw error when function is called without arguments', () => {
    expect(() => multiply()).toThrow();
  });
});
