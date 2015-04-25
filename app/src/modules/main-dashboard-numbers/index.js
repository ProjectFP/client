'use strict';

angular
  .module('projectfp.main.dashboard.numbers', [
  	'projectfp.main.dashboard.numbers.controllers'])
  
  .config(require('./routes'));

require('./controllers');