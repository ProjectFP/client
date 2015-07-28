'use strict';

var servicesModule = require('./index');

servicesModule.factory('StorageService', FactoryDefinition);

function FactoryDefinition($window){

	var keys,
		api;

	keys = {
		app : 'ProjectFP',
		token: 'JWT'
	};

	api = {
		clearAll: clearAll,
		clearAppData: clearAppData,
		clearToken: clearToken,
		getAppData: getAppData,
		getToken: getToken,
		setAppData: setAppData,
		setToken: setToken
	};

	return api;

	function set(key, value){
		$window.localStorage[key] = JSON.stringify(value);
	}

	function get(key){
		return JSON.parse($window.localStorage[key] || 'null');		
	}

	function clearKey(key){
		$window.localStorage.removeItem(key);
	}

	function clearAll(){
		$window.localStorage.clear();
	}

	function setAppData(obj){
		set(keys.app, obj);
	}

	function getAppData(){
		return get(keys.app);
	}

	function clearAppData(){
		clearKey(keys.app);
	}

	function setToken(token){
		set(keys.token, token);
	}

	function getToken(){
		return get(keys.token);
	}

	function clearToken(){
		clearKey(keys.token);
	}
}
