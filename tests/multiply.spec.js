const { multiply } = require("../calculator");

describe("Multiply", () => {
  test("should multiply two numbers correctly", () => {
    const result = multiply(2, 5);
    expect(result).toBe(10);
  });

  test("function is called with a negative and a positive integer. The value returned should be a negative number.", () => {
    const result = multiply(-1, 2);
    expect(result).toBe(-2);
  });

  test("should return 0 when one of the values is 0", () => {
    const result = multiply(0, 2);
    expect(result).toBe(0);
  });

});


