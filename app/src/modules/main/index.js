'use strict';

angular
  .module('projectfp.main', [
	'projectfp.main.services',
	'projectfp.main.dashboard',
	'projectfp.main.scan'])
  
  .config(require('./routes'));

  require('./services');
  require('../main-dashboard');
  require('../main-scan');