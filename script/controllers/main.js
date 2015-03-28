angular.module('StarterApp')
    .controller('MainCtrl', function openMenu($scope) {
        $scope.$openMenu().toggle();
        console.log('ssss')

    });
