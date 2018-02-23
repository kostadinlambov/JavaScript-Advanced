function createBook(selector, titleValue, authorValue, isbnValue) {
    let div = $('<div>').css('border', 'medium none');
    let title = $('<p class="title">');
    let author = $('<p class="author">');
    let isbn = $('<p class="isbn">');

    let selectBtn = $('<button>Select</button>');
    let deselectBtn = $('<button>Deselect</button>');

    $(div)
        .append(title.text(titleValue))
        .append(author.text(authorValue))
        .append(isbn.text(isbnValue))
        .append(selectBtn)
        .append(deselectBtn);

    (function bookGenerator(count) {
        count = 1;
        return function (div) {
            let newId = 'Book' + count;
            // console.log(newId);
            div.attr('id', newId);
            console.log(div)
            count++;
        }
    })();
    console.log(div)
    $(selector).append(div);

    //f();
    selectBtn.on('click', function () {
        div.css('border', '2px solid blue');
    });

    deselectBtn.on('click', function () {
        div.css('border', 'none');
    });
}