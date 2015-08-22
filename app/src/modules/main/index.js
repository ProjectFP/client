'use strict';

angular
  .module('projectfp.main', [
  	'projectfp.main.apis',
  	'projectfp.main.services',
  	'projectfp.main.dashboard',
  	'projectfp.main.scan'])
  
  .config(require('./routes'))
  .config(addHttpInterceptors);

function addHttpInterceptors($httpProvider){
  $httpProvider.interceptors.push('AuthInterceptor');
}

  require('./apis');
  require('./services');
  require('../main-dashboard');
  require('../main-scan');
