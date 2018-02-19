window.onload = function () {
    subtract();
};

function subtract() {
    let firstNumber = document.getElementById('firstNumber');
    let secondNumber = document.getElementById('secondNumber');

    let sum = Number(firstNumber.value) - Number(secondNumber.value);

    let resultToShow = document.getElementById('result');
    resultToShow.innerText = sum;
}