angular.module('StarterApp')
    .controller('DialogCtrl',function($scope,$mdDialog){
        $scope.hide = function() {
            $mdDialog.hide();

        };
        $scope.cancel = function() {
            alert('yes');
            $mdDialog.cancel();

        };
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
    });

