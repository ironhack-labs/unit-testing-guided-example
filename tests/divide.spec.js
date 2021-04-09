const { divide } = require("./../calculator");

describe("Divide", () => {
  test("should divide two positive integers correctly", () => {
    const result = divide(1, 2);
    expect(result).toBe(0.5);
  });

  test("should divide two floating point numbers correctly", () => {
    const result = divide(4.5, 2.5);
    expect(result).toBe(1.8);
  });

  test("should throw an error when dividing by 0", () => {
    expect(() => divide(1.35, 0)).toThrow();
  });
});
