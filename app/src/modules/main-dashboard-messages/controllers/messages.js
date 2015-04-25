'use strict';

var controllersModule = require('./index.js');

controllersModule.controller('MessagesController', ControllerDefinition);

function ControllerDefinition(){
	console.log('messages controller');
}