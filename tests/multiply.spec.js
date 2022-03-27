const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
    // Our tests will be added here.

      test('should multiply positive numbers correctly',() =>{
        expect(multiply(3,2)).toBe(6);
      });
    
      test("should multiply a negative and a positive number correctly", () => {
        const result = multiply(-2, 5);
        expect(result).toBe(-10);
      });
    
      test("should multiply two negative numbers correctly", () => {
        const result = multiply(-2, -5);
        expect(result).toBe(10);
      });
    });

  