const { sum } = require("./../calculator");

describe("Sum", () => {
  test("should add up two positive integers correctly", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });

  test("should add up two floating point numbers correctly", () => {
    const result = sum(1.35, 2.29);
    expect(result).toBe(3.64);
  });

  test("should add up a negative and a positive number correctly", () => {
    const result = sum(-1.35, 2.29);
    expect(result).toBe(0.94);
  });

  test("should return 0 when function is called without arguments", () => {
    const result = sum();
    expect(result).toBe(0);
  });

  test("should sum a value with 0 when function is called with a single argument", () => {
    const result = sum(26);
    expect(result).toBe(26);
  });
});
