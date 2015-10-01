'use strict';

var controllersModule = require('./index.js');

controllersModule.controller('LoginController', ControllerDefinition);

function ControllerDefinition(FbAuthService, AuthApis, StorageService, $state, $rootScope, $ionicUser, $ionicPush){

    var vm = this;

	vm.test = 'hello there';

	vm.facebookLogin = function(){
        FbAuthService
        	.login()

        	.then(AuthApis.login)

        	.then(function(response){

        		StorageService.setToken(response.data.token);
        	})

        	.then(function(response){
        		$state.go('main.dashboard.home');
        	});
    };

    vm.identifyUser = function(){

        // console.log('Ionic User: Identifying with Ionic User service');

        // var user = $ionicUser.get();

        // console.log('user', $ionicUser.get.toString());

        // if(!user.user_id) {
        //   // Set your user_id here, or generate a random one.
        //   user.user_id = $ionicUser.generateGUID();
        // }

        // // Add some metadata to your user object.
        // angular.extend(user, {
        //   name: 'Jimmy Tsao',
        //   bio: 'Jimmy\'s Bio'
        // });

        // // Identify your user with the Ionic User Service
        // $ionicUser.identify(user).then(function(){
        //   vm.identified = true;
        //   alert('Identified user ' + user.name + '\n ID ' + user.user_id);
        // });

    };

    vm.pushRegister = function(){
    
        // console.log('Ionic Push: Registering user');

        // // Register with the Ionic Push service.  All parameters are optional.
        // $ionicPush.register({
        //   canShowAlert: true, //Can pushes show an alert on your screen?
        //   canSetBadge: true, //Can pushes update app icon badges?
        //   canPlaySound: true, //Can notifications play a sound?
        //   canRunActionsOnWake: true, //Can run actions outside the app,
        //   onNotification: function(notification) {
        //     // Handle new push notifications here
        //     console.log('Received Notification: ',notification);
        //     return true;
        //   }
        // });
    };
}