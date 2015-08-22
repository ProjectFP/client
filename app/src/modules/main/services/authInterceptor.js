'use strict';

var servicesModule = require('./index');

servicesModule.factory('AuthInterceptor', FactoryDefinition);

function FactoryDefinition(StorageService){
    var api;

    api = {
        request: attachTokenToRequests
    };

    return api;

    function attachTokenToRequests(config) { 

        var token;

        token = StorageService.getToken();

        if (token !== null) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }

        return config;
    }

    // service.responseError = function(response) {
    //     if (response.status === 401) {
    //         $rootScope.$broadcast('unauthorized');
    //     }
    //     return response;
    // };
}

