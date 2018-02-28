let rgbToHexColor = require("../p06_RGB to Hex").rgbToHexColor;
let expect = require("chai").expect;

describe("RGB to Hex Color", () => {
    it("should return #FF9EAA on (255, 158, 170)", function() {
        let hex = rgbToHexColor(255, 158, 170);
        expect(hex).to.be.equal('#FF9EAA');
    });

    it("should return #FF9EAA for (255, 158, 170)", () => {
        expect(rgbToHexColor(255, 158, 170)).to.contains('#FF9EAA')
    });

    it("should pad values with zeroes", () => {
        expect(rgbToHexColor(12, 13, 14)).to.contains('#0C0D0E')
    });

    it("should work at lower limit", () => {
        expect(rgbToHexColor(0, 0, 0)).to.contains('#000000')
    });

    it("should work at upper limit", () => {
        expect(rgbToHexColor(255, 255, 255)).to.contains('#FFFFFF')
    });

    it("should return undefined for negative values", () => {
        expect(rgbToHexColor(-1, 5, 18)).to.equal(undefined, "is not undefined");
    });

    it("should return undefined for values greater than 255", () => {
        expect(rgbToHexColor(256, 258, 256)).to.equal(undefined, "is not undefined");
    });
    it("should return undefined for values greater than 255", () => {
        expect(rgbToHexColor(256, 5, 18)).to.equal(undefined, "is not undefined");
    });

    it("should return undefined for values greater than 255", () => {
        expect(rgbToHexColor(10, 256, 18)).to.equal(undefined, "is not undefined");
    });

    it("should return undefined for values greater than 255", () => {
        expect(rgbToHexColor(10, 8, 256)).to.equal(undefined, "is not undefined");
    });

    it("should return undefined for fractions", () => {
        expect(rgbToHexColor(3.14, 2.71, 3.18)).to.equal(undefined, "is not undefined");
    });

    it("should return undefined for fractions", () => {
        expect(rgbToHexColor('pesho', [], {})).to.equal(undefined, "is not undefined");
    });

})