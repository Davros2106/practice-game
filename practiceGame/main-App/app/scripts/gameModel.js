(function () {
    angular.module('tombola.practiceGame.gameModel');

        var ticketString = '011722475204365360702637497481233455758302154058881928446789061241507324334876840738576186051132437816395663800818206590104559628214294664710935667287132130687703253151692742547985';

        this.ticketNumbers = [];

        for (var i = 0; i < ticketString.length; i += 2) {
            ticketNumbers.push(ticketString.substring(i, i + 2));
        }

    this.ticket1 = ticketNumbers.splice(0,15);

    ticket1.sort();

    this.ticket2 = ticketNumbers.splice(0,15);

    ticket2.sort();

    this.ticket3 = ticketNumbers.splice(0,15);

    ticket3.sort();

    this.ticket4 = ticketNumbers.splice(0,15);

    ticket4.sort();

    this.ticket5 = ticketNumbers.splice(0,15);

    ticket5.sort();

    this.ticket6 = ticketNumbers.splice(0,15);

    ticket6.sort();

    this.bingoTicketNumbers = [ticket1, ticket2, ticket3, ticket4, ticket5, ticket6];

    console.log(bingoTicketNumbers);


})();

