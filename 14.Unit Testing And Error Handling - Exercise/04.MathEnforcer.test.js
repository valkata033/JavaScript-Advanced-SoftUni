const mathEnforcer = require('./04.MathEnforcer');
const assert = require('chai').assert;

describe('mathEnforcer tests', () => {

    describe('addFive function tests', () => {

        it('Should return undefined with input string', () => {
            assert.equal(mathEnforcer.addFive('3'), undefined);
        });

        it('Should return undefined with input null', () => {
            assert.equal(mathEnforcer.addFive(null), undefined);
        });

        it('Should return number summed with 5', () => {
            assert.equal(mathEnforcer.addFive(7), 12);
        });

        it('Should return negative number summed with 5', () => {
            assert.equal(mathEnforcer.addFive(-3), 2);
        });

        it('Should return decimal number summed with 5', () => {
            assert.equal(mathEnforcer.addFive(4.7), 9.7);
        });

    });

    describe('substractTen function tests', () => {
        
        it('Should return undefined with input string', () => {
            assert.equal(mathEnforcer.subtractTen('3'), undefined);
        });

        it('Should return undefined with input array', () => {
            assert.equal(mathEnforcer.subtractTen([]), undefined);
        });

        it('Should return decimal number subtract with 10', () => {
            assert.equal(mathEnforcer.subtractTen(4.7), -5.3);
        });

        it('Should return number subtract with 10', () => {
            assert.equal(mathEnforcer.subtractTen(36), 26);
        });

        it('Should return negative number subtract with 10', () => {
            assert.equal(mathEnforcer.subtractTen(-12), -22);
        });

    });

    describe('sum function tests', () => {
        
        it('Should return undefined for first param string', () => {
            assert.equal(mathEnforcer.sum('3', 5), undefined);
        });

        it('Should return undefined for second param object', () => {
            assert.equal(mathEnforcer.sum(3, {}), undefined);
        });

        it('Should return undefined for both params arrays', () => {
            assert.equal(mathEnforcer.sum([], []), undefined);
        });

        it('Should return sum of two numbers', () => {
            assert.equal(mathEnforcer.sum(3, 5), 8);
        });

        it('Should return sum of two nums with one of them decimal', () => {
            assert.equal(mathEnforcer.sum(3.56, 11), 14.56);
        });

        it('Should return sum of two nums with one of them negative', () => {
            assert.equal(mathEnforcer.sum(3.56, -1.72), 1.84);
        });


    });
});