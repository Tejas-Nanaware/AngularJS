angular
    .module('rozgaar')
    .controller('navbar-controller',['$scope', function($scope){
        $scope.navabarBrand=[
            {
                optionText: 'ROZGAAR',
            }
        ];
        $scope.navbarItems=[
            {
                optionText: 'Home',
            },
            {
                optionText: 'MNREGA',
            },
            {
                optionText: 'About Us',
            },
			{
                optionLink: 'index.html',
            },
            {
                optionLink: 'www.nrega.nic.in/',
            },
            {
                optionLink: 'codestrike.in',
            },
        ];
        $scope.navbarRight=[
            {
				glyph:'user',
			},
			{
                optionText:" Register",
            },
			{
				glyph:'log-in',
			},
            {
                optionText:" Login",
            },
        ];
    }]);