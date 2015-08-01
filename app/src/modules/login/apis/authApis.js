'use strict';

var servicesModule = require('./index');

servicesModule.factory('AuthApis', FactoryDefinition);

function FactoryDefinition($http, AuthConstants){

	var api;

	api = {
		signUp: signUp,
		login: login
	};

	function signUp(accessToken){
		return $http.post(AuthConstants.signupUrl, {
			email: 'testemail@gmail.com',		// TODO: Remove this
			name: 'test name',					// TODO: Remove this
			token: accessToken
		});
	}

	function login(accessToken){
		return $http.post(AuthConstants.loginUrl, {
			email: 'testemail@gmail.com',		// TODO: Remove this
			name: 'test name',					// TODO: Remove this
			token: accessToken
		});
	}

	return api;
}