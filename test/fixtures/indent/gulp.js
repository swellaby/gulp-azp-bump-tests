'use strict';

const gulp = require('gulp');
const vstsBump = require('gulp-vsts-bump');
const indentBaseDir = 'indent/';

gulp.task('bump:indent:default', () => {
    return gulp.src(indentBaseDir + 'task.json', { base: './' })
        .pipe(vstsBump())
        .pipe(gulp.dest('./'));
});

gulp.task('bump:indent:tab', () => {
    return gulp.src(indentBaseDir + 'tab.json', { base: './' })
        .pipe(vstsBump({ indent: '\t' }))
        .pipe(gulp.dest('./'));
});

gulp.task('bump:indent:twospace', () => {
    return gulp.src(indentBaseDir + 'twospace.json', { base: './' })
        .pipe(vstsBump({ indent: 2 }))
        .pipe(gulp.dest('./'));
});

gulp.task('bump:indent:fourspace', () => {
    return gulp.src(indentBaseDir + 'fourspace.json', { base: './' })
        .pipe(vstsBump({ indent: 4 }))
        .pipe(gulp.dest('./'));
});