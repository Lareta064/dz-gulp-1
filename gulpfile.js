var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');



gulp.task('styles', function() {
    return gulp.src('./app/less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.stream());
});


gulp.task('default', ['styles']);
