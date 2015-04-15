'use strict';

module.exports = routes;

function routes($stateProvider){
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'login/templates/landing.html',
      controller: 'LoginController as LoginController'
    });
}
