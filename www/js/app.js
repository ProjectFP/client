'use strict';

angular
  .module('starter', [
    'ionic',
    'ngCordova'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .controller('imageController', function($scope, $ionicPlatform, $cordovaCamera){

    $scope.dataUrl;

    $ionicPlatform.ready(function(){
      $scope.takePicture = takePicture;
      $scope.panLeft = panLeft;
      $scope.panRight = panRight;
      $scope.panUp = panUp;
      $scope.panDown = panDown;
      $scope.doubleScale = doubleScale;

      angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);
    });

    function takePicture(){
      
      var options = {
        quality: 100,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: false,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 2000,
        targetHeight: 2000,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
        var sourceCoordinates;

        $scope.dataUrl = imageData;
        loadImgToCanvas('photo', $scope.dataUrl, 1125, 1500);

        sourceCoordinates = calculateSourceImageCoordinates(1500, 1125, 0.2, 0.3);
        loadCroppedCanvas('photo', sourceCoordinates, 'result');
      }, function(err) {
        // error
        console.log('ERROR: ', err);
      });      
    }

    function loadImgToCanvas(canvasId, dataUrl, width, height){
      var canvas = document.getElementById(canvasId);
      var context = canvas.getContext('2d');
      var img = new Image();

      canvas.width = width;
      canvas.height = height;
      img.onload = function drawImageToCanvas(){
        context.drawImage(img,0,0);
      };

      img.src = 'data:image/jpeg;base64,' + dataUrl;
      // img.src =  dataUrl;
    }

    function calculateSourceImageCoordinates(canvasHeight, canvasWidth, topPercent, heightPercent){
      var source = {
        x: 0,
        y: canvasHeight * topPercent,
        width: canvasWidth,
        height: canvasHeight * heightPercent
      };

      return source;
    }

    function loadCroppedCanvas(sourceId, sourceCoordinates, destinationId){
      var source = document.getElementById(sourceId);
      var cropped = document.getElementById(destinationId);
      var croppedContext = cropped.getContext('2d');
      var img = new Image();

      cropped.width = sourceCoordinates.width;
      cropped.height = sourceCoordinates.height;

      img.onload = function drawCroppedImageToCanvas(){
        console.log('Image Width and Height: ',this.width, this.height);
        console.log('Data: ', JSON.stringify(sourceCoordinates));
        croppedContext.drawImage(img, sourceCoordinates.x, sourceCoordinates.y, sourceCoordinates.width, sourceCoordinates.height, 0, 0, sourceCoordinates.width, sourceCoordinates.height);
      };

      img.src = 'data:image/jpeg;base64,' + $scope.dataUrl;
      // img.src =  $scope.dataUrl;
    }

    function panLeft(elementId){
      pan(elementId, 'left');
    }

    function panRight(elementId){
      pan(elementId, 'right');
    }

    function panUp(elementId){
      pan(elementId, 'up');
    }

    function panDown(elementId){
      pan(elementId, 'down');
    }

    function pan(elementId, direction){
      elementId = elementId || 'photo';

      var element = document.getElementById(elementId);
      var $element;
      var currentTranslate;
      var transformCss = '-webkit-transform';
      var transformString;
      var action;

      var actionHash = {
        up: {
          panValue : -50,
          getCurrent : getTranslateY,
          setDirection : setTranslateY
        }, 

        down: {
          panValue : 50,
          getCurrent : getTranslateY,
          setDirection : setTranslateY
        },

        left: {
          panValue : -50,
          getCurrent : getTranslateX,
          setDirection : setTranslateX
        },

        right: {
          panValue : 50,
          getCurrent : getTranslateX,
          setDirection : setTranslateX
        }
      };

      action = actionHash[direction];

      if (action === undefined){
        console.log('ERROR - Action not found');
        return;
      }

      $element = angular.element(element);
      transformString = $element.css(transformCss);
      currentTranslate = action.getCurrent(transformString);

      $element.css(transformCss, action.setDirection(transformString, currentTranslate + action.panValue));

    }
    function doubleScale(elementId){
      elementId = elementId || 'photo';
      var element = document.getElementById(elementId);

      angular.element(element).css('-webkit-transform', 'scale3d(4, 4, 1)');

    }

    function halveScale(elementId){
    }

    function handleFileSelect(evt) {

      var file=evt.currentTarget.files[0];
      var reader = new FileReader();
      reader.onload = function (evt) {
        $scope.$apply(function($scope){
          $scope.dataUrl=evt.target.result;
          loadImgToCanvas('photo', $scope.dataUrl, 1000,1000);
        });
      };
      reader.readAsDataURL(file);
    }

    function getTranslateX(translate){
      return getTranslate(translate, 'x');
    }

    function getTranslateY(translate){
      return getTranslate(translate, 'y');
    }

    function getTranslate(translate, type){
      var typeIndexHash;
      var regex = /-?\d+/g;
      var extractedNumbers;
      var index;

      if (translate.length === 0){
        return 0;
      }

      typeIndexHash = {
        x: 1,
        y: 2
      };

      index = typeIndexHash[type];
      extractedNumbers = translate.match(regex);

      return parseInt(extractedNumbers[index]);
    }

    function setTranslateX(translate, value){
      return setTranslate(translate, 'x', value);
    }

    function setTranslateY(translate, value){
      return setTranslate(translate, 'y', value);
    }

    function setTranslate(translate, type, value){
      var currentOtherValue;

      if (type === 'x'){
        console.log('inx');
        currentOtherValue = getTranslateY(translate);
        return ['translate3d(', value, 'px, ' , currentOtherValue, 'px, 0px)'].join('');
      } else {
        console.log('iny');
        currentOtherValue = getTranslateX(translate);
        return ['translate3d(', currentOtherValue, 'px, ' , value, 'px, 0px)'].join('');
      }
    }
  });
