angular.module('StarterApp')

        .controller('ContactCtrl', function ($scope,$mdDialog,$timeout) {
        $scope.mode = 'query';
        $scope.determinateValue = 30;
        var progress = function(){
            $scope.determinateValue += 1;
            if ($scope.determinateValue > 100) {
                $scope.determinateValue = 30;
                return;
            }
            $timeout(progress
                , 100);
        }


            $scope.neighborhoods = ['Chelsea', 'Financial District', 'Midtown', 'West Village', 'Williamsburg'];


        $timeout(progress
        , 100);

            $scope.popup = function(ev) {
                $mdDialog.show({
                    controller: 'DialogCtrl',
                    templateUrl: 'views/dialog.html',
                        clickOutsideToClose: false
                })


                                    .then(function(answer) {
                                        $scope.alert = 'You said the information was "' + answer + '".';
                                    }, function() {
                                        $scope.alert = 'You cancelled the dialog.';
                                    });


            };


        });


