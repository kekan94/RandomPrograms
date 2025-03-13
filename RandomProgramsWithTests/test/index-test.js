import { assert } from "chai";
import SumOfTwoNumbersEqualsGivenNumber from "../index.js";

describe("Sum of any two numbers from a list equals a given number", () => {
    let givenNumber;

    beforeEach(() => {
        givenNumber = 9;
    })

    describe("Array of only one element", () => {
        it("returns an error message", () => {
            // Setup
            const array = [1];
            const errorMessage = 'Not applicable as there is only one element';
            
            // Exercise
            const sum = SumOfTwoNumbersEqualsGivenNumber(array, givenNumber);

            // Verify
            assert.strictEqual(sum, errorMessage);
        });
    });

    describe("Array of numbers larger than the given number", () => {
        it("returns an error message", () => {
            // Setup
            const array = [17, 25, 18, 39];
            const errorMessage = 'Not applicable as all numbers are larger than the given number';
            
            // Exercise
            const sum = SumOfTwoNumbersEqualsGivenNumber(array, givenNumber);

            // Verify
            assert.strictEqual(sum, errorMessage);
        });
    });

    describe("`Happy` array", () => {
        it("returns true", () => {
            // Setup
            const array = [6, 48, 17, 3];
            const expectedResult = true;
            
            // Exercise
            const sum = SumOfTwoNumbersEqualsGivenNumber(array, givenNumber);

            // Verify
            assert.strictEqual(sum, expectedResult);
        });
    });

    describe("`Realistic` array", () => {
        it("returns true", () => {
            // Setup
            const array = [5, 4, 48, 17, 3];
            const expectedResult = true;
            
            // Exercise
            const sum = SumOfTwoNumbersEqualsGivenNumber(array, givenNumber);

            // Verify
            assert.strictEqual(sum, expectedResult);
        });
    });
});