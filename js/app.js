(function(){
    var app = angular.module('homeDashboard', ['ngRoute', 'ngAnimate']);
    
    app.config(function($routeProvider){
        $routeProvider
        .when('/',{
            templateUrl : 'views/dashboard.html',
            controller : 'DashboardCtrl'

        })
        .when('/weather',{
            templateUrl : 'views/weather.html',
            controller : 'WeatherCtrl'

        })
        .when('/menu',{
            controller : 'MenuCtrl',
            templateUrl : 'views/menu.html'
        })
        .otherwise({ redirectTo : '/' });
    });
    
}());
