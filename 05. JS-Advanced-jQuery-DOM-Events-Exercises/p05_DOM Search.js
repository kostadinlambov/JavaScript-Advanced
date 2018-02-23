function domSearch(selector, isCaseSensitive) {
    let contentDiv = $(selector);

    let divAdd = $('<div class="add-controls">');
    let labelAdd = $('<label>Enter text:</label>');
    let inputAdd = $('<input>');
    let anchorAdd = $('<a class="button" style="display: inline-block">Add</a>');

    inputAdd.appendTo(labelAdd);
    labelAdd.appendTo(divAdd);
    anchorAdd.appendTo(divAdd);
    divAdd.appendTo(contentDiv);

    let divSearch = $('<div class="search-controls">');
    let labelSearch = $('<label>Search:</label>');
    let inputSearch= $('<input>');

    inputSearch.appendTo(labelSearch);
    labelSearch.appendTo(divSearch);
    divSearch.appendTo(contentDiv);

    let divResult = $('<div class="result-controls">');
    let ulResult = $('<ul class="items-list"></ul>');

    ulResult.appendTo(divResult);
    divResult.appendTo(contentDiv);

    let ul = $('.items-list');

    let addBtn = $('.add-controls a');
    let addText = $('.add-controls input');
    let searchInput = $('.search-controls input');

    addBtn.on('click', addElements);
    searchInput.on('input', searchElements);

    function addElements() {
        let li = $('<li class="list-item"></li>');
        let anchor = $('<a class="button">X</a>').on('click', deleteElements);
        let elementValue = $(addText).val();
        let element = $('<strong>').text(elementValue);

        anchor.appendTo(li);
        element.appendTo(li);
        li.appendTo(ul);

        $('div.add-controls input').val('');
    }

    function searchElements() {
        let searchValue = $(this).val();
        $(ul).find('li').each((index, element) => {
            let currentListElement = element.textContent;
            let currentSearchValue = searchValue;
            if(!isCaseSensitive){
                currentSearchValue = currentSearchValue.toLowerCase();
                currentListElement = currentListElement.toLowerCase();
            }
            if (currentSearchValue.length > 0 && currentListElement.includes(currentSearchValue)) {
                $(element).css('display', 'none');
                console.log(true)
            } else {
                $(element).css('display', 'block');
            }
        });
    }

    function deleteElements(event) {
        event.target.parentElement.remove();
    }
}