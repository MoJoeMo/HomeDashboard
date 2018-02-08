(function(){
    angular
        .module('homeDashboard')
        .controller('WeatherCtrl', WeatherCtrl);
    WeatherCtrl.$inject = [$scope];

    function WeatherCtrl($scope){
        $scope.weatherReport = "Hello Weather!";
    }


}());
