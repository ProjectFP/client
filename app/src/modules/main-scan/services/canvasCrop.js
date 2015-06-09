'use strict';

var servicesModule = require('./index');

servicesModule.factory('CanvasCropService', FactoryDefinition);

function FactoryDefinition(){
    var api;

    api = {
        getCropParams: getCropParams
    };

    function getCropParams(boxElement, imageElement){
      var box,
          image,
          widthRatio,
          heightRatio;

      boxElement = document.getElementsByClassName('crop-guide')[0];
      imageElement = document.getElementsByClassName('original-image')[0];


      box = boxElement.getBoundingClientRect();
      image = imageElement.getBoundingClientRect();

      widthRatio = imageElement.width / image.width;
      heightRatio = imageElement.height / image.height;

      return {
        x     : calculateCropX(boxElement, imageElement) * widthRatio,
        y     : calculateCropY(boxElement, imageElement) * heightRatio,
        width : calculateCropWidth(boxElement, imageElement) * widthRatio,
        height: calculateCropHeight(boxElement, imageElement) * heightRatio
      };
    }

    function calculateCropX(boxElement, imageElement){
      return calculateCropCoords(boxElement, imageElement, 'x');
    }

    function calculateCropY(boxElement, imageElement){
      return calculateCropCoords(boxElement, imageElement, 'y');
    }

    function calculateCropCoords(boxElement, imageElement, axis){
      var box,
          image,
          axisToPropertyMap,
          property;

      axisToPropertyMap = {
        x: 'left',
        y: 'top'
      };

      property = axisToPropertyMap[axis];

      boxElement = boxElement  || document.getElementsByClassName('box')[0];
      imageElement = imageElement || document.getElementsByClassName('photo')[0];

      box = boxElement.getBoundingClientRect();
      image = imageElement.getBoundingClientRect();

      if (image[property] >= box[property]){
        return 0;
      } else {
        return box[property] - image[property];
      }
    }

    function calculateCropHeight(boxElement, imageElement){
      return calculateCropDimensions(boxElement, imageElement, 'height');
    }

    function calculateCropWidth(boxElement, imageElement){
      return calculateCropDimensions(boxElement, imageElement, 'width');
    }

    function calculateCropDimensions(boxElement, imageElement, dimensionType){
      var box,
          image;

      box = boxElement.getBoundingClientRect();
      image = imageElement.getBoundingClientRect();

      if (dimensionType === 'height'){
        return Math.min(image.bottom, box.bottom) - Math.max(image.top, box.top);

      } else if (dimensionType === 'width'){
        return Math.min(image.right, box.right) - Math.max(image.left, box.left);
      }
    }

    return api;
}