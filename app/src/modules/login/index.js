'use strict';

angular
  .module('projectfp.login', [
    'projectfp.login.controllers'])

  .config(require('./routes'));

require('./controllers');