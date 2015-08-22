'use strict';

var servicesModule = require('./index');

servicesModule.factory('ProfileApis', FactoryDefinition);

function FactoryDefinition($http, envConstants){

	var api;

	api = {
		getAccountData: getAccountData
	};

	function getAccountData(){
		console.log('right before sending get request');
		return $http
			.get(envConstants.hostUrl + '/account')
			.then(function(data){
				console.log('data from account', JSON.stringify(data));
				return data;
			});
	}

	return api;
}