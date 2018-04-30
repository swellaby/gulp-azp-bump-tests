'use strict';

const gulp = require('gulp');
const vstsBump = require('gulp-vsts-bump');
const releaseBaseDir = 'release-type/';

gulp.task('bump:release:default', () => {
    return gulp.src(releaseBaseDir + 'task.json', { base: './' })
        .pipe(vstsBump())
        .pipe(gulp.dest('./'));
});

gulp.task('bump:release:patch', () => {
    return gulp.src(releaseBaseDir + 'patch.json', { base: './' })
        .pipe(vstsBump({ type: 'patch' }))
        .pipe(gulp.dest('./'));
});

gulp.task('bump:release:minor', () => {
    return gulp.src(releaseBaseDir + 'minor.json', { base: './' })
        .pipe(vstsBump({ type: 'minor' }))
        .pipe(gulp.dest('./'));
});

gulp.task('bump:release:major', () => {
    return gulp.src(releaseBaseDir + 'major.json', { base: './' })
        .pipe(vstsBump({ type: 'major' }))
        .pipe(gulp.dest('./'));
});