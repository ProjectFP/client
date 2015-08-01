'use strict';

var constantsModule = require('./index.js');

var ipAddress = 'http://192.168.1.208:3000';

constantsModule.constant("AuthConstants", {
    "fbClientId": '479269992231053',
    "fbScope" : [ "public_profile", "email" ],
    "signupUrl": ipAddress + '/signup',
    "loginUrl" : ipAddress + '/login'
});
