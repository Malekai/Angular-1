angular.module('app').controller('Ctrl', function($scope){

$scope.test = 'Malek';

$scope.counter = 0;

$scope.copy = 'Gasms';

$scope.admin = true;

$scope.log = function() {
  $scope.counter++;
  $scope.admin = !$scope.admin;
}

})
