'use strict';

var directivesModule = require('./index.js');

directivesModule.directive('imageLoad', directiveDefinition);

function directiveDefinition(CameraService){
	return {
		restrict: 'A',
		scope: {
            imageData: '='
        },

		link: function($scope, element, attr){
            $scope.$watch('imageData.dataUrl', function (value) {
                if(value){
	                $scope.imageUrl = value;
	                loadImage();
                }
            });

            function loadImage(){
            	var canvas,
            		context,
            		img;

            	canvas = element[0];
            	context = canvas.getContext('2d');

            	canvas.width = 2000;
            	canvas.height = 2000;

            	img = new Image();
            	img.onload = function drawImagetoCanvas(){
            		context.drawImage(img, 0, 0);
            	};

            	img.src = 'data:image/jpeg;base64,' + $scope.imageUrl;
            }
        }
	};
}