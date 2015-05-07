'use strict';

var controllersModule = require('./index.js');

controllersModule.controller('DashboardController', ControllerDefinition);

function ControllerDefinition(DataService, UtilsService){
	this.currentPeriodKey = UtilsService.currentPeriodKey();
	this.currentPeriodNumbers = DataService.currentPeriodNumbers();
	this.currentPeriodCount = DataService.currentPeriodCount();
	this.previousPeriodCount = DataService.previousPeriodCount();
}