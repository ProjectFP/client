'use strict';

module.exports = routes;

function routes($stateProvider){
  $stateProvider

    .state('main.scan', {
      url: '/scan',
      resolve: {
      	imageData: function(CameraService){
      		return CameraService.takePicture();
      	}
      },
      controller: 'ScanController',   //Did not use ControllerAs because $ionicModal does not work well with 'this'
      templateUrl: 'main-scan/templates/landing.html'
    });

}
