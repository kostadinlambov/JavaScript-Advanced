function addItem() {
    let inputText = document.getElementById('newItemText');
    let inputValue = document.getElementById('newItemValue');

    let optionElement = document.createElement('option');
    optionElement.textContent = inputText.value + inputValue.value;

    let dropDownMenu = document.getElementById('menu');
    dropDownMenu.appendChild(optionElement);

    inputText.value = '';
    inputValue.value = '';
}