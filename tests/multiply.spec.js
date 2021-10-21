const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
  // Our tests will be added here.
  test("The value returned should be the result of the multiplication of both values", () => {
    const result = multiply(4, 2);
    expect(result).toBe(8);
  });

  test("The value returned should be a negative number", () => {
    const result = multiply(-4, 2);
    expect(result).toBe(-8);
  });

  test("The value returned should be 0", () => {
    const result = multiply(0, 2);
    expect(result).toBe(0);
  });
});
