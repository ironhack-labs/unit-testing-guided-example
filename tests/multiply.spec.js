const { multiply } = require("./../calculator");

describe("Multiply", () => {
  test("should add up two positive integers correctly", () => {
    const result = multiply(2, 3);
    expect(result).toBe(6);
  });

  test("should add up two floating point numbers correctly", () => {
    const result = multiply(1.5, 2.29);
    expect(result).toBe(3.435);
  });

  test("should add up a negative and a positive number correctly", () => {
    const result = multiply(-1.5, 2.29);
    expect(result).toBe(-3.435);
  });

  test("should return 0 when function is called without arguments", () => {
    const result = multiply();
    expect(result).toBe(1);
  });

  test("should multiply a value with 0 when function is called with a single argument", () => {
    const result = multiply(26);
    expect(result).toBe(26);
  });

  test("any number multiplied by 0 equals 0", () => {
    const result = multiply(26, 0);
    expect(result).toBe(0);
  });

});
