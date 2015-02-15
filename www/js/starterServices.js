(function(angular){
'use strict';

	angular
		.module('starter.services', [])

		.factory('fileSendService', fileSendService);

	fileSendService.$inject = ['$http'];

	function fileSendService($http){
		var api;

		api = {
			sendToServer: sendToServer
		};

		return api;

		function sendToServer(data, serverUrl){
			serverUrl = serverUrl || 'http://192.168.1.208:8000/upload';
			return $http.post(serverUrl, {
				image: data
			});
		}
	}

})(angular);