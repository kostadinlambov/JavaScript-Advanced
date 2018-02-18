function addItem() {
    let input = document.getElementById('newText');
    let li = document.createElement('li');

    li.innerHTML = input.value + ' <a href="#">[Delete]</a>';
    document.getElementById('items').appendChild(li);

    li.children[0].addEventListener('click',  (event) =>  {
        event.target.parentNode.parentNode
            .removeChild(event.target.parentNode);
    });
    input.value = '';
}