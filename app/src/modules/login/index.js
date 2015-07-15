'use strict';

angular
  .module('projectfp.login', [
    'projectfp.login.controllers',
    'projectfp.login.services',
    'projectfp.login.constants'])

  .config(require('./routes'));

require('./controllers');
require('./services');
require('./constants');