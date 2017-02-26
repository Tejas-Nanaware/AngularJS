angular
		.module('rozgaar')
		.controller('turorialCtrl',['$scope', function($scope){

			$scope.tutorialObject = {};
			$scope.tutorialObject.title = "Rozgaar";
			$scope.tutorialObject.subtitle = "subtitle";
			$scope.tutorialObject.bindOutput = 2;
			$scope.timesTwo = function(){
			$scope.tutorialObject.bindOutput *= 2;
	}
}]);