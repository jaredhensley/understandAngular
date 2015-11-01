var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', function ($scope, $log, $filter, $resource) {
  console.log($scope);
  console.log($log);
  $scope.name = 'john';
  $log.error('this is an error');
  $log.info('this is some info');
  $log.warn('this is a warning');
  $scope.formattedname = $filter('uppercase')($scope.name);
  $log.info($scope.name);
  $log.info($scope.formattedname);
  console.log($resource);
});