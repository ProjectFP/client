'use strict';

var servicesModule = require('./index');

var data = require('./mockData');

servicesModule.factory('DataService', FactoryDefinition);

function FactoryDefinition(){
	return {
		data: data
	};
}