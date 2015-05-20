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
      controller: 'ScanController as ScanController',
      templateUrl: 'main-scan/templates/landing.html'
    });

}
