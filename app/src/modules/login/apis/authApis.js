'use strict';

var servicesModule = require('./index');

servicesModule.factory('AuthApis', FactoryDefinition);

function FactoryDefinition($http, AuthConstants, envConstants){

	var api;

	api = {
		signUp: signUp,
		login: login
	};

	function signUp(accessToken){

		return $http.post(envConstants.hostUrl + '/signup', {
			token: accessToken['access_token']
		});
	}

	function login(accessToken){

		var token = JSON.parse(accessToken).access_token;

		return $http.post(envConstants.hostUrl + '/login', {
			token: token
		});
	}

	return api;
}