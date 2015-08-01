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
    })

    .state('signup', {
      url: '/signup',
      data: {
        requireLogin: false
      },
      templateUrl: 'login/templates/signup.html',
      controller: 'SignupController as SignupController'
    });
}
