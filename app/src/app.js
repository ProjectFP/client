'use strict';

angular
  .module('projectfp', [
    'ionic',
    'ionic.service.core',
    'ionic.service.push',
    'ngCordova',
    'projectfp.common',
    'projectfp.login',
    'projectfp.main'])

  .config(defaultRoute)
  .run(checkForTokenOnStateChange);

function defaultRoute($urlRouterProvider){
  $urlRouterProvider.otherwise('/login');
}

function checkForTokenOnStateChange($rootScope, $state, StorageService){
	$rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
		var requireLogin = toState.data.requireLogin;

    console.log('got to check token');

		if (requireLogin && StorageService.getToken() === null) {
      console.log('rerouting to login');


			event.preventDefault();
			$state.go('login');
		}
	});
}

require('./modules/templatecache');
require('./modules/common');
require('./modules/login');
require('./modules/main');
