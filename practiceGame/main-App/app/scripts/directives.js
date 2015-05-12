
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