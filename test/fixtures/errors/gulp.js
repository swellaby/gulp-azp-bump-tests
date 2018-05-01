'use strict';

const gulp = require('gulp');
const vstsBump = require('gulp-vsts-bump');
const errorsBaseDir = 'errors/';

gulp.task('bump:errors:values', () => {
    return gulp.src(errorsBaseDir + 'invalid-values.json', { base: './' })
        .pipe(vstsBump())
        .pipe(gulp.dest('./'));
});

gulp.task('bump:errors:majorkey', () => {
    return gulp.src(errorsBaseDir + 'invalid-major-key.json', { base: './' })
        .pipe(vstsBump())
        .pipe(gulp.dest('./'));
});

gulp.task('bump:errors:versionkey', () => {
    return gulp.src(errorsBaseDir + 'invalid-version-key.json', { base: './' })
        .pipe(vstsBump())
        .pipe(gulp.dest('./'));
});