const { showMovies } = require('./cinema');
let cinema = require('./cinema');
let expect = require('chai').expect;
let assert = require('chai').assert;

describe("Tests for cinema", () => {

    describe("Tests for showMovies property", () => {

        it('Should return correct message for empty array', () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        });

        it('Should return movies joined by , ', () => {
            expect(cinema.showMovies(['aaa', 'bbb'])).to.equal('aaa, bbb');
        });

        it('Should return movies joined by , ', () => {
            expect(cinema.showMovies(['aaa'])).to.equal('aaa');
        });

    });

    describe("Tests for ticketPrice property", () => {

        it('Should check schedule for property and return it', () => {
            const schedule = {
                "Premiere": 12.00,
                "Normal": 7.50,
                "Discount": 5.50
            }
            
            expect(schedule).to.haveOwnProperty('Normal');
            expect(cinema.ticketPrice('Normal')).to.equal(schedule['Normal']);
        });

        it('Should throw error', () => {
            const schedule = {
                "Premiere": 12.00,
                "Normal": 7.50,
                "Discount": 5.50
            }
            
            expect(() => cinema.ticketPrice('Normalll')).to.throw(Error, 'Invalid projection type.');
        });
    });

    describe('Tests for swapSeatsInHall property', () => {

        it('Return correct message with invalid first parameter', () => {
            expect(cinema.swapSeatsInHall(-2, 5)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2.5, 5)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-13.8, 5)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(21, 5)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 5)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(15, 15)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it('Return correct message with invalid second parameter', () => {
            expect(cinema.swapSeatsInHall(3, -5)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(3, 5.7)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(3, -13.9)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(3, 0)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(3, 23)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 0)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it('Return correct message with both valid parameters', () => {
            expect(cinema.swapSeatsInHall(2, 5)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(20, 5)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(20, 1)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, 1)).to.equal('Successful change of seats in the hall.');
            
        });

    });

});
