var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var js = require('gulp-browser');
var fs = require('fs');

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
gulp.task('browser', function() {
  var stream = gulp.src('./js/source/*.js')
    .pipe(js.browserify(transforms))
    .pipe(gulp.dest("./js/build/"));
  return stream;
});

gulp.task('default', ['css', 'browser']);
