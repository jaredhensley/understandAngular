var myApp = angular.module('myApp', []);

//last element of the array is always the controller callback 
//this is done to protect our code minification
//be careful here!

myApp.controller('mainController', ['$scope', '$log', function ($scope, $log) {
  $log.info($scope);
}]);