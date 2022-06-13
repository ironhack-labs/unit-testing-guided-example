const { TestScheduler } = require("jest");
const { multiply } = require("./../calculator");

describe('Multiply', () => {
    test("should multiply two positive integers correctly", () => {
        const result = multiply(2, 4);
        expect(result).toBe(8);
    })
    test("should multiply one positive and one negative integer correctly", () => {
        const result = multiply(-3, 3);
        expect(result).toBe(-9);
    })
    test("should multiply any integer with 0 correctly", () => {
        const result = multiply(0, 4);
        expect(result).toBe(0);
    })
    test("should multiply any integer with 0 correctly", () => {
        const result = multiply(-7, 0);
        expect(result).toBe(0);
    })
});