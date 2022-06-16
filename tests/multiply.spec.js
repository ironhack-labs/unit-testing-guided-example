const { TestScheduler } = require('jest');
const { multiply } = require('../calculator');

describe('Multiply', () => {
  test('Mutiply two positive integers', () => {
    expect(multiply(3, 4)).toBe(12);
  });
  test('Multiply positive and negative', () => {
    expect(multiply(-4, 5)).toBe(-20);
  });
  test('Multiply by zero', () => {
    expect(multiply(5, 0)).toBe(0);
  });
});
