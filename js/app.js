(function(){
    var app = angular.module('homeDashboard', ['ngRoute', 'ngAnimate']);
    
    app.config(function($routeProvider){
        $routeProvider
        .when('/',{
            controller : 'MainCtrl',
            templateUrl : 'views/home.html'
        })
        .otherwise({ redirectTo : '/' });
    });
    
}());