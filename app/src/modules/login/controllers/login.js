'use strict';

var controllersModule = require('./index.js');

controllersModule.controller('LoginController', ControllerDefinition);

function ControllerDefinition($cordovaOauth){
	this.test = 'hello there';

	this.facebookLogin = function() {
        $cordovaOauth.facebook("479269992231053", ["email"]).then(function(result) {
            console.log('result', JSON.stringify(result));
        }, function(error) {
			console.log('error', error);
        });
    };
}