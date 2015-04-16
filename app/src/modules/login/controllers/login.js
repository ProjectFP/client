'use strict';

var controllersModule = require('./index.js');

controllersModule.controller('LoginController', LoginController);

function LoginController($cordovaOauth){
	this.test = 'hello there';
}