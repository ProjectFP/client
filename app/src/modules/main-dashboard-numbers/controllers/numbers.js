'use strict';

var controllersModule = require('./index.js');

controllersModule.controller('NumbersController', ControllerDefinition);

function ControllerDefinition($stateParams){
	console.log('numbers controller');

	this.params = $stateParams;
}