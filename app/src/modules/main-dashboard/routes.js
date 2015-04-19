'use strict';

module.exports = routes;

function routes($stateProvider){
  $stateProvider

    .state('main.dashboard', {
      url: '/dashboard',
      abstract: true,
      templateUrl: 'main-dashboard/templates/landing.html'
    });

}
