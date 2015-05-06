'use strict';

var servicesModule = require('./index');

servicesModule.factory('UtilsService', FactoryDefinition);

function FactoryDefinition(){
	var api;

	api = {
		currentPeriodKey: currentPeriodKey
	};

	return api;

	function currentPeriodKey(){
		var now,
			month,
			year,
			buffer;

		now = new Date;
		month = now.getMonth();
		year = now.getFullYear();

		buffer = [year];

		if (month % 2 === 1){
			buffer.push(pad(month));
			buffer.push(pad(month+1));
		} else {
			buffer.push(pad(month-1));
			buffer.push(pad(month));
		}

		return buffer.join('');
	}

	function pad(number, totalDigits, paddingChar){
		var string,
			buffer;

		paddingChar = paddingChar || '0';
		totalDigits = totalDigits || 2;

		string = number.toString();
		buffer = [string];

		for (var i = string.length; i < totalDigits; i++) {
			buffer.unshift(paddingChar);
		}

		return buffer.join('');
	}
}