const { multiply } = require('./../calculator.js');




describe("Multiply", () => {
  test("The value returned should be the result of the multiplication of both values.", () => {
    const result = multiply(1, 2);
    expect(result).toBe(3);
  });

  test("The value returned should be a negative number.", () => {
    const result = multiply(1.35, 2.29);
    expect(result).toBe(3.64);
  });

  test("The value returned should be 0 (any number multiplied by 0 equals 0).", () => {
    const result = multiply(-1.35, 2.29);
    expect(result).toBe(0.94);
  });

  test("should return 0 when function is called without arguments", () => {
    const result = multiply();
    expect(result).toBe(0);
  });

  test("should multiply a value with 0 when function is called with a single argument", () => {
    const result = multiply(26);
    expect(result).toBe(26);
  });
});
