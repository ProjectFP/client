'use strict';

var directivesModule = require('./index.js');

directivesModule.directive('imageLoad', directiveDefinition);

function directiveDefinition(CameraService, CanvasGesturesService){
    return {
        restrict: 'A',
        scope: {
            imageData: '='
        },

        link: function($scope, element, attr){

            var el = element[0];

            $scope.$watch('imageData.dataUrl', handleImageDataChange);

            CanvasGesturesService.bindEventHandlers(el);

            function handleImageDataChange(value){
                if(value){
                    $scope.imageUrl = value;
                    loadImage();
                    CanvasGesturesService.initialize();
                }
            }

            function loadImage(){
                var canvas,
                    context,
                    img;

                canvas = el;
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