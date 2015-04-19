'use strict';

angular
  .module('projectfp.main.dashboard.home', [
  	'projectfp.main.dashboard.home.controllers'])
  
  .config(require('./routes'));

require('./controllers');