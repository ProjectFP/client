'use strict';

var controllersModule = require('./index.js');

controllersModule.controller('PeriodsController', ControllerDefinition);

function ControllerDefinition($stateParams, profile){
	var vm = this;

	vm.currentPeriodKey = profile.data.currentPeriod.key;
	vm.periods = profile.data.periods;
}