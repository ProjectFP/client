'use strict';
var istanbul = require('browserify-istanbul');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../../',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['browserify', 'mocha', 'chai'],

    // list of files / patterns to load in the browser
    files: [
      'bower_components/ionic/js/ionic.bundle.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'app/test/modules/**/*.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'app/test/modules/**/*.js': ['browserify', 'coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    browserify: {
      debug: true,
      transform: [
        istanbul({
          ignore: ['**/node_modules/**', '**/bower_components/**','**/test/**']
        })
      ]
    },

    // coverage reporter
    coverageReporter: {
        reporters: [
            {
                type : 'text',
                dir : 'app/test/coverage/',
                includeAllSources: true
            },
            {
                type : 'html',
                dir : 'app/test/coverage/',
                includeAllSources: true
            }
        ]
    },

    // plugins: ['karma-coverage'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_ERROR,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};

