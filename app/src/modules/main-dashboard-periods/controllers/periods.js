'use strict';

var controllersModule = require('./index.js');

controllersModule.controller('PeriodsController', ControllerDefinition);

function ControllerDefinition($stateParams){
	console.log('periods controller');

	this.params = $stateParams;
}