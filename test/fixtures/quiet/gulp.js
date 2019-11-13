'use strict';

const gulp = require('gulp');
const azpBump = require('gulp-azp-bump');
const quietBaseDir = 'quiet/';

gulp.task('bump:quiet:default', () => {
    return gulp.src(quietBaseDir + 'task.json', { base: './' })
        .pipe(azpBump())
        .pipe(gulp.dest('./'));
});

gulp.task('bump:quiet:true', () => {
    return gulp.src(quietBaseDir + 'task2.json', { base: './' })
        .pipe(azpBump({ quiet: true }))
        .pipe(gulp.dest('./'));
});