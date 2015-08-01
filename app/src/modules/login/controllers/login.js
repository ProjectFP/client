'use strict';

var controllersModule = require('./index.js');

controllersModule.controller('LoginController', ControllerDefinition);

function ControllerDefinition(FbAuthService, AuthApis, StorageService, $state){
	this.test = 'hello there';

	this.facebookLogin = function(){
        FbAuthService
        	.login()

        	.then(AuthApis.login)

        	.then(function(response){
        		StorageService.setToken(response.data.token);
        	})

        	.then(function(response){
        		$state.go('main.dashboard.home');
        	});
    };
}