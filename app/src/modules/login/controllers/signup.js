'use strict';

var controllersModule = require('./index.js');

controllersModule.controller('SignupController', SignupController);

function SignupController($ionicHistory){
	this.signup = 'signup';
	$ionicHistory.viewHistory();

	this.goBack = function(){
		console.log('goback');
		$ionicHistory.goBack();
	};
}