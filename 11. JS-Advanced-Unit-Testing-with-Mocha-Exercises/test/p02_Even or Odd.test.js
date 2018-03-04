let isOddOrEven = require('../p02_Even or Odd').isOddOrEven;
let expect = require('chai').expect;


describe('Test odd or even', function () {
    it("should return odd for '7'", function () {
        let expected = 'odd';
        let actual = isOddOrEven('str');
        expect(actual).to.equal(expected);
    });

    it("should return even for 'st'", function () {
        let expected = 'even';
        let actual = isOddOrEven('st');
        expect(actual).to.equal(expected);
    });

    it("should return even for empty string", function () {
        let expected = 'even';
        let actual = isOddOrEven('');
        expect(actual).to.equal(expected);
    });

    it("should return undefined for number as input", function () {
        let expected = undefined;
        let actual = isOddOrEven(7);
        expect(actual).to.equal(expected);
    });
});