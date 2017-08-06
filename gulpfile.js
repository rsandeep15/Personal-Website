var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var js = require('gulp-browser');
var fs = require('fs');
var minify = require('gulp-uglify');
var pump = require('pump');
var envify = require('gulp-envify');

gulp.task('prod', function() {
  process.env.NODE_ENV = 'production';
});

gulp.task('css', function() {
  return gulp.src('css/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest("css/"));
});

let transforms = [
{
  transform: "babelify",
  options: {presets: ["es2015", "react"]}
}
];
var environment = {
  NODE_ENV: 'production'
};
gulp.task('browser', function() {
  var stream = gulp.src('./js/source/*.js')
    .pipe(js.browserify(transforms))
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

gulp.task('default', ['prod', 'css', 'browser', 'compress']);
