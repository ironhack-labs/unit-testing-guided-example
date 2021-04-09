const { subtract } = require("./../calculator");

describe("Subtract", () => {
  test("should subtract two positive integers correctly", () => {
    const result = subtract(1, 2);
    expect(result).toBe(-1);
  });

  test("should subtract two floating point numbers correctly", () => {
    const result = subtract(2.5, 1.35);
    expect(result).toBe(1.15);
  });
});
