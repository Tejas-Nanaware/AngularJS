angular
.module('Rozgaar')
.controller('RegisterCtrl', function($scope, $compile) {
    console.log('inside register controller');
    $scope.RegisterCtrlObject = {};
    $scope.RegisterCtrlObject.title = "Register Here";
});