const { multiply } = require("./../calculator");

describe("Multiply", () => {
  test("should multiply two positive integers correctly", () => {
    const result = multiply(2, 4);
    expect(result).toBe(8);
  });

  test("should multiply a negative and a positive number correctly", () => {
    const result = multiply(-1, 2);
    expect(result).toBe(-2);
  });

  test("should return 0 when number is multiplied by 0.", () => {
    const result = multiply(0,9);
    expect(result).toBe(0);
  });

});
