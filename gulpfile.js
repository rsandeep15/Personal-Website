var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var js = require('gulp-browser');
var fs = require('fs');
var minify = require('gulp-uglify');
var pump = require('pump');
var envify = require('gulp-envify');
var babel = require('gulp-babel');
const webpack = require('webpack-stream');

gulp.task('prod', function(cb) {
  process.env.NODE_ENV = 'production';
  cb();
});

gulp.task('css', function() {
  return gulp.src('css/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest("css/"));
});

var environment = {
  NODE_ENV: 'production'
};
gulp.task('browser', function() {
  var stream = gulp.src('./js/source/*.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(envify(environment))
    .pipe(gulp.dest("./js/build/"));
  return stream;
});
gulp.task('compress', function(cb) {
  pump([
    gulp.src("./js/build/*.js"),
    minify(),
    gulp.dest('./js/dist')
  ], cb);
});

gulp.task('default', gulp.series(gulp.parallel('prod', 'css', 'browser'), 'compress'));
