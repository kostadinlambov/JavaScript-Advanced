let expect = require('chai').expect;
let mathEnforcer = require('../p04_Math Enforcer').mathEnforcer;


describe('MathEnforcer Tests', function () {
    describe('Tests for the "addFive" function', function () {
        it('should return undefined for non-number input', function () {
            let expected = undefined;
            let actual = mathEnforcer.addFive('string');
            expect(expected).to.equal(actual);
        })

        it('should return 6 for .addFive(1) input', function () {
            let expected = 6;
            let actual = mathEnforcer.addFive(1);
            expect(expected).to.equal(actual);
        })

        it('should return 6 for .addFive(-10) input', function () {
            let expected = -5;
            let actual = mathEnforcer.addFive(-10);
            expect(expected).to.equal(actual);
        })

        it('should work correct with floating point numbers', function () {
            let expected = 7.15;
            let actual = mathEnforcer.addFive(2.15);
            expect(expected).to.be.closeTo(actual, 0.01);
        })

    })

    describe('Tests for the "subtractTen" function', function () {
        it('should return undefined for non-number input', function () {
            let expected = undefined;
            let actual = mathEnforcer.subtractTen('string');
            expect(expected).to.equal(actual);
        })

        it('should return 5 for .subtractTen(15) input', function () {
            let expected = 5;
            let actual = mathEnforcer.subtractTen(15);
            expect(expected).to.equal(actual);
        })

        it('should return -20 for .subtractTen(-10) input', function () {
            let expected = -20;
            let actual = mathEnforcer.subtractTen(-10);
            expect(expected).to.equal(actual);
        })

        it('should work correct with floating point numbers', function () {
            let expected = 7.15;
            let actual = mathEnforcer.subtractTen(17.15);
            expect(expected).to.be.closeTo(actual, 0.01);
        })

     })

    describe('Tests for the "sum" function', function () {
        it('should return undefined with non-number as first parameter', function () {
            let expected = undefined;
            let actual = mathEnforcer.sum('string', 5);
            expect(expected).to.equal(actual);
        })

        it('should return undefined with non-number as second parameter', function () {
            let expected = undefined;
            let actual = mathEnforcer.sum(5, 'string');
            expect(expected).to.equal(actual);
        })
        //
        it('should return 15 for .sum(5, 10)', function () {
            let expected = 15;
            let actual = mathEnforcer.sum(5, 10);
            expect(expected).to.equal(actual);
        })

        it('should return -20 for .sum(-10, -10) input', function () {
            let expected = -20;
            let actual = mathEnforcer.sum(-10, -10);
            expect(expected).to.equal(actual);
        })

        it('should work correct with floating point numbers', function () {
            let expected = 15.40;
            let actual = mathEnforcer.sum(10.15, 5.25);
            expect(expected).to.be.closeTo(actual, 0.01);
        })

    })
})