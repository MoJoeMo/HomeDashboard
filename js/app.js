(function(){
    var app = angular.module('homeDashboard', ['ngRoute', 'ngAnimate']);
    
    app.config(function($routeProvider){
        $routeProvider
        .when('/',{
            controller : 'MainCtrl',
            templateUrl : 'views/home.html'
        })
        .when('/weather',{
            controller : 'WeatherCtrl',
            templateUrl : 'views/weather.html'
        })
        .when('/menu',{
            controller : 'MenuCtrl',
            templateUrl : 'views/menu.html'
        })
        .otherwise({ redirectTo : '/' });
    });
    
}());