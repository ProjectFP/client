'use strict';

angular
  .module('projectfp.main', [
  	'projectfp.main.dashboard'])
  
  .config(require('./routes'));

  require('../main-dashboard');