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
    source         = require('vinyl-source-stream'),
    _              = require('lodash'),
    browserSync    = require('browser-sync'),
    templateCache  = require('gulp-angular-templatecache');

var config = {

  sass: {
    src: ['sass/**/*.scss'],
    dist: 'www/css'
  },

  js: {
    src: ['app/src/**/*.js', '!app/src/archive/**/*']
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

  browserify : [
    {
      src : './app/src/app.js',
      outputName : 'app.js',
      dest : 'www/js/'
    },
    {
      src : './app/src/modules/vendor/vendor.js',
      outputName : 'vendor.js',
      dest : 'www/js/'
    }
  ],

  browserSync : {
    js : 'www/js/app.js',
    css : 'www/css/styles.min.css',
    index: 'www/index.html'
  },

  templates: {
    //All html files in the modules folder
    src: ['app/src/modules/**/*.html'],
    //Destination of templateCached file
    dest: 'app/src/modules/templateCache',
    //Name of templateCached file
    templateCacheName: 'index.js'
  },

};

function onError(err) {
    gutil.beep();
    gutil.log(gutil.colors.red(err));

    this.emit('end');
}


gulp.task('browserify', ['lint'], function() {

    config.browserify.forEach(function(item){
      browserify(item.src)
          .bundle()
          .on('error', onError)
          .pipe(source(item.outputName))
          .pipe(gulp.dest(item.dest));
      });
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

gulp.task('build', function(){
  gulp.start('sass');
  gulp.start('copyFiles');
  gulp.start('browserify');
  gulp.start('templateCache');
});

gulp.task('watch', ['build'], function() {

  gulp.watch(config.sass.src, ['sass']);
  // gulp.watch(config.js.src, ['browserify', 'karma']);
  gulp.watch(config.js.src, ['browserify']);
  gulp.watch(_.pluck(config.filesToCopy, 'src'), ['copyFiles']);
  gulp.watch(config.templates.src, ['templateCache']);

  gulp.start('browser-sync');
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir : 'www',
      port: 3030
    },
    files: [
      config.browserSync.js,
      config.browserSync.css,
      config.browserSync.index
    ]
  });
});

gulp.task('templateCache', function(){
  gulp
    .src(config.templates.src)
    .pipe(templateCache(config.templates.templateCacheName,{module: 'projectfp'}))
    .pipe(gulp.dest(config.templates.dest));
});

gulp.task('default', ['watch']);
