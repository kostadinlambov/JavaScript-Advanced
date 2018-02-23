function increment(inputStr) {
    let selector = $(inputStr);
    let textArea = $('<textarea class="counter" disabled>0</textarea>');
    let incrementBtn = $('<button class="btn" id="incrementBtn">Increment</button>');
    let addBtn = $('<button class="btn" id="addBtn">Add</button>');
    let list = $('<ul class="results">');

    $(selector)
        .append(textArea)
        .append(incrementBtn)
        .append(addBtn)
        .append(list);

    $('#incrementBtn').on('click', increment);
    $('#addBtn').on('click', add);

    function increment() {
        $('.counter').val(+$('.counter').val() +1 )
    }

    function add() {
        let textAreaValue = Number($('.counter').val());
        console.log(textAreaValue);
        let li = $('<li>').text(textAreaValue);
        $('.results').append(li);
    }
}