var app = angular
    .module("Rozgaar", [])
    .config(function ($routeProvider, $locationProvider, $httpProvider) {

    $routeProvider.when('/Home',
    {
      templateUrl:    'home.html',
      controller:     'HomeCtrl'
    });
    $routeProvider.when('/MNREGA',
    {
      templateUrl:    'MNREGA.html',
      controller:     'MNREGACtrl'
    });
    $routeProvider.when('/Contact',
    {
      templateUrl:    'contact.html',
      controller:     'ContactCtrl'
    });
    $routeProvider.otherwise(
    {
      redirectTo:     '/Home',
      controller:     'HomeCtrl', 
    }
  );
});