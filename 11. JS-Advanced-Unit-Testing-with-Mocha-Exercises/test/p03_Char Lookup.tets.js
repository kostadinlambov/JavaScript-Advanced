let expect = require('chai').expect;
let lookupChar = require('../p03_Char Lookup').lookupChar;

describe('Test Char Lookup', function () {
    it("should return 'g' for ('string', 5)", function () {
        let expected = 'g';
        let actual = lookupChar('string', 5);
        expect(actual).to.equal(expected);
    })

    it("should return 'undefined' for (10, 5)", function () {
        let expected = undefined;
        let actual = lookupChar(10, 5);
        expect(actual).to.equal(expected);
    })

    it("should return 'undefined' for (10, 'str')", function () {
        let expected = undefined;
        let actual = lookupChar(10, 'str');
        expect(actual).to.equal(expected);
    })

    it("should return 'undefined' for ('str1', 'str2')", function () {
        let expected = undefined;
        let actual = lookupChar('str1', 'str2');
        expect(actual).to.equal(expected);
    })

    it("should return 'undefined' with a floating point number as second input parameter", function () {
        let expected = undefined;
        let actual = lookupChar('str1', 3.14);
        expect(actual).to.equal(expected);
    })

    it("should return 'Incorrect index' for ('string', -1)", function () {
        let expected = "Incorrect index";
        let actual = lookupChar('string', -1);
        expect(actual).to.equal(expected);
    })


    it("should return undefined for ('string', 15)", function () {
        let expected = "Incorrect index";
        let actual = lookupChar('string', 15);
        expect(actual).to.equal(expected);
    })

    it("should return undefined for ('string', 6)", function () {
        let expected = "Incorrect index";
        let actual = lookupChar('string', 6);
        expect(actual).to.equal(expected);
    })


})