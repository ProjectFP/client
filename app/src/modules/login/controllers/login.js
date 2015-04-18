'use strict';

var controllersModule = require('./index.js');

controllersModule.controller('LoginController', ControllerDefinition);

function ControllerDefinition(){
	this.test = 'hello there';
}