const { calcPriceOfBook, findBook, arrangeTheBooks } = require('./library');
const library = require('./library');
const expect = require('chai').expect;

describe("Tests class library", () => {

    describe("Tests for calcPriceOfBook method", () => {

        it("Should throw an error for invalid parameters", () => {
            expect(() => library.calcPriceOfBook(34, 1999)).to.throw(Error, 'Invalid input');          
            expect(() => library.calcPriceOfBook('sadf', 1999.3)).to.throw(Error, 'Invalid input');          
            expect(() => library.calcPriceOfBook(456, 1999.3)).to.throw(Error, 'Invalid input');          
        });
        it("Should return correct message", () => {
            expect(library.calcPriceOfBook('string', 1980)).to.equal(`Price of string is 10.00`);        
        });
        it("Should return correct message2", () => {
            expect(library.calcPriceOfBook('string', 1981)).to.equal(`Price of string is 20.00`);        
        });

     });

    describe('Tests for findBook method', () => {

        it('Should throw error for empty array', () => {
            expect(() => library.findBook([], 'book')).to.throw(Error, 'No books currently available');
        });

        it("Should return correct message when found book", () => {
            expect(library.findBook(['book', 'asdf'], 'book')).to.equal('We found the book you want.');        
        });

        it("Should return correct message when can not find book", () => {
            expect(library.findBook(['bookss', 'asdf'], 'book')).to.equal('The book you are looking for is not here!');        
        });
    });

    describe('Tests for arrangeTheBooks method', () => {

        it('Should throw error with negative number as input', () => {
            expect(() => library.arrangeTheBooks(-5)).to.throw(Error, 'Invalid input');
        });

        it('Should throw error with invalid input', () => {
            expect(() => library.arrangeTheBooks('dsfs')).to.throw(Error, 'Invalid input');
        });

        it('Should return correct message', () => {
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        });

        it('Should return correct message for no more space', () => {
            expect(library.arrangeTheBooks(42)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
    });
});
