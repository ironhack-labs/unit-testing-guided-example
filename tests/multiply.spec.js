const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
   test("should multiply two positive integers correctly", () => {
    const result = multiply(1, 2);
    expect(result).toBe(2);
      });

test("should multiply two floating point numbers correctly", () => {
    const result = multiply(4.5, 2.5);
    expect(result).toBe(11.25);
      });
test("should retun 0 when multiply by 0", () => {
    const result = multiply(4.5, 0);
    expect(result).toBe(0);
  });
});