'use strict';

var servicesModule = require('./index');

servicesModule.factory('ionicUserRegistration', FactoryDefinition);

function FactoryDefinition($ionicUser, $ionicPush){
    
    var api;

    api = {
    	registerUser: registerUser
    };

    return api;

    function registerUser(profile){
    	var user = $ionicUser.get();

    	user.user_id = profile.data._id;

    	angular.extend(user, {
    		firstName: profile.data.firstName,
    		lastName: profile.data.lastName,
    		fullName: profile.data.name,
    		email: profile.data.email
    	});

	    $ionicUser.identify(user).then(function(){
	    });


	    console.log('identified - registering');

        $ionicPush.register({
          canShowAlert: true, //Can pushes show an alert on your screen?
          canSetBadge: true, //Can pushes update app icon badges?
          canPlaySound: true, //Can notifications play a sound?
          canRunActionsOnWake: true, //Can run actions outside the app,
          onNotification: function(notification) {
            // Handle new push notifications here
            console.log('Received Notification: ',notification);
            return true;
          }
        });
    }
}