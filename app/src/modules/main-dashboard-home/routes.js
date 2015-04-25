'use strict';

module.exports = routes;

function routes($stateProvider){
  $stateProvider

    .state('main.dashboard.home', {
      url: '',
      templateUrl: 'main-dashboard-home/templates/landing.html',
      controller: 'DashboardController as DashboardController'
    });

}
