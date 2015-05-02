'use strict';

var servicesModule = require('./index');

servicesModule.factory('StorageService', FactoryDefinition);

function FactoryDefinition($window){

	var keys,
		api;

	keys = {
		app : 'ProjectFP'
	};

	api = {
		clearAll: clearAll,
		clearAppData: clearAppData,
		getAppData: getAppData,
		setAppData: setAppData
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
}