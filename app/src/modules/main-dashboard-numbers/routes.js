'use strict';

module.exports = routes;

function routes($stateProvider){
  $stateProvider

    .state('main.dashboard.numbers', {
      url: '/periods/:id/numbers',
      templateUrl: 'main-dashboard-numbers/templates/landing.html',
      controller: 'NumbersController as NumbersController'
    });
}
