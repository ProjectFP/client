'use strict';

var controllersModule = require('./index.js');

controllersModule.controller('ScanController', ControllerDefinition);

function ControllerDefinition($scope, DataService, CameraService, CanvasCropService, $ionicModal, ImageUploadService, $http, envConstants){
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
		$scope.croppedData = '';
		$scope.modal.hide();
	};

	$scope.confirm = function(){
		ImageUploadService.uploadImage()
		.then(function(value){
			console.log('typeof value.data', typeof value.data, value.data);
			$scope.result = value.data.value.split('');
			console.log('Read Value: ', value.data.value, $scope.result, JSON.stringify($scope.result));
		});
	};

	$scope.sendUpdate = function(){
		var value = [],
			form,
			data;

		for (var i = 1; i<9 ;i++){
			value.push(document.getElementsByClassName('value-' + i)[0].value);
		}

		data = {
			receipt: value.join(''),
			email: 'jt@gmail.com',
			period: "2015-07-08",
			_id: "554e7344d51292071e205a03"
		};

		form = new FormData();
		form.append('data', data);
		form.append('receipt', value.join(''));
		form.append('email', 'jt@gmail.com');
		form.append('period', "20150506");

		console.log('Form', form);

        //https://uncorkedstudios.com/blog/multipartformdata-file-upload-with-angularjs
        return $http.post(envConstants.hostUrl + '/receipt', data
        // 	, {
        //     transformRequest: angular.identity,
        //     headers: {'Content-Type': undefined}
        // }
        ).success(function(data, status, headers, config){
            console.log('Receipt success', status, data.value);
            return data.value;
        }).error(function(data, status, headers, config){
            console.log('Receipt error', status, headers, config);
        })
        .then(DataService.getData);
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