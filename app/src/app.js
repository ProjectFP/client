'use strict';

angular
  .module('projectfp', [
    'ionic',
    'ngCordova',
    'projectfp.login',
    'projectfp.dashboard'])

  .config(defaultRoute);

function defaultRoute($urlRouterProvider){
  $urlRouterProvider.otherwise('/login');
}

require('./modules/templatecache');
require('./modules/login');
require('./modules/dashboard');