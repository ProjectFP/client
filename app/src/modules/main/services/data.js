'use strict';

var servicesModule = require('./index');

var mockData = require('./mockData');

servicesModule.factory('DataService', FactoryDefinition);

function FactoryDefinition(StorageService, $q){

	var data;

	return {
		getData: getData,
		getCurrentPeriod: getCurrentPeriod
	};

	function getData(){
		var deferred = $q.defer(),
			storageData;

		if (data){
			deferred.resolve(data);

		} else {
			storageData = StorageService.getAppData();

			if (storageData) {
				data = storageData;
				deferred.resolve(data);

			} else {

				//simulate async call to server
				setTimeout(function(){

					StorageService.setAppData(mockData);
					data = mockData;

					deferred.resolve(data);
				}, 1000);
			}
		}

		return deferred.promise;
	}

	function getCurrentPeriod(){

	}
}