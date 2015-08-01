'use strict';

var controllersModule = require('./index.js');

controllersModule.controller('SignupController', ControllerDefinition);

function ControllerDefinition($ionicHistory, FbAuthService, AuthApis, StorageService, $state){
	this.signup = 'signup';
	$ionicHistory.viewHistory();

	this.goBack = function(){
		console.log('goback');
		$ionicHistory.goBack();
	};

	this.facebookSignup = function(){
        FbAuthService
        	.login()

        	.then(AuthApis.signUp)

        	.then(function(response){
        		StorageService.setToken(response.data.token);
        	})

        	.then(function(response){
        		$state.go('main.dashboard.home');
        	});
    };
}