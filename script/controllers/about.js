'use strict';

/**
 * @ngdoc function
 * @name testingMApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testingMApp
 */
angular.module('StarterApp')
    .controller('AboutCtrl',  function($scope) {
        $scope.a = [{
            option : 'Apple',
            value : 'Apple'
        },{
            option : 'B',
            value : 'B'
        },{
            option : 'C',
            value : 'C'
        }]
    });


