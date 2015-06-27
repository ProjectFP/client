'use strict';

var servicesModule = require('./index');

servicesModule.factory('ImageUploadService', FactoryDefinition);

function FactoryDefinition($http){
	var api;

	api = {
		uploadImage: uploadImage
	};

	return api;

	//http://stackoverflow.com/questions/12391628/how-can-i-upload-an-embedded-image-with-javascript
	function uploadImage(croppedClassName){
		var canvas,
			dataUrl,
			blob,
			form;

		croppedClassName = croppedClassName || 'cropped-image';

		canvas = document.getElementsByClassName(croppedClassName)[0];
		dataUrl = canvas.toDataURL('image/jpeg', 1);
		blob = dataUriToBlob(dataUrl);

		form = new FormData();
		form.append('upload', blob);

		console.log('Form', form);

        //https://uncorkedstudios.com/blog/multipartformdata-file-upload-with-angularjs
        return $http.post('http://192.168.1.208:3000/upload', form, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        }).success(function(data, status, headers, config){
            console.log('success', status, data.value);
            return data.value;
        }).error(function(data, status, headers, config){
            console.log('error', status, headers, config);
        });

	}

    function dataUriToBlob(dataURI) {
        // serialize the base64/URLEncoded data
        var byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0) {
            byteString = atob(dataURI.split(',')[1]);
        }
        else {
            byteString = decodeURI(dataURI.split(',')[1]);
        }

        // parse the mime type
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

        // construct a Blob of the image data
        var array = [];
        for(var i = 0; i < byteString.length; i++) {
            array.push(byteString.charCodeAt(i));
        }
        return new Blob(
            [new Uint8Array(array)],
            {type: mimeString}
        );
    }
}