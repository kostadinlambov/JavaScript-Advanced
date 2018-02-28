let isSymmetric = require('../p05_Check for Symmetry').isSymmetric;
let expect = require('chai').expect;

console.log(isSymmetric([1, 2, 1]));

describe("Check symmetry", () => {
    describe("General tests", () => {
        it("Should be a function", () => {
            expect(typeof isSymmetric).to.equal('function')
        })
    });

    describe("Value Tests", () => {
        it("should return true for [1,2,3,3,2,1]", () => {
            expect(isSymmetric([1, 2, 3, 3, 2, 1])).to.be.true;
        })
    });

    describe("Value Tests", () => {
        it("should return false for [1,2,3,3,2,1]", () => {
            expect(isSymmetric([1, 2, 3, 3, 2, 5])).to.be.false;
        })
    });

    describe("Value Tests", () => {
        it("should return true for [1,2,,3,2,1]", () => {
            expect(isSymmetric([1, 2, 3, 2, 1])).to.be.true;
        })
    });

    describe("Value Tests", () => {
        it("should return false for [1,2,3,3]", () => {
            expect(isSymmetric([1, 2, 3, 3,])).to.be.false;
        })
    });

    describe("Value Tests", () => {
        it("should return false for [1,2]", () => {
            expect(isSymmetric([1, 2])).to.be.false;
        })
    });

    describe("Value Tests", () => {
        it("should return true for [1]", () => {
            expect(isSymmetric([1])).to.be.true;
        })
    });

    describe("Value Tests", () => {
        it("should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5] ", () => {
            expect(isSymmetric([5, 'hi', {a: 5}, new Date(), {a: 5}, 'hi', 5])).to.be.true;
        })
    });

    describe("Value Tests", () => {
        it("should return false for [5,'hi',{a:5},new Date(),{a:5},'hi'] ", () => {
            expect(isSymmetric([5, 'hi', {a: 5}, new Date(), {a: 5}, 'hi'])).to.be.false;
        })
    });

    describe("Value Tests", () => {
        it("should return false for 1, 2, 3 ", () => {
            expect(isSymmetric(1, 2, 3)).to.be.false;
        })
    })
});