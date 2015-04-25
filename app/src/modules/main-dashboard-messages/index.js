'use strict';

angular
  .module('projectfp.main.dashboard.messages', [
  	'projectfp.main.dashboard.messages.controllers'])
  
  .config(require('./routes'));

require('./controllers');