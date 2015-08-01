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

			StorageService.clearAppData();

		if (data){
			deferred.resolve(data);

		} else {
			storageData = StorageService.getAppData();

			if (storageData) {
				data = storageData;
				indexPeriods();
				deferred.resolve(data);

			} else {

				//simulate async call to server
				setTimeout(function(){

					StorageService.setAppData(mockData);
					data = mockData;
					indexPeriods();

					deferred.resolve(data);
				}, 1000);
			}
		}

		return deferred.promise;
	}

	function currentPeriodNumbers(){
		var currentPeriodKey,
			periodsIndex;

		currentPeriodKey = UtilsService.currentPeriodKey();
		periodsIndex = data.periodsIndex;

		periodsIndex[currentPeriodKey] = periodsIndex[currentPeriodKey] || [];

		return periodsIndex[currentPeriodKey].entries;
	}

	function currentPeriodCount(){
		return currentPeriodNumbers().length;
	}

	function previousPeriodCount(){
		var currentPeriodKey,
			periodsIndex,
			count;

		currentPeriodKey = UtilsService.currentPeriodKey();
		periodsIndex = data.periodsIndex;
		count = 0;

		for (var period in periodsIndex){
			count += periodsIndex[period].entries.length;
		}

		return count;
	}

	function indexPeriods(){
		var period;

		data.periodsIndex = {};

		for (var i = 0; i < data.periods.length; i++){
			period = data.periods[i];
			data.periodsIndex[period.periodName] = period;
		}
	}
}