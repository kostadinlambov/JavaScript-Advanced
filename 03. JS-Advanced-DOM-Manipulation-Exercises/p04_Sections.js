function create(sentences) {
    let contentDiv = document.getElementById('content');

    for (let sentence of sentences) {
        let div = document.createElement('div');
        div.innerHTML = `<p>${sentence}</p>`;
        div.firstChild.style.display = 'none';
        div.addEventListener('click', clickHandler);
        contentDiv.appendChild(div);
    }

    function clickHandler(event) {
        let paragraph = event.target.firstChild;
        paragraph.style.display = 'inline'
    }
}