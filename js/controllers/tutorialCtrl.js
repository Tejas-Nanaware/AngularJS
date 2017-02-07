angular.module('tutorialCtrl',[])
.controller("tutorialCtrl", function($scope){

	$scope.tutorialObject = {};
	$scope.tutorialObject.title = "Main Page";
	$scope.tutorialObject.subtitle = "subtitle";
	$scope.tutorialObject.bindOutput = 2;
	$scope.timesTwo = function(){
		$scope.tutorialObject.bindOutput *= 2;
	}
});
