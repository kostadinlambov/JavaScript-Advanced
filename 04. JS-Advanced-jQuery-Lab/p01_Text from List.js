function extractText() {
    let liValues = $('#items li')
        .toArray()
        .map((li) => $(li).text()).join(', ');
    $('#result').text(liValues);
}