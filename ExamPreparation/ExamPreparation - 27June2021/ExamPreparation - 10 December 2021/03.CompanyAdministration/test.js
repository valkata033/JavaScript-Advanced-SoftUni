let companyAdministration = require('./companyAdministration');
let expect = require('chai').expect;

describe("Tests", () => {

    describe("Tests for hiringEmployee property", () => {

        it("Should return correct message for more than 3 years experience", () => {
            expect(companyAdministration.hiringEmployee('Gosho', 'Programmer', 3)).to.equal(`Gosho was successfully hired for the position Programmer.`);
        });

        it("Should return correct message for less than 3 years experience", () => {
            expect(companyAdministration.hiringEmployee('Gosho', 'Programmer', 2)).to.equal(`Gosho is not approved for this position.`);
            expect(companyAdministration.hiringEmployee('Gosho', 'Programmer', 0)).to.equal(`Gosho is not approved for this position.`);
        });

        it("Should throw error for incorrect position", () => {
            expect(() => companyAdministration.hiringEmployee('Gosho', 'Program', 3)).to.throw(Error, `We are not looking for workers for this position.`);
            expect(() => companyAdministration.hiringEmployee('Gosho', 'programme', 3)).to.throw(Error, `We are not looking for workers for this position.`);
            expect(() => companyAdministration.hiringEmployee('Gosho', false, 3)).to.throw(Error, `We are not looking for workers for this position.`);
        });
    });

    describe("Tests for calculateSalary property", () => {

        it("Should throw error for invalid type of hours", () => {
            expect(() => companyAdministration.calculateSalary(-1)).to.throw(Error, "Invalid hours");
            expect(() => companyAdministration.calculateSalary(-432)).to.throw(Error, "Invalid hours");
            expect(() => companyAdministration.calculateSalary('-3')).to.throw(Error, "Invalid hours");
            expect(() => companyAdministration.calculateSalary({})).to.throw(Error, "Invalid hours");
            expect(() => companyAdministration.calculateSalary('334dsf')).to.throw(Error, "Invalid hours");
        });

        it("Should return correct output for more thon 160 hours", () => {
            expect(companyAdministration.calculateSalary(161)).to.equal(3415);
        });

        it("Should return correct output for less thon 160 hours", () => {
            expect(companyAdministration.calculateSalary(10)).to.equal(150);
            expect(companyAdministration.calculateSalary(159)).to.equal(2385);
            expect(companyAdministration.calculateSalary(160)).to.equal(2400);
            expect(companyAdministration.calculateSalary(0)).to.equal(0);
        });
    });

    describe("Tests for firedEmployee property", () => {

        it("Should throw error for invalid parameters", () => {
            expect(() => companyAdministration.firedEmployee({'Gosho': 'Pesho'}, 1)).to.throw(Error, "Invalid input");
            expect(() => companyAdministration.firedEmployee(['Gosho','Pesho'], 1.2)).to.throw(Error, "Invalid input");
            expect(() => companyAdministration.firedEmployee(['Gosho','Pesho'], -1.2)).to.throw(Error, "Invalid input");
            expect(() => companyAdministration.firedEmployee(['Gosho','Pesho'], -3)).to.throw(Error, "Invalid input");
            expect(() => companyAdministration.firedEmployee(['Gosho','Pesho'], 2)).to.throw(Error, "Invalid input");
            expect(() => companyAdministration.firedEmployee(['Gosho','Pesho'], 5)).to.throw(Error, "Invalid input");
            expect(() => companyAdministration.firedEmployee(['Gosho','Pesho'], [])).to.throw(Error, "Invalid input");
            expect(() => companyAdministration.firedEmployee(['Gosho','Pesho'], {})).to.throw(Error, "Invalid input");
            expect(() => companyAdministration.firedEmployee(['Gosho','Pesho'], true)).to.throw(Error, "Invalid input");
            expect(() => companyAdministration.firedEmployee(['Gosho','Pesho'], undefined)).to.throw(Error, "Invalid input");
        });

        it("Should remove correct index of array", () => {
            expect(companyAdministration.firedEmployee(['Gosho', 'Pesho', 'Stamat'], 1)).to.equal('Gosho, Stamat');
            expect(companyAdministration.firedEmployee(['Gosho', 'Pesho', 'Stamat'], 0)).to.equal('Pesho, Stamat');
            expect(companyAdministration.firedEmployee(['Gosho', 'Pesho', 'Stamat'], 2)).to.equal('Gosho, Pesho');
        });

        
    });

});
