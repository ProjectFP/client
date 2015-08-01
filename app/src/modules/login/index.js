'use strict';

angular
  .module('projectfp.login', [
    'projectfp.login.controllers',
    'projectfp.login.services',
    'projectfp.login.constants',
    'projectfp.login.apis'])

  .config(require('./routes'));

require('./controllers');
require('./services');
require('./constants');
require('./apis');