let testNumbers = require('./testNumbers');
let expect = require('chai').expect;

describe("Tests", () => {

    describe("Tests for sumNumbers property", () => {

        it("Should return undefined for first num !== number", () => {
            expect(testNumbers.sumNumbers('2', 2)).to.equal(undefined);
            expect(testNumbers.sumNumbers({}, 2)).to.equal(undefined);
        });

        it("Should return undefined for second num !== number", () => {
            expect(testNumbers.sumNumbers(2, [])).to.equal(undefined);
            expect(testNumbers.sumNumbers(2, 'fgh')).to.equal(undefined);
        });

        it("Should return sum of two numbers", () => {
            expect(testNumbers.sumNumbers(2, 9)).to.equal('11.00');
            expect(testNumbers.sumNumbers(-5, 7)).to.equal('2.00');
            expect(testNumbers.sumNumbers(7.336, -5)).to.equal('2.34');
        });

     });

    describe('Tests for numberChecker property', () => {

        it("Should throw error for NaN after parcing", () => {
            expect(() => testNumbers.numberChecker({})).to.throw(Error, 'The input is not a number!');
            expect(() => testNumbers.numberChecker(NaN)).to.throw(Error, 'The input is not a number!');
            expect(() => testNumbers.numberChecker('fdsg')).to.throw(Error, 'The input is not a number!');
        });
        
        it('Should return the even number', () => {
            expect(testNumbers.numberChecker('22')).to.equal('The number is even!');
            expect(testNumbers.numberChecker('-22')).to.equal('The number is even!');
        });

        it('Should return the odd number', () => {
            expect(testNumbers.numberChecker('1')).to.equal('The number is odd!');
            expect(testNumbers.numberChecker('-27')).to.equal('The number is odd!');
        });

    });

    describe('Tests for avarageSumArray property', () => {

        it('Should return the avarage sum of the array', () => {
            expect(testNumbers.averageSumArray([3, 7, 0, 8])).to.equal(4.5);
            expect(testNumbers.averageSumArray([0, 0, 0, 0])).to.equal(0);
        });

    });
});
