const { multiply } = require("./../calculator");

describe("Multiply", () => {
  test("should multiply two positive numbers correctly", () => {
    const result = multiply(1, 2);
    expect(result).toBe(2);
  });

  test("should multiply a negativ and a positiv numbers correctly", () => {
    const result = multiply(1, -2);
    expect(result).toBe(-2);
  });

  test("should multiply a negativ and a positiv numbers correctly", () => {
    const result = multiply(-2, 1);
    expect(result).toBe(-2);
  });

  test("should multiply a negativ and a positiv numbers correctly", () => {
    const result = multiply(2, 0);
    expect(result).toBe(0);
  });

  test("should multiply a negativ and a positiv numbers correctly", () => {
    const result = multiply(0, 2);
    expect(result).toBe(0);
  });
});
