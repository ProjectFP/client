'use strict';

var controllersModule = require('./index.js');

controllersModule.controller('LoginController', LoginController);

function LoginController(){
	this.test = 'hello there';
}