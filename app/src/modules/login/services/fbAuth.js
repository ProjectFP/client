'use strict';

var servicesModule = require('./index');

servicesModule.factory('FbAuthService', FactoryDefinition);

function FactoryDefinition($cordovaOauth, AuthConstants){

	var api;

	api = {
		login: login
	};

	function login(){
		return $cordovaOauth.facebook(AuthConstants.fbClientId, AuthConstants.fbScope)
	        .then(processResult, handleError)
	        .then(function(item){
	        	console.log('made it to second', item);

	        	return item;
	        });

        function processResult(result){
        	console.log('result', JSON.stringify(result));
        	return JSON.stringify(result);
        }

        function handleError(error){
        	//Error signing in or use cancelled - return to previous screen (login or signup)
        	console.log('error', error);
        	return error;
        }
	}

	return api;
}