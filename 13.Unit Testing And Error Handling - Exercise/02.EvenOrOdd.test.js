const isOddOrEven = require('./02.EvenOrOdd');
const assert = require('chai').assert;

describe('Validation tests for isOddOrEven function', () => {

    it('Should return undefined for input as number', () => {
        assert.equal(isOddOrEven(10), undefined);
    });

    it('Should return undefined for input as object', () => {
        assert.equal(isOddOrEven({}), undefined);
    });

    it('Should return undefined for input as array', () => {
        assert.equal(isOddOrEven([]), undefined);
    });

    it('Should return even for even length of string', () => {
        assert.equal(isOddOrEven('kiro'), 'even');
    });

    it('Should return odd for odd length of string', () => {
        assert.equal(isOddOrEven('gosho'), 'odd');
    });

});