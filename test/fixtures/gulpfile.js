'use strict';

const gulp = require('gulp');
const vstsBump = require('gulp-vsts-bump');

gulp.task('test', () => {
    return gulp.src('two/*.json', { base: './' })
        .pipe(vstsBump())
        .pipe(gulp.dest('./'));
});

gulp.task('foo', () => {
    console.log('Hello world!');
});