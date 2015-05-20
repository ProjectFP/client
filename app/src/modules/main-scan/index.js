'use strict';

angular
  .module('projectfp.main.scan', [
  	'projectfp.main.scan.controllers',
  	'projectfp.main.scan.services',
  	'projectfp.main.scan.directives'])
  
  .config(require('./routes'));

require('./controllers');
require('./services');
require('./directives');

