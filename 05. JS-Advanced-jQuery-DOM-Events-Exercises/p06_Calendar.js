function calendar(dateArr) {
    let day = dateArr[0];
    let month = dateArr[1];
    let year = dateArr[2];

    let date = new Date(year, month - 1, day);
    let lastDateCurrentMonth = new Date(year, month, 0);
    let firstDateCurrentMonth = new Date(year, month - 1, 1);

    let lastDateOfMonth = lastDateCurrentMonth.getDate();
    let firstDay = firstDateCurrentMonth.getDay();

    let monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let currentMonthName = monthNames[date.getMonth()];

    let contentDiv = $('#content');

    let table = $('<table>');

    let caption = $('<caption>').text(currentMonthName + ' ' + year);
    let tbody = $('<tbody>');
    let trHeasder = $('<tr>')
        .append($('<th>').text('Mon'))
        .append($('<th>').text('Tue'))
        .append($('<th>').text('Wed'))
        .append($('<th>').text('Thu'))
        .append($('<th>').text('Fri'))
        .append($('<th>').text('Sat'))
        .append($('<th>').text('Sun'));

    contentDiv.append(table, caption, tbody, trHeasder);

    let trWeek = $('<tr>');

    if(firstDay === 0){
        firstDay = 7;
    }

    let count = 1;
    for (let i = 1; i < firstDay ; i++) {
        trWeek.append($('<td>').text(''));
        count++;
    }

    let currentDate = 1;
    for (let i = count; i <= 7; i++) {
        if (currentDate === day) {
            trWeek.append($('<td>').addClass('today').text(currentDate));
        } else {
            trWeek.append($('<td>').text(currentDate));
        }

        currentDate++;
        count++;
    }

    contentDiv.append(trWeek);

    let currentDayOfTheWeek = 1;
    for (let i = currentDate; i <= lastDateOfMonth; i++) {
        if (currentDayOfTheWeek === 1) {
            trWeek = $('<tr>');
        }
        if (i === day) {
            trWeek.append($('<td>').addClass('today').text(i));
        } else {
            trWeek.append($('<td>').text(i))
        }


        if (currentDayOfTheWeek === 7) {
            contentDiv.append(trWeek)
            currentDayOfTheWeek = 0;
        }

        currentDayOfTheWeek++;
        count++
    }

    for (let i = count % 7; i <= 7; i++) {
        trWeek.append($('<td>').text(''));

    }
    contentDiv.append(trWeek)
}