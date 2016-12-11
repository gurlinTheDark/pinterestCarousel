var gulp = require('gulp');
var shell = require('gulp-shell')

gulp.task('runapp', function() {
  shell.task('npm start')();
});
