'use strict';

var controllersModule = require('./index.js');

controllersModule.controller('NumbersController', ControllerDefinition);

function ControllerDefinition($stateParams, DataService, profile){
	var vm = this;

	vm.currentPeriod = $stateParams.id;
	vm.profile = profile;

	console.log('currentPeriod:', vm.currentPeriod, $stateParams.id);
}