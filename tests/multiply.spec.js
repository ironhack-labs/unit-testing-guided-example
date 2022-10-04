const { multiply } = require("../calculator");

describe("Multiply", () => {
  test("should multiply two positive integers correctly", () => {
    const result = multiply(2, 4);
    expect(result).toBe(8);
  });

  test("should multiply two numbers, one positive and one negative, correctly", () => {
    const result = multiply(4, -2);
    expect(result).toBe(-8);
  });

  test("should multiply one number with zero and return 0", () => {
    const result = multiply(4, 0);
    expect(result).toBe(0);
  });

  /*test("should throw an error when multiplying by 0", () => {
    expect(() => multiply(1.35, 0)).toThrow();
  });
  */
});
