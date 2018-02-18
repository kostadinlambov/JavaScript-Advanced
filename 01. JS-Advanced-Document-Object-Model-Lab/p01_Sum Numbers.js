function calc() {
    let box1 = document.getElementById('num1');
    let box2 = document.getElementById('num2');
    let result = Number(box1.value) + Number(box2.value);

    let resultBox = document.getElementById('sum');
    resultBox.value = result;
}