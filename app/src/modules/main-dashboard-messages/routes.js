'use strict';

module.exports = routes;

function routes($stateProvider){
  $stateProvider

    .state('main.dashboard.messages', {
      url: '/messages',
      templateUrl: 'main-dashboard-messages/templates/landing.html',
      controller: 'MessagesController as MessagesController'
    });

}
