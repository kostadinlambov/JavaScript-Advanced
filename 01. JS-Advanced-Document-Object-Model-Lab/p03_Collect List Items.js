function extractText() {
    let items = document.querySelectorAll('#items  li');
    console.log(items);
    let result = document.getElementById('result');
    for (let item of items) {
        result.textContent += item.textContent + '\n';
    }
}

// function extractText() {
//     let area = document.getElementById('result');
//     area.value = '';
//     let ul = document.getElementById('items');
//
//     let lis = ul.children;
//     for(let i = 0; i <lis.length; i++){
//         area.value += lis[i].textContent + '\n'
//     }
// }

// function extractText() {
//     let area = document.getElementById('result');
//     area.value = '';
//     let ul = document.getElementById('items');
//
//     let lis = document.querySelectorAll('ul li');
//     for(let i = 0; i <lis.length; i++){
//         area.value += lis[i].textContent + '\n'
//     }
// }