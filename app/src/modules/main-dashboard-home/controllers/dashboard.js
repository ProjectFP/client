'use strict';

var controllersModule = require('./index.js');

controllersModule.controller('DashboardController', ControllerDefinition);

function ControllerDefinition(profile){
	this.profileData = profile;
}