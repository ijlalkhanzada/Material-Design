
angular.module('StarterApp', [
    'ngAnimate',
    'ngAria',
    'ngMaterial',
    'ui.router'
    //'ngMessages'
])
    .controller('AppCtrl', function($scope,$mdSidenav) {
        $scope.isOpen = false;

        $scope.openLeftMenu = function() {
            $mdSidenav('left').toggle();
            console.log('ssssssssssssssssssss');
        };
        $scope.toggleMenu = function(){
            $scope.isOpen = !$scope.isOpen;
            console.log($scope.isOpen)
        };


    })
    .run(function($rootScope){
        $rootScope.$on('$stateChangeStart', function (event,state ) {
            $rootScope.title = state.title;


        });
    })
    .config(function ($stateProvider,$mdThemingProvider,$mdIconProvider,$urlRouterProvider) {

        $mdIconProvider.iconSet("avatar", './icons/avatar-icons.svg', 128);
            $mdThemingProvider.theme('default')
                .primaryPalette('orange');

            $mdThemingProvider.theme('yellow')
                .primaryPalette('cyan')
                .accentPalette('light-blue');

            $mdThemingProvider.theme('homeHeader')
                .primaryPalette('purple')
                .accentPalette('yellow');
            $mdThemingProvider.theme('docs-dark', 'default')
                .primaryPalette('brown')
                .dark();




        $urlRouterProvider.otherwise('/main');
        $stateProvider
            .state('nave', {
                abstract: true,
                templateUrl: 'views/nave.html',
                controller: 'AppCtrl'
            })
            .state('nave.main', {
                url:'/main',
                templateUrl: 'views/main.html',
                controller: 'homeCtrl',
                title:'Home'
            })

        .state('nave.about', {
            url:'/about',
            templateUrl: 'views/about.html',
                title:'About',
             controller: 'AboutCtrl'
        })
        .state('nave.contact', {
            url:'/contact',
            templateUrl: 'views/contact.html',
             controller: 'ContactCtrl',
                title:'Contact'

        })
            .state('nave.gridList', {
            url:'/gridList',
            templateUrl: 'views/gridList.html',
             controller: 'gridList',
                title:'Grid List'
        })
            .state('nave.tooltip', {
            url:'/tooltip',
            templateUrl: 'views/tooltip.html',
             controller: 'tooltip',
                title:'Tooltip'
        })
            .state('nave.dialog', {
            url:'/dialog',
            templateUrl: 'views/dialog.html',
             controller: 'DialogCtrl',
                title:'Dialog'
        })
        .state('nave.info', {
            url:'/info',
            templateUrl: 'views/info.html',
            title:'More Information',
            controller: 'InfoCtrl'

        });
});
