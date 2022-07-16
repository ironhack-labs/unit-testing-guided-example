const { multiply } = require('./../calculator.js');

describe("Multiply", () => {
  test("The value returned should be the result of the multiplication of both values.", () => {
    const result = multiply(1, 2);
    expect(result).toBe(2);
  });

  test("The value returned should be a negative number.", () => {
    const result = multiply(2, -3);
    expect(result).toBe(-6);
  });

  test("The value returned should be 0 (any number multiplied by 0 equals 0).", () => {
    const result = multiply(10, 0);
    expect(result).toBe(0);
  });
});
