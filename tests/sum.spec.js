const { sum } = require('./../calculator');

describe('Sum', () => {
  test('should add up two positive integers correctly', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });

  test('should add up two floating point numbers correctly', () => {
    const result = sum(1.35, 2.29);
    expect(result).toBe(3.64);
  });

  test('should add up a negative and a positive number correctly', () => {
    const result = sum(-1.35, 2.29);
    expect(result).toBe(0.94);
  });
});
