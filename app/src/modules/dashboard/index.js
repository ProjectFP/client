'use strict';

angular
  .module('projectfp.dashboard', [
  	'projectfp.dashboard.controllers'])
  
  .config(require('./routes'));

require('./controllers');