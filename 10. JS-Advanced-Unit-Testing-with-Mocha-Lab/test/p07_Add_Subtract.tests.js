const createCalculator = require('../p07_Add_Subtract').createCalculator;
let expect = require('chai').expect;

describe("Calculator maker", () => {
    let calc;
    beforeEach(() => {
        calc = createCalculator();
    });

    it("should return an object", function () {
        expect(typeof  calc).to.equal('object');
    });

    it("should have zero value when created", function () {
        expect(calc.get()).to.equal(0);
    });

    it("should add",  () =>{
        calc.add(3);
        calc.add(5);
        expect(calc.get()).to.equal(8);
    });

    it("should subtract",  () =>{
        calc.subtract(3);
        calc.subtract(5);
        expect(calc.get()).to.equal(-8);
    });

    it("should work with fractions",  () =>{
        calc.add(3.14);
        calc.subtract(1.13);
        expect(calc.get()).to.be.closeTo(2.01, 0.001);
    });

    it("should work with negative numbers",  () =>{
        calc.add(-4);
        calc.subtract(-3);
        expect(calc.get()).to.equal(-1);
    });

    it("should not add NaNs",  () =>{
        calc.add('pesho');
        expect(calc.get()).to.be.NaN;
    });

    it("should not subtract NaNs",  () =>{
        calc.subtract('pesho');
        expect(calc.get()).to.be.NaN;
    });

    it("should not subtract NaNs",  () =>{
        calc.subtract('pesho');
        expect(calc.get()).to.be.NaN;
    });

    it("should work with numbers as strings",  () =>{
        calc.add('7');
        expect(calc.get()).to.equal(7);
    });

})