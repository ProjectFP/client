'use strict';

var controllersModule = require('./index.js');

controllersModule.controller('LoginController', controllerDefinition);

function controllerDefinition($cordovaOauth){
	this.test = 'hello there';
}