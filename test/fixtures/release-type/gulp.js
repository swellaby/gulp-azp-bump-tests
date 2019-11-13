'use strict';

const gulp = require('gulp');
const azpBump = require('gulp-azp-bump');
const releaseBaseDir = 'release-type/';

gulp.task('bump:release:default', () => {
    return gulp.src(releaseBaseDir + 'task.json', { base: './' })
        .pipe(azpBump())
        .pipe(gulp.dest('./'));
});

gulp.task('bump:release:patch', () => {
    return gulp.src(releaseBaseDir + 'patch.json', { base: './' })
        .pipe(azpBump({ type: 'patch' }))
        .pipe(gulp.dest('./'));
});

gulp.task('bump:release:minor', () => {
    return gulp.src(releaseBaseDir + 'minor.json', { base: './' })
        .pipe(azpBump({ type: 'minor' }))
        .pipe(gulp.dest('./'));
});

gulp.task('bump:release:major', () => {
    return gulp.src(releaseBaseDir + 'major.json', { base: './' })
        .pipe(azpBump({ type: 'major' }))
        .pipe(gulp.dest('./'));
});