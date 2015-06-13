'use strict';

var directivesModule = require('./index.js');

directivesModule.directive('imageLoad', directiveDefinition);

function directiveDefinition(CameraService, CanvasGesturesService){
    return {
        restrict: 'A',
        scope: {
            imageData: '=',
            croppedImage: '@',
            cropParams: '='
        },

        link: function($scope, element, attr){

            var el = element[0],
                isCroppedImage;

            isCroppedImage = $scope.croppedImage === 'true';

            $scope.$watch('imageData.dataUrl', handleImageDataChange);

            console.log('crop: ', $scope.croppedImage);

            if (!isCroppedImage) {
                CanvasGesturesService.bindEventHandlers(el);
            }

            function handleImageDataChange(value){
                if(value){
                    $scope.imageUrl = value;
                    loadImage();

                    if (!isCroppedImage){
                        CanvasGesturesService.initialize();
                    }
                }
            }

            function loadImage(){
                var canvas,
                    context,
                    img,
                    cropParams;

                console.log('ran load image');

                canvas = el;
                context = canvas.getContext('2d');

                cropParams = $scope.cropParams;

                img = new Image();
                img.onload = function drawImagetoCanvas(){

                    if (isCroppedImage){
                        canvas.width = cropParams.width;
                        canvas.height = cropParams.height;

                        console.log('params in directive: ', $scope.cropParams);
                        context.drawImage(img, cropParams.x, cropParams.y, cropParams.width, cropParams.height, 0, 0, cropParams.width, cropParams.height);

                    } else {
                        canvas.width = 2000;
                        canvas.height = 2000;
                        context.drawImage(img, 0, 0);
                    }
                };

                img.src = 'data:image/jpeg;base64,' + $scope.imageUrl;
            }
        }
    };
}