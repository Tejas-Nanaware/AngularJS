angular
    .module('rozgaar')
    .controller('navbar-controller'[$scope, function($scope){
        $scope.navabrBrand=[
            {
                option: 'ROZGAAR',
            }
        ];
        $scope.navbarItems=[
            {
                option: 'Home',
            },
            {
                option: 'MNREGA',
            },
            {
                option: 'About Us',
            },
        ];
        $scope.navbarRight=[
            {
                option:'Register',
            },
            {
                option:'Login',
            },
        ];
    }]);