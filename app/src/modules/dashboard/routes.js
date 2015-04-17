'use strict';

module.exports = routes;

function routes($stateProvider){
  $stateProvider

    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'dashboard/templates/landing.html',
      controller: 'DashboardController as DashboardController'
    });

}
