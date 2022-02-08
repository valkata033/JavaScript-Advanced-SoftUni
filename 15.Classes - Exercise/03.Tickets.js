function ticketSorting(tickets, criteria){
   
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let resultArr = [];

    tickets.map((el) => {
        let [destination, price, status] = el.split('|');
        price = Number(price);
        resultArr.push(new Ticket(destination, price, status));
    });

    return resultArr.sort((a, b) => {
        if(typeof a[criteria] === 'number'){
            return a[criteria] - b[criteria];
        }
        else{
            return a[criteria].localeCompare(b[criteria]);
        }
    });
}

ticketSorting(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination');