'use strict';

angular
  .module('projectfp.main.dashboard.periods', [
  	'projectfp.main.dashboard.periods.controllers'])
  
  .config(require('./routes'));

require('./controllers');