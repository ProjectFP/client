(function(angular){
'use strict';

	angular
		.module('starter.controllers', ['starter.services'])

		.controller('imageController', imageController);

	imageController.$inject = ['$scope', '$ionicPlatform', '$cordovaCamera', 'fileSendService'];

	function imageController($scope, $ionicPlatform, $cordovaCamera, fileSendService){

	 //    $scope.dataUrl;

	 //    $ionicPlatform.ready(function(){
	 //      $scope.takePicture = takePicture;
	 //      $scope.panLeft = panLeft;
	 //      $scope.panRight = panRight;
	 //      $scope.panUp = panUp;
	 //      $scope.panDown = panDown;
	 //      $scope.cropPicture = cropPicture;

	 //      $scope.el = document.getElementById('photo');
	 //      $scope.x = 0;
	 //      $scope.y = 0;
	 //      $scope.scale = 1;
	 //      bindEventHandlers();
	 //    });

	 //    function cropPicture(){
	 //        loadCroppedCanvas('photo', 'result', getCropParams());
	 //    }

		// function getCroppedImageDataUrl(){
		//   var cropped = document.getElementById('result');

		//   return cropped.toDataURL();
		// }

	 //    function takePicture(){
	      
	 //      var options = {
	 //        quality: 100,
	 //        destinationType: Camera.DestinationType.DATA_URL,
	 //        sourceType: Camera.PictureSourceType.CAMERA,
	 //        allowEdit: false,
	 //        encodingType: Camera.EncodingType.JPEG,
	 //        targetWidth: 2000,
	 //        targetHeight: 2000,
	 //        popoverOptions: CameraPopoverOptions,
	 //        saveToPhotoAlbum: false
	 //      };

	 //      $cordovaCamera.getPicture(options).then(function(imageData) {

	 //        $scope.dataUrl = imageData;
	 //        loadImgToCanvas('photo', $scope.dataUrl, 1500, 2000);

	 //      }, function(err) {
	 //        // error
	 //        console.log('ERROR: ', err);
	 //      });      
	 //    }

	 //    function loadImgToCanvas(canvasId, dataUrl, width, height){
	 //      var canvas = document.getElementById(canvasId);
	 //      var context = canvas.getContext('2d');
	 //      var img = new Image();

	 //      canvas.width = width;
	 //      canvas.height = height;
	 //      img.onload = function drawImageToCanvas(){
	 //        context.drawImage(img,0,0);
	 //      };

	 //      img.src = 'data:image/jpeg;base64,' + dataUrl;
	 //    }

	 //    function loadCroppedCanvas(sourceId, destinationId, cropParams){
	 //      var source = document.getElementById(sourceId);
	 //      var cropped = document.getElementById(destinationId);
	 //      var croppedContext = cropped.getContext('2d');
	 //      var img = new Image();

	 //      cropped.width = cropParams.width;
	 //      cropped.height = cropParams.height;

	 //      img.onload = function drawCroppedImageToCanvas(){

	 //        var widthRatio,
	 //            heightRatio;

	 //        croppedContext.drawImage(img, cropParams.x, cropParams.y, cropParams.width, cropParams.height, 0, 0, cropParams.width, cropParams.height);

		// 	Caman.Filter.register("jtfilter", function () {
		// 	  // Pre-calculate some values that will be used
		// 	  var average = 140;

		// 	  // Our process function that will be called for each pixel.
		// 	  // Note that we pass the name of the filter as the first argument.
		// 	  this.process("jtfilter", function (rgba) {

		// 	  	if (isBelowAverage()){
		// 	  		// if (rgba.r > rgba.g && rgba.r > rgba.b && rgba.g < 100 && rgba.b < 100){
		// 		  		makeColor('black');
		// 	  		// } else {
		// 	  		// 	makeColor('white');
		// 	  		// }
		// 	  	} else {
		// 	  		makeColor('white');
		// 	  	}

		// 	    // Return the modified RGB values
		// 	    return rgba;

		// 	    function isBelowAverage(){
		// 	    	return ((rgba.r + rgba.g + rgba.b) / 3) < average;
		// 	    }

		// 	    function makeColor(color){
		// 	    	if (color === 'white'){
		// 	    		rgba.r = 255;
		// 	    		rgba.g = 255;
		// 	    		rgba.b = 255;
		// 	    	} else {
		// 	    		rgba.r = 0;
		// 	    		rgba.g = 0;
		// 	    		rgba.b = 0;
		// 	    	}
		// 	    }
		// 	  });
		// 	});

		// 	Caman.Filter.register("removeGreen", function () {
		// 	  // Our process function that will be called for each pixel.
		// 	  // Note that we pass the name of the filter as the first argument.
		// 	  this.process("removeGreen", function (rgba) {

		//   		if (rgba.g > rgba.r && rgba.g > rgba.b){
		// 	  		makeColor('white');
		//   		} 

		// 	    // Return the modified RGB values
		// 	    return rgba;

		// 	    function makeColor(color){
		// 	    	if (color === 'white'){
		// 	    		rgba.r = 255;
		// 	    		rgba.g = 255;
		// 	    		rgba.b = 255;
		// 	    	} else {
		// 	    		rgba.r = 0;
		// 	    		rgba.g = 0;
		// 	    		rgba.b = 0;
		// 	    	}
		// 	    }
		// 	  });
		// 	});

		// 	// Caman.Filter.register("findDarkest", function (number) {
		// 	//   // Our process function that will be called for each pixel.
		// 	//   // Note that we pass the name of the filter as the first argument.

		// 	//   var result = [],
		// 	// 	  minHeap = new MinHeap('brightness');


		// 	//   this.process("findDarkest", function (rgba) {

		// 	//   	var brightness,
		// 	//   		hash,
		// 	//   		hashName;

		// 	//   	hash = {};
		// 	//   	brightness = Math.sqrt((0.241*rgba.r*rgba.r) + (0.691*rgba.g*rgba.g) + (0.068*rgba.b*rgba.b));
		// 	//   	hashName = rgba.r+'-'+rgba.g+'-'+rgba.b;


		// 	//   	if (minHeap.getItemCount() < number) {

		// 	// 	  	if (hash[hashName] !== undefined){
		// 	// 	  		hash[hashName]++;
		// 	// 	  	} else {
		// 	// 	  		addItem();
		// 	// 	  	}

		// 	//   	} else {
		// 	//   		if (brightness minHeap.peek().brightness)
		// 	//   	}



		// 	//   	function addItem(){
		// 	//   		var obj;

		// 	//   		obj = {
		// 	//   			brightness: brightness,
		// 	//   			hashName: hashName
		// 	//   		};

		// 	//   		minHeap.insert(obj);
		// 	//   		if (hash[hashName] !== undefined){
		// 	//   			hash[hashName]++;
		// 	//   		} else {
		// 	//   			hash[hashName] = 1;
		// 	//   		}

		// 	//   	}
		//  //  		if (rgba.g > rgba.r && rgba.g > rgba.b){
		// 	//   		makeColor('white');
		//  //  		} 

		// 	//     // Return the modified RGB values
		// 	//     return rgba;

		// 	//     function makeColor(color){
		// 	//     	if (color === 'white'){
		// 	//     		rgba.r = 255;
		// 	//     		rgba.g = 255;
		// 	//     		rgba.b = 255;
		// 	//     	} else {
		// 	//     		rgba.r = 0;
		// 	//     		rgba.g = 0;
		// 	//     		rgba.b = 0;
		// 	//     	}
		// 	//     }
		// 	//   });
		// 	// });			

		// 	Caman('#result', function () {
		// 		// this.brightness(50);
		// 		// this.removeGreen();
		// 		// this.greyscale();
		// 		// this.contrast(100);
		// 		// this.saturation(-100);
		// 		console.log('this.calculateLevels', typeof this.calculatelevels);
		// 		console.log('this.analyze', typeof this.Analyze);
		// 		// console.log('this.calculateLevels', typeof this.calculatelevels);
		// 		// this.channels({
		// 		// 	green: -100
		// 		// });

		// 		// this.clip(50);
		// 		// this.colorize(25, 180, 200, 20);
		// 		// this.noise(15).render();
		// 		// this.jtfilter();

		// 		this.render(function(){
		// 			fileSendService.sendToServer(getCroppedImageDataUrl());
		// 		});
		// 	});
	 //      };

	 //      img.src = 'data:image/jpeg;base64,' + $scope.dataUrl;
	 //      // img.src =  $scope.dataUrl;
	 //    }

	 //    function panLeft(elementId){
	 //      pan(elementId, 'left');
	 //    }

	 //    function panRight(elementId){
	 //      pan(elementId, 'right');
	 //    }

	 //    function panUp(elementId){
	 //      pan(elementId, 'up');
	 //    }

	 //    function panDown(elementId){
	 //      pan(elementId, 'down');
	 //    }

	 //    function pan(elementId, direction){
	 //      elementId = elementId || 'photo';

	 //      var element = document.getElementById(elementId);
	 //      var $element;
	 //      var currentTranslate;
	 //      var transformCss = '-webkit-transform';
	 //      var transformString;
	 //      var action;

	 //      var actionHash = {
	 //        up: {
	 //          panValue : -50,
	 //          getCurrent : getTranslateY,
	 //          setDirection : setTranslateY
	 //        },

	 //        down: {
	 //          panValue : 50,
	 //          getCurrent : getTranslateY,
	 //          setDirection : setTranslateY
	 //        },

	 //        left: {
	 //          panValue : -50,
	 //          getCurrent : getTranslateX,
	 //          setDirection : setTranslateX
	 //        },

	 //        right: {
	 //          panValue : 50,
	 //          getCurrent : getTranslateX,
	 //          setDirection : setTranslateX
	 //        }
	 //      };

	 //      action = actionHash[direction];

	 //      if (action === undefined){
	 //        console.log('ERROR - Action not found');
	 //        return;
	 //      }

	 //      $element = angular.element(element);
	 //      transformString = $element.css(transformCss);
	 //      currentTranslate = action.getCurrent(transformString);

	 //      $element.css(transformCss, action.setDirection(transformString, currentTranslate + action.panValue));

	 //      loadCroppedCanvas('photo', 'result', getCropParams());
	 //    }

	 //    function getTranslateX(translate){
	 //      return getTranslate(translate, 'x');
	 //    }

	 //    function getTranslateY(translate){
	 //      return getTranslate(translate, 'y');
	 //    }

	 //    function getTranslate(translate, type){
	 //      var typeIndexHash;
	 //      var regex = /-?\d+/g;
	 //      var extractedNumbers;
	 //      var index;

	 //      if (translate.length === 0){
	 //        return 0;
	 //      }

	 //      typeIndexHash = {
	 //        x: 1,
	 //        y: 2
	 //      };

	 //      index = typeIndexHash[type];
	 //      extractedNumbers = translate.match(regex);

	 //      return parseInt(extractedNumbers[index]);
	 //    }

	 //    function setTranslateX(translate, value){
	 //      return setTranslate(translate, 'x', value);
	 //    }

	 //    function setTranslateY(translate, value){
	 //      return setTranslate(translate, 'y', value);
	 //    }

	 //    function setTranslate(translate, type, value){
	 //      var currentOtherValue;

	 //      if (type === 'x'){
	 //        currentOtherValue = getTranslateY(translate);
	 //        return ['translate3d(', value, 'px, ' , currentOtherValue, 'px, 0px)'].join('');
	 //      } else {
	 //        currentOtherValue = getTranslateX(translate);
	 //        return ['translate3d(', currentOtherValue, 'px, ' , value, 'px, 0px)'].join('');
	 //      }
	 //    }

	 //    function getCropParams(boxElement, imageElement){
	 //      var box,
	 //          image,
	 //          widthRatio,
	 //          heightRatio;

	 //      boxElement = boxElement  || document.getElementsByClassName('box')[0];
	 //      imageElement = imageElement || document.getElementsByClassName('photo')[0];

	 //      box = boxElement.getBoundingClientRect();
	 //      image = imageElement.getBoundingClientRect();

	 //      widthRatio = imageElement.width / image.width;
	 //      heightRatio = imageElement.height / image.height;

	 //      return {
	 //        x     : calculateCropX(boxElement, imageElement) * widthRatio,
	 //        y     : calculateCropY(boxElement, imageElement) * heightRatio,
	 //        width : calculateCropWidth(boxElement, imageElement) * widthRatio,
	 //        height: calculateCropHeight(boxElement, imageElement) * heightRatio
	 //      };
	 //    }

	 //    function calculateCropX(boxElement, imageElement){
	 //      return calculateCropCoords(boxElement, imageElement, 'x');
	 //    }

	 //    function calculateCropY(boxElement, imageElement){
	 //      return calculateCropCoords(boxElement, imageElement, 'y');
	 //    }

	 //    function calculateCropCoords(boxElement, imageElement, axis){
	 //      var box,
	 //          image,
	 //          axisToPropertyMap,
	 //          property;

	 //      axisToPropertyMap = {
	 //        x: 'left',
	 //        y: 'top'
	 //      };

	 //      property = axisToPropertyMap[axis];

	 //      boxElement = boxElement  || document.getElementsByClassName('box')[0];
	 //      imageElement = imageElement || document.getElementsByClassName('photo')[0];

	 //      box = boxElement.getBoundingClientRect();
	 //      image = imageElement.getBoundingClientRect();

	 //      if (image[property] >= box[property]){
	 //        return 0;
	 //      } else {
	 //        return box[property] - image[property];
	 //      }
	 //    }

	 //    function calculateCropHeight(boxElement, imageElement){
	 //      return calculateCropDimensions(boxElement, imageElement, 'height');
	 //    }

	 //    function calculateCropWidth(boxElement, imageElement){
	 //      return calculateCropDimensions(boxElement, imageElement, 'width');
	 //    }

	 //    function calculateCropDimensions(boxElement, imageElement, dimensionType){
	 //      var box,
	 //          image;

	 //      boxElement = boxElement  || document.getElementsByClassName('box')[0];
	 //      imageElement = imageElement || document.getElementsByClassName('photo')[0];

	 //      box = boxElement.getBoundingClientRect();
	 //      image = imageElement.getBoundingClientRect();

	 //      if (dimensionType === 'height'){
	 //        return Math.min(image.bottom, box.bottom) - Math.max(image.top, box.top);

	 //      } else if (dimensionType === 'width'){
	 //        return Math.min(image.right, box.right) - Math.max(image.left, box.left);
	 //      }
	 //    }

	 //    function isThereIntersection(boxElement, imageElement){
	 //      var box,
	 //          image,
	 //          isThereHorizontalIntersection,
	 //          isThereVerticalIntersection;

	 //      boxElement = boxElement  || document.getElementsByClassName('box')[0];
	 //      imageElement = imageElement || document.getElementsByClassName('photo')[0];

	 //      box = boxElement.getBoundingClientRect();
	 //      image = imageElement.getBoundingClientRect();

	 //      isThereHorizontalIntersection = !((image.right <= box.left ) || (image.left >= box.right));

	 //      if (isThereHorizontalIntersection){

	 //        isThereVerticalIntersection = !((image.bottom <= box.top) || (image.top >= box.bottom));

	 //        if(isThereVerticalIntersection) {
	 //          return true;
	 //        }
	 //      }

	 //      return false;
	 //    }

	 //    function bindEventHandlers(elementId){
		// 	elementId = elementId || 'photo';

		// 	var el;

		// 	el = document.getElementById(elementId);

		// 	ionic.onGesture('drag', function(e){
		// 		ionic.requestAnimationFrame(function() { doDrag(e); });
		// 	}, el);

		// 	ionic.onGesture('dragend', function(e){
		// 		$scope.x += e.gesture.deltaX;
		// 		$scope.y += e.gesture.deltaY;
		// 	}, el);

		// 	ionic.onGesture('pinch', function(e){
		// 		ionic.requestAnimationFrame(function() { doScale(e); });
		// 	}, el);

		// }

		// function doScale(e){
		// 	$scope.scale *= e.gesture.scale;
		// 	$scope.el.style[ionic.CSS.TRANSFORM] = 'translate3d(' + $scope.x + 'px, ' + $scope.y  + 'px, 0) scale(' + $scope.scale + ', ' + $scope.scale + ')';

		// }

		// function doDrag(e) {
		// 	e.gesture.stopPropagation();
		// 	var translateX,
		// 		translateY,
		// 		$el;

		// 	if (e.gesture.touches.length === 1){
		// 		translateX = $scope.x + e.gesture.deltaX;
		// 		translateY = $scope.y + e.gesture.deltaY;

		// 		$el = angular.element($scope.el);

		// 		$scope.el.style[ionic.CSS.TRANSFORM] = 'translate3d(' + translateX + 'px, ' + translateY  + 'px, 0) scale(' + $scope.scale + ', ' + $scope.scale + ')';
		// 	}
		// 	// console.log('e.prop', typeof e.gesture.stopPropagation);

		// }
	}

	// function MinHeap(compareProperty){
	// 	  	this.items = [];
	// 	  	this.property = compareProperty;
	// 	  }

	// MinHeap.prototype.insert = function insert(obj){
	// 	this.items.push(obj);

	// 	if (this.items.length > 1){
	// 	  	this.heapifyUp();
	// 	}
	// };

	// MinHeap.prototype.heapifyUp = function heapify(currentIndex){
	// 	var parentIndex,
	// 		parentItem,
	// 		currentItem,
	// 		isRightChild;

	// 	if (currentIndex === undefined){
	// 		currentIndex = this.items.length-1;
	// 	} else if (currentIndex === 0){
	// 		return;
	// 	}

	// 	isRightChild = currentIndex % 2 === 0;

	// 	if (isRightChild){
	// 		parentIndex = (currentIndex - 2) / 2;
	// 	} else {
	// 		parentIndex = (currentIndex - 1) / 2;
	// 	}

	// 	parentItem = this.items[parentIndex];
	// 	currentItem = this.items[currentIndex];

	// 	if (currentItem[this.property] > parentItem[this.property]){
	// 		this.swap(currentIndex, parentIndex);
	// 		this.heapifyUp(parentIndex);
	// 	}
	// };

	// MinHeap.prototype.swap = function swap(firstIndex, secondIndex){
	// 	var temp;

	// 	temp = this.items[firstIndex];
	// 	this.items[firstIndex] = this.items[secondIndex];
	// 	this.items[secondIndex] = temp;
	// };

	// MinHeap.prototype.peek = function peek(){
	// 	if (this.items.length > 0){
	// 		return this.items[0];
	// 	}
	// };

	// MinHeap.prototype.getItemCount = function getItemCount(){
	// 	return this.items.length;
	// };

	// MinHeap.prototype.removeMax = function removeMin(){

	// 	var maxItem;

	// 	if (this.items.length === 1){
	// 		return this.items.pop();
	// 	} else if (this.items.length === 0){
	// 		return;
	// 	}

	// 	this.swap(0, this.items.length -1);
	// 	maxItem = this.items.pop();
	// 	this.heapifyDown();

	// 	return maxItem;
	// };

	// MinHeap.prototype.heapifyDown = function heapifyDown(currentIndex){
	// 	var leftIndex,
	// 		leftItem,
	// 		rightIndex,
	// 		rightItem,
	// 		largerIndex,
	// 		largerItem,
	// 		currentItem;

	// 	currentIndex = currentIndex || 0;
	// 	currentItem = this.items[currentIndex];

	// 	leftIndex = currentIndex * 2 + 1;
	// 	rightIndex = currentIndex * 2 + 2;

	// 	leftItem = this.items[leftIndex];
	// 	rightItem = this.items[rightIndex];

	// 	if (rightItem === undefined || (leftItem[this.property] > rightItem[this.property])){
	// 		largerIndex = leftIndex;
	// 		largerItem = leftItem;
	// 	} else {
	// 		largerIndex = rightIndex;
	// 		largerItem = rightItem;
	// 	}

	// 	if (largerItem !== undefined && (currentItem[this.property] < largerItem[this.property])) {
	// 		this.swap(currentIndex, largerIndex);
	// 		this.heapifyDown(largerIndex);
	// 	} 
	// };
})(angular);