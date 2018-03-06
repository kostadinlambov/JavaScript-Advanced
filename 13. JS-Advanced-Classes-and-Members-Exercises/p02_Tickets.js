function ticketManager(ticketDescriptionArr, sortingCriteria) {
    let resultArr = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    for (let element of ticketDescriptionArr) {
        let [destinationName, price, status] = element.split('\|');

        let ticket = new Ticket(destinationName, Number(price), status);
        resultArr.push(ticket);
    }

    //resultArr = sortTickets(resultArr, sortingCriteria);
    resultArr.sort((a,b) => a[sortingCriteria].localeCompare(b[sortingCriteria]));
    return resultArr;

    function sortTickets(arr, sortingCriteria) {
        switch (sortingCriteria) {
            case 'destination':
                return resultArr.sort((a, b) => a.destination.localeCompare(b.destination));
            case 'status':
                return resultArr.sort((a, b) => a.status.localeCompare(b.status));
            case 'price':
                return resultArr.sort((a, b) => a.price - b.price);
        }
    }
}
//
console.log(ticketManager([
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));

// console.log(ticketManager([
//         'Philadelphia|94.20|available',
//         'New York City|95.99|available',
//         'New York City|95.99|sold',
//         'Boston|126.20|departed'],
//     'status'
// ));