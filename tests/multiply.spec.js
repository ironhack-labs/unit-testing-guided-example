const { multiply } = require('./../calculator');

describe('multiply', () => {
  test('should multiply 2 numbers and return them', () => {
    const result = multiply(2, 4);
    expect(result).toBe(8);
  });
});
