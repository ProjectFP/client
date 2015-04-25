'use strict';

angular
  .module('projectfp.main', [
	'projectfp.main.services',
	'projectfp.main.dashboard'])
  
  .config(require('./routes'));

  require('./services');
  require('../main-dashboard');