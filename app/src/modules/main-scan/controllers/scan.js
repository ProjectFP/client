'use strict';

var controllersModule = require('./index.js');

controllersModule.controller('ScanController', ControllerDefinition);

function ControllerDefinition($scope, DataService, CameraService, CanvasCropService, $ionicModal, ImageUploadService){
	//Did not use 'this' because $ionicModal does not work well with 'this'

	console.log('In Scan Controller');

	$scope.imageData = CameraService.imageData;
	$scope.cropImage = cropImage;
	$scope.cropParams = {};

	$ionicModal.fromTemplateUrl('main-scan/templates/cropModal.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.modal = modal;
	});

	$scope.openModal = function() {
		$scope.modal.show();
	};
	$scope.closeModal = function() {
		$scope.modal.hide();
	};

	$scope.confirm = function(){
		ImageUploadService.uploadImage();
	};

	//Cleanup the modal when we're done with it!
	$scope.$on('$destroy', function() {
		$scope.modal.remove();
		console.log('destroyed');
	});

	// Execute action on hide modal
	$scope.$on('modal.hidden', function() {
		// Execute action
	});

	// Execute action on remove modal
	$scope.$on('modal.removed', function() {
		// Execute action
	});

	function cropImage(){
		$scope.openModal();
		console.log('params', JSON.stringify(CanvasCropService.getCropParams()));
		$scope.cropParams = CanvasCropService.getCropParams();
		console.log('before assigning crop data');
		$scope.croppedData = $scope.imageData;
	}
}