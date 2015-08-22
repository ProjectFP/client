'use strict';

angular
  .module('projectfp.common', [
    'projectfp.common.services',
    'projectfp.common.constants']);

require('./services');
require('./constants');