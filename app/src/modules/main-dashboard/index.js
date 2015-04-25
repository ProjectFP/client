'use strict';

angular
  .module('projectfp.main.dashboard', [
	'projectfp.main.dashboard.home',
	'projectfp.main.dashboard.messages',
	'projectfp.main.dashboard.periods',
	'projectfp.main.dashboard.numbers'
])
  
  .config(require('./routes'));

require('../main-dashboard-home');
require('../main-dashboard-messages');
require('../main-dashboard-periods');
require('../main-dashboard-numbers');