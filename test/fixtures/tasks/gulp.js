'use strict';

const gulp = require('gulp');
const vstsBump = require('gulp-vsts-bump');

gulp.task('bump:tasks:all', () => {
    return gulp.src('tasks/**/task.json', { base: './' })
        .pipe(vstsBump())
        .pipe(gulp.dest('./'));
});

gulp.task('bump:tasks:root', () => {
    return gulp.src('task.json')
        .pipe(vstsBump())
        .pipe(gulp.dest('./'));
});