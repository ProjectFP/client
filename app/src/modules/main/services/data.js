'use strict';

var servicesModule = require('./index');

var mockData = require('./mockData');

servicesModule.factory('DataService', FactoryDefinition);

function FactoryDefinition(StorageService, $q, UtilsService){

	var data;

	return {
		getData: getData,
		currentPeriodNumbers: currentPeriodNumbers,
		currentPeriodCount: currentPeriodCount,
		previousPeriodCount: previousPeriodCount
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

	function currentPeriodNumbers(){
		var currentPeriodKey,
			periods;

		currentPeriodKey = UtilsService.currentPeriodKey();
		periods = data.periods;

		periods[currentPeriodKey] = periods[currentPeriodKey] || [];

		return periods[currentPeriodKey];
	}

	function currentPeriodCount(){
		return currentPeriodNumbers().length;
	}

	function previousPeriodCount(){
		var currentPeriodKey,
			periods,
			count;

		currentPeriodKey = UtilsService.currentPeriodKey();
		periods = data.periods;
		count = 0;

		for (var period in periods){
			count += period.length;
		}

		return count;
	}
}