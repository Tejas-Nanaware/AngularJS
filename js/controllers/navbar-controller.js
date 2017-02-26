angular
    .module('rozgaar')
    .controller('navbar-controller',['$scope', function($scope){
        console.log("entered");
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
                optionText:' Register',
            },
            {
                optionText:' Login',
            },
			{
				glyph:'user',
			},
			{
				glyph:'log-in',
			},
        ];
    }]);