'use strict';

module.exports = routes;

function routes($stateProvider){
  $stateProvider

    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'main/templates/landing.html',
      data: {
        requireLogin: true
      },
      resolve : {
        profile : function(DataService) {
            console.log('in resolve');
            return DataService.getData();
        }
      }
    });

}
