'use strict';

var controllersModule = require('./index.js');

controllersModule.controller('LoginController', ControllerDefinition);

function ControllerDefinition(FbAuthService){
	this.test = 'hello there';

	this.facebookLogin = function(){
        FbAuthService.login();
    };
}