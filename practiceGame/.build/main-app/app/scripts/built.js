angular.module('tombola.practiceGame.table',[]);
angular.module('tombola.practiceGame.gameModel',[]);
angular.module('tombola.practiceGame.directives',[]);
angular.module('tombola.practiceGame', ['tombola.practiceGame.table',
    'tombola.practiceGame.gameModel',
    'tombola.practiceGame.directives']);


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


(function () {
    'use strict';
    angular.module('tombola.practiceGame')
        .controller('bingoTicketController', ['$scope', function ($scope){

$scope.ticket1 = bingoTicketNumbers;
        }]);

})();
(function () {
    'use strict';
    angular.module('tombola.practiceGame.providers.table', []);

    //    var ticket = function () {
    //            var table = document.createElement('game-square'),
    //                tableBody = document.createElement('div');
    //
    //            table.className = 'table';
    //            tableBody.className = 'tableBody';
    //
    //
    //            for(var i = 0; i < 3; i++) {
    //                var row = document.createElement('div');
    //                row.className = 'row';
    //
    //                for(var j = 0; j < 9; j++) {
    //                    var cell = document.createElement('div');
    //                    cell.className = 'cell';
    //                    row.appendChild(cell);
    //                }
    //
    //                tableBody.appendChild(row);
    //            }
    //
    //            table.appendChild(tableBody);
    //            document.body.appendChild(table);
    //
    //};
    //
    //ticket();
    //ticket();
    //ticket();
    //ticket();
    //ticket();
    //ticket();

})();

(function () {
    'use strict';
        angular.module('tombola.practiceGame.directives')

            .directive('gameSquare', function () {
                return {
                    restrict: 'E',
                    replace: true,
                    items: '=',
                    template: function ($scope,attr) {

                        return '<div class="table col-9"><div class="tableBody"><div class="row"><div class="cell" ng-repeat="i in ticket1['+attr.cellnumber+']">{{i}}</div></div></div>'
                        ;

                    }

                };

            })

                .directive('gameResult', function () {
                    return {
                        restrict: 'E',
                        replace: true,
                        template: function (scope, attr) {

                            return '<div class="resultDisplay showResult{{'+attr.result+'}}">';
                        }

                    };


            });
})();