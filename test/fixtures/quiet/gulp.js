'use strict';

const gulp = require('gulp');
const vstsBump = require('gulp-vsts-bump');
const quietBaseDir = 'quiet/';

gulp.task('bump:quiet:default', () => {
    return gulp.src(quietBaseDir + 'task.json', { base: './' })
        .pipe(vstsBump())
        .pipe(gulp.dest('./'));
});

gulp.task('bump:quiet:true', () => {
    return gulp.src(quietBaseDir + 'task2.json', { base: './' })
        .pipe(vstsBump({ quiet: true }))
        .pipe(gulp.dest('./'));
});