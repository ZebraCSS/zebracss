var gulp = require('gulp'),
    less = require('gulp-less'),
    rename = require('gulp-rename'),
    path = require('path');

gulp.task('less', function () {
    gulp.src(path.join('.', 'index.less'))
        .pipe(less())
        .pipe(rename('zebra.css'))
        .pipe(gulp.dest(path.join('.', 'build')));
});

gulp.task('build', ['less']);
gulp.task('default', ['build']);