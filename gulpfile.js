var gulp = require('gulp');
const minify = require('gulp-uglify');
var pump = require('pump');
const envify = require('gulp-envify');
const webpack = require('webpack-stream');
const del = require('del');

gulp.task('prod', function(cb) {
  process.env.NODE_ENV = 'production';
  cb();
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

gulp.task('clean', function(cb) {
  del(['js/dist']);
  cb();
});

gulp.task('default',
gulp.series(gulp.parallel('prod', 'browser'), 'compress'));
