'use strict';

const gulp = require('gulp');
const azpBump = require('gulp-azp-bump');

gulp.task('bump:tasks:all', () => {
    return gulp.src('tasks/**/task.json', { base: './' })
        .pipe(azpBump())
        .pipe(gulp.dest('./'));
});

gulp.task('bump:tasks:root', () => {
    return gulp.src('task.json')
        .pipe(azpBump())
        .pipe(gulp.dest('./'));
});