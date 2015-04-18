'use strict';

var controllersModule = require('./index.js');

controllersModule.controller('SignupController', ControllerDefinition);

function ControllerDefinition($ionicHistory){
	this.signup = 'signup';
	$ionicHistory.viewHistory();

	this.goBack = function(){
		console.log('goback');
		$ionicHistory.goBack();
	};
}