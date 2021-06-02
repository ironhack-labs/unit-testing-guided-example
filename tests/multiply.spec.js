const {multiply} = require('./../calculator.js');

describe("Multiply", () => {
    test("should correctly multiply two positive integers", () => {
        const result = multiply(2, 3);
        expect(result).toBe(6);
    });

    test("should correctly multiply two different signed integers", () => {
        const result = multiply(-2, 3);
        expect(result).toBeLessThan(0)
    });

    test("should correctly multiply by 0", () => {
        const result = multiply(0, 2);
        expect(result).toBe(0);
    });

    //how do I verify that the number of arguments is at least 2?

})



