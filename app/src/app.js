'use strict';

angular
  .module('projectfp', [
    'ionic',
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

		if (requireLogin && StorageService.getToken() === null) {
			event.preventDefault();
			$state.go('login');
		}
	});
}

require('./modules/templatecache');
require('./modules/common');
require('./modules/login');
require('./modules/main');
