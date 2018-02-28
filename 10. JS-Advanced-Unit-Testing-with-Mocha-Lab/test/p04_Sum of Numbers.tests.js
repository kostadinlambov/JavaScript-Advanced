let expect = require('chai').expect;
let sum = require('../p04_Sum of Numbers').sum;

describe("Test summator", function () {
        it("Should return 3 for [1,2]", function () {
            let expected = 3;
            let actual = sum([1, 2]);
            expect(actual).to.equal(expected);
        });

        it("Should return NaN", function () {
            expect(sum(['pesho', 2, 3])).to.be.NaN;
        });

        it("Should return 3.3", function () {
            expect(sum([1.1, 1.1, 1.1])).to.be.closeTo(3.3, 0.0001);
        });

        it("Should work with negative numbers", function () {
            expect(sum([-2, -4, 2])).to.equal(-4);
        });

        it("Should return NaN", function () {
            expect(sum('pesho')).to.be.NaN;
        });

        it("Should return NaN", function () {
            expect(sum('pesho')).to.be.NaN;
        });

        it("Should return 0 for []", function () {
            expect(sum(['pesho', 2, 3])).to.be.NaN;
        })
})