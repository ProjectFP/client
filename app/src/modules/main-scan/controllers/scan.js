'use strict';

var controllersModule = require('./index.js');

controllersModule.controller('ScanController', ControllerDefinition);

function ControllerDefinition(DataService, CameraService){
	console.log('In Scan Controller');

	this.imageData = CameraService.imageData;
}