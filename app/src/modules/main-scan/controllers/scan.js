'use strict';

var controllersModule = require('./index.js');

controllersModule.controller('ScanController', ControllerDefinition);

function ControllerDefinition(DataService, CameraService, CanvasCropService){
	console.log('In Scan Controller');

	this.imageData = CameraService.imageData;
	this.cropImage = cropImage;

	function cropImage(){
		console.log('params', JSON.stringify(CanvasCropService.getCropParams()));
	}
}