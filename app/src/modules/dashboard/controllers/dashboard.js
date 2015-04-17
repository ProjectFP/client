'use strict';

var controllersModule = require('./index.js');

controllersModule.controller('DashboardController', controllerDefinition);

function controllerDefinition(){
	console.log('dashboard controller');
}