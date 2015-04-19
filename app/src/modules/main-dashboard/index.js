'use strict';

angular
  .module('projectfp.main.dashboard', [
  	'projectfp.main.dashboard.home'])
  
  .config(require('./routes'));

require('../main-dashboard-home');