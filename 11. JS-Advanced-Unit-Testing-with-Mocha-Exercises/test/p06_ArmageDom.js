let jsdom = require('jsdom-global')();
let $ = require('jquery');
let expect = require('chai').expect;
let nuke = require('../p06_ArmageDom').nuke;

// let nuke = function (selector1, selector2) {
//     if (selector1 === selector2) return;
//     $(selector1).filter(selector2).remove();
// };

describe('ArmageDOM Tests', function () {

    let targetHTML;
    beforeEach(function () {
        document.body.innerHTML = `<body>
            <div id="target">
                <div class="nested target">
                    <p>This is some text</p>
                </div>
                <div class="target">
                    <p>Empty div</p>
                </div>
                <div class="inside">
                    <span class="nested">Some more text</span>
                    <span class="target">Some more text</span>
                </div>
            </div>
            </body>`

        targetHTML = $('#target');
    });


    it("with valid and invalid selector", function () {
        let selector1 = $('.inside');
        let selector2 = 2;

        let oldHTML = targetHTML.html();
        let expected = oldHTML;

        nuke(selector1, selector2);

        let actual = targetHTML.html();

        expect(expected).to.be.equal(actual);
    });

    it("with two equal selector", function () {
        let selector1 = $('.inside');
        // let selector2 = $('.inside');

        let oldHTML = targetHTML.html();
        let expected = oldHTML;

        nuke(selector1, selector1);

        let actual = targetHTML.html();

        expect(expected).to.be.equal(actual);
    });

    it("with two valid selectors", function () {
        let selector1 = $('.nested');
        let selector2 = $('.target');

        let oldHTML = targetHTML.html();
        let expected = oldHTML;

        nuke(selector1, selector2);

        let actual = targetHTML.html();

        expect(expected).to.not.equal(actual);
    });

    it("should not remove with two valid selectors", function () {
        let selector1 = $('.nested');
        let selector2 = $('.inside');

        let oldHTML = targetHTML.html();
        let expected = oldHTML;

        nuke(selector1, selector2);

        let actual = targetHTML.html();

        expect(expected).to.be.equal(actual);
    });

});
