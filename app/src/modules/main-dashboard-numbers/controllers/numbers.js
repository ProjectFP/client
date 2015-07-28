'use strict';

var controllersModule = require('./index.js');

controllersModule.controller('NumbersController', ControllerDefinition);

function ControllerDefinition($stateParams, DataService){
	console.log('numbers controller');

	var vm = this;

	vm.currentPeriod = $stateParams.id;

	DataService.getData().then(function(data){
		vm.numbers = data.periodsIndex[$stateParams.id].entries;
	});
}