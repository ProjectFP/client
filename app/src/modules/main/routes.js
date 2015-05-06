'use strict';

module.exports = routes;

function routes($stateProvider){
  $stateProvider

    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'main/templates/landing.html',
      resolve : {
        data : function(DataService) {
            return DataService.getData();
        }
      }
    });

}
