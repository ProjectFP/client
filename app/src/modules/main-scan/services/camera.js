'use strict';

var servicesModule = require('./index');

servicesModule.factory('CameraService', FactoryDefinition);

function FactoryDefinition($cordovaCamera){
	var api,
		imageData;

	imageData = {};

	api = {
		takePicture: takePicture,
		imageData: imageData
	};

	return api;

	function takePicture(){

		var options = {
			quality: 100,
			destinationType: Camera.DestinationType.DATA_URL,
			sourceType: Camera.PictureSourceType.CAMERA,
			allowEdit: false,
			encodingType: Camera.EncodingType.JPEG,
			targetWidth: 2000,
			targetHeight: 2000,
			saveToPhotoAlbum: false
		};

		return $cordovaCamera
			.getPicture(options)
			.then(processImageData, handleError);
	}

	function processImageData(data){
		imageData.dataUrl = data;
		return imageData;
	}

	function handleError(err){
		console.log('Cancelled ERROR: ', err);			
	}
}