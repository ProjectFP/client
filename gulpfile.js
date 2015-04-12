//JS Linting
//Sass compilation
//Karma Testing
//Code Coverage  https://github.com/karma-runner/karma-coverage/issues/87

//Browserify
//Templatecache

'use strict';
    
var gulp           = require('gulp'),
    sass           = require('gulp-sass'),
    minifyCss      = require('gulp-minify-css'),
    rename         = require('gulp-rename'),
    karma          = require('karma').server,
    jshint         = require('gulp-jshint'),
    jshintReporter = require('jshint-stylish'),
    browserify     = require('browserify'),
    gutil          = require('gulp-util'),
    source         = require('vinyl-source-stream');



var config = {

  sass: {
    src: ['sass/**/*.scss'],
    dist: 'www/css'
  },

  js: {
    src: ['app/src/**/*.js']
  },

  karma : {
    testFiles : ['app/test/**/*.test.js'],
    configFile : 'app/test/karma.config.js'
  },

  filesToCopy: {
    ionicFonts: {
      src: 'bower_components/ionic/fonts/*',
      dist: 'www/fonts'
    },
    index: {
      src: 'app/src/index.html',
      dist: 'www/'
    }
  },

  browserify : {
    src : './app/src/app.js',
    outputName : 'site.js',
    dest : 'www/js/'
  }

};

function onError(err) {
    gutil.beep();
    gutil.log(gutil.colors.red(err));

    this.emit('end');
}


gulp.task('browserify', ['lint'], function() {
    return browserify(config.browserify.src)
        .bundle()
        .on('error', onError)
        .pipe(source(config.browserify.outputName))
        .pipe(gulp.dest(config.browserify.dest));
});

gulp.task('copyFiles', function(){
  for (var key in config.filesToCopy){
    gulp
      .src(config.filesToCopy[key].src)
      .pipe(gulp.dest(config.filesToCopy[key].dist));
  }
});

gulp.task('sass', function(done) {
  gulp.src(config.sass.src)
    .pipe(sass())
    .pipe(gulp.dest(config.sass.dist))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(config.sass.dist))
    .on('end', done);
});

gulp.task('karma', function(done){
  karma.start({
    configFile: __dirname + '/' + config.karma.configFile,
    singleRun: true
  }, done);
});

gulp.task('lint', function(){
  gulp.src(config.js.src)
    .pipe(jshint())
    .pipe(jshint.reporter(jshintReporter));

});

gulp.task('watch', function() {
  gulp.watch(config.sass.src, ['sass']);
});

gulp.task('default', ['sass']);
