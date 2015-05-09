'use strict';

var controllersModule = require('./index.js');

controllersModule.controller('PeriodsController', ControllerDefinition);

function ControllerDefinition($stateParams, DataService, UtilsService){
	console.log('periods controller');
	var vm = this;

	vm.currentPeriod = UtilsService.currentPeriodKey();

	DataService.getData()
	.then(function(data){
		vm.numbers = data.periods;
	});
}