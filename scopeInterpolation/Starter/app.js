var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$timeout', function ($scope, $timeout) {

  $scope.name = 'jared.';

  $timeout(function () {
    $scope.name = 'I mean puff daddy.'

  }, 3000);

}]);