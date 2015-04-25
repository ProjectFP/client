'use strict';

var servicesModule = require('./index');

var data = require('./mockData');

servicesModule.service('DataService', ServiceDefinition);

function ServiceDefinition(){
	return {
		data: data
	};
}