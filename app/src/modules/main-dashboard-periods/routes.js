'use strict';

module.exports = routes;

function routes($stateProvider){
  $stateProvider

    .state('main.dashboard.periods', {
      url: '/periods?from&to',
      templateUrl: 'main-dashboard-periods/templates/landing.html',
      controller: 'PeriodsController as PeriodsController'
    });
}
