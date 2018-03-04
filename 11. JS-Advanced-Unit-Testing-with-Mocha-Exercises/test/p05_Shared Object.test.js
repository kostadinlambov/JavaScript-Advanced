let jsdom = require('jsdom-global')();
let $ = require('jquery');
let expect = require('chai').expect;
//let sharedObject = require('../p05_Shared Object').sharedObject;

document.body.innerHTML = '<div id="wrapper"><input type="text" id="name"><input type="text" id="income"></div>';


let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};


describe('sharedObject Test', function () {
    describe('Initial value tests', function () {
        it('initial name value should be null', function () {
            let expected = null;
            let actual = sharedObject['name'];
            expect(expected).to.be.null;
        })

        it('initial income value should be null', function () {
            let expected = null;
            let actual = sharedObject['income'];
            expect(expected).to.be.null;
        })
    });

    describe('changeName tests', function () {
        it('changeName() with empty string  should be null', function () {
            sharedObject.changeName('');
            let expected = null;
            let actual = sharedObject.name;
            expect(expected).to.be.equal(actual);
        })
        it('name should not be null with non-empty string', function () {
            sharedObject.changeName('Pesho');
            let expected = 'Pesho';
            let actual = sharedObject.name;
            expect(expected).to.be.equal(actual);
        });

        describe('Name input tests', function () {
            it('changeName() with empty string  should be null', function () {
                sharedObject.changeName('Nakov');
                sharedObject.changeName('');
                // let nameTxtVal = $('#name').val();
                let expected = 'Nakov';
                let actual = $('#name').val();
                expect(expected).to.be.equal(actual);
            })

            it('changeName() with empty string  should be null', function () {
                sharedObject.changeName('Pesho');
                // let nameTxtVal = $('#name').val();
                let expected = 'Pesho';
                let actual = $('#name').val();
                expect(expected).to.be.equal(actual);
            })
        })

    })

    describe('changeIncome tests', function () {
        it('changeIncome() with string should be null', function () {
            sharedObject.changeIncome('str');
            let expected = null;
            let actual = sharedObject.income;
            expect(expected).to.be.equal(actual);
        });
        it('changeIncome() should work correct with positive number', function () {
            sharedObject.changeIncome(5);
            let expected = 5;
            let actual = sharedObject.income;
            expect(expected).to.be.equal(actual);
        });


        it('changeIncome() should work correct with floating point numbers', function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(4.11);
            let expected = 5;
            let actual = sharedObject.income;
            expect(expected).to.be.equal(actual);
        });

        it('changeIncome() should work correct with negative numbers', function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(-2);
            let expected = 5;
            let actual = sharedObject.income;
            expect(expected).to.be.equal(actual);
        });

        it('changeIncome() should work correct with zero', function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(0);
            let expected = 5;
            let actual = sharedObject.income;
            expect(expected).to.be.equal(actual);
        });

        describe('Income input tests', function () {

            it('changeIncome() with string', function () {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome('str');
                let actual = $('#income').val();
                let expected = '5';
                expect(expected).to.be.equal(actual);
            });

            it('changeIncome() with positive number', function () {
                sharedObject.changeIncome(5);
                let actual = $('#income').val();
                let expected = '5';
                expect(expected).to.be.equal(actual);
            });

            it('changeIncome() with floating point number', function () {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(3.11);
                let actual = $('#income').val();
                let expected = '5';
                expect(expected).to.be.equal(actual);
            });

            it('changeIncome() with negative number', function () {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(-2);
                let actual = $('#income').val();
                let expected = '5';
                expect(expected).to.be.equal(actual);
            });

            it('changeIncome() with zero', function () {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(0);
                let actual = $('#income').val();
                let expected = '5';
                expect(expected).to.be.equal(actual);
            });


        })


    })

    describe('updateName()  tests', function () {
        it('should not change name property with emnpty string', function () {
            sharedObject.changeName('Viktor')
            let nameElement = $('#name');
            nameElement.val('')
            let expected = 'Viktor';
            sharedObject.updateName();
            let actual = sharedObject.name;
            expect(expected).to.be.equal(actual);
        })

        it('should change name property with non-empty string', function () {
            sharedObject.changeName('Viktor')
            let nameElement = $('#name');
            nameElement.val('Kiril')
            let expected = 'Kiril';
            sharedObject.updateName();
            let actual = sharedObject.name;
            expect(expected).to.be.equal(actual);
        })
    });

    describe('updateIncome()  tests', function () {
        it('should not change income property with string', function () {
            sharedObject.changeIncome(3)
            let incomeElement = $('#income');
            incomeElement.val('str')
            sharedObject.updateIncome();
            let expected = 3;
            let actual = sharedObject.income;
            expect(expected).to.be.equal(actual);
        });

        it('should work correctly with floating point numbers', function () {
            sharedObject.changeIncome(3);
            let incomeElement = $('#income');
            incomeElement.val('3.11')
            sharedObject.updateIncome();
            let expected = 3;
            let actual = sharedObject.income;
            expect(expected).to.be.equal(actual);
        });

        it('should work correctly with negative numbers', function () {
            sharedObject.changeIncome(3)
            let incomeElement = $('#income');
            incomeElement.val('-5')
            sharedObject.updateIncome();
            let expected = 3;
            let actual = sharedObject.income;
            expect(expected).to.be.equal(actual);
        });

        it('should work correctly with zero', function () {
            sharedObject.changeIncome(3)
            let incomeElement = $('#income');
            incomeElement.val('0')
            sharedObject.updateIncome();
            let expected = 3;
            let actual = sharedObject.income;
            expect(expected).to.be.equal(actual);
        });

        it('should change income property with positive number', function () {
            sharedObject.changeIncome(3)
            let incomeElement = $('#income');
            incomeElement.val('5')
            sharedObject.updateIncome();
            let expected = 5;
            let actual = sharedObject.income;
            expect(expected).to.be.equal(actual);
        });
    });

})
