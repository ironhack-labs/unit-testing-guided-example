const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
    test('zero times anything should be zero', () => {
        const result = multiply(1, 0);
        expect(result).toBe(0);
      });
      test('should return the multiplication of two positive integers', () => {
        const result = multiply(2, 10);
        expect(result).toBe(20);
      });
      test('should return a negative integer when a negative and positive numbers are multiplied', () => {
        const result = multiply(1, -2);
        expect(result).toBe(-2);
      });
      
  });