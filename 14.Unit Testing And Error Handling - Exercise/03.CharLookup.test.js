const lookupChar = require('./03.CharLookup');
const assert = require('chai').assert;

describe('lookUpChar function tests', () => {

    it('Should return index of the char', () => {
        assert.equal(lookupChar('Love', 2), 'v');
    });

    it('Should return index of the string with one char', () => {
        assert.equal(lookupChar('L', 0), 'L');
    });

    it('Should return string for bigger index', () => {
        assert.equal(lookupChar('Love', 7), 'Incorrect index');
    });

    it('Should return string for negative index', () => {
        assert.equal(lookupChar('Love', -3), 'Incorrect index');
    });

    it('Should return undefined with second param string', () => {
        assert.equal(lookupChar('Love', '3'), undefined);
    });

    it('Should return undefined with first param number', () => {
        assert.equal(lookupChar(10, 3), undefined);
    });

    it('Should return undefined for incorrect tpye of params', () => {
        assert.equal(lookupChar([], '3'), undefined);
    });

    it('Should return undefined with decimal second param', () => {
        assert.equal(lookupChar('gosho', 3.6), undefined);
    });

});