'use strict';

var servicesModule = require('./index');

var mockData = require('./mockData');

servicesModule.factory('DataService', FactoryDefinition);

function FactoryDefinition(StorageService, $q, UtilsService, ProfileApis){

	var profile = {};

	return {
		getData: getData
	};

	function getData(){
		console.log('got to GET DATA');

		return ProfileApis.getAccountData()
			.then(function(response){
				profile.data = response.data;
				console.log('RECEIVED DATA PROFILE.DATA', JSON.stringify(profile.data));
				processData();

				return profile;
			});
	}

	function processData(){
		var currentPeriodKey,
			data;

		currentPeriodKey = UtilsService.currentPeriodKey();
		data = profile.data;

		indexPeriods();
		mapCurrentPeriodEntries();
		calculatePreviousPeriodsCount();

		function indexPeriods(){
			var period;

			data.periodsIndex = {};

			for (var i = 0; i < data.periods.length; i++){
				period = data.periods[i];
				data.periodsIndex[period.periodName] = period;
			}
		}

		function mapCurrentPeriodEntries(){
			var currentPeriod = data.periodsIndex[currentPeriodKey];

			data.currentPeriod = {
				key: currentPeriodKey,
				data: currentPeriod,
				count: currentPeriod.entries.length
			};
		}

		function calculatePreviousPeriodsCount(){
			var periodsIndex,
				count;

			periodsIndex = data.periodsIndex;
			count = 0;

			for (var period in periodsIndex){

				if (periodsIndex[period] !== data.currentPeriod.data) {
					count += periodsIndex[period].entries.length;
				}
			}

			data.previousPeriodsCount = count;
		}
	}
}