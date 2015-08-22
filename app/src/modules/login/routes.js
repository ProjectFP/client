'use strict';

module.exports = routes;

function routes($stateProvider){
  $stateProvider

    .state('login', {
      url: '/login',
      data: {
        requireLogin: false
      },
      templateUrl: 'login/templates/landing.html',
      controller: 'LoginController as LoginController'
    });
}
