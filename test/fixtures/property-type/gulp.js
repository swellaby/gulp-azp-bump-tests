'use strict';

const gulp = require('gulp');
const azpBump = require('gulp-azp-bump');
const propertyTypeBaseDir = 'property-type/';

gulp.task('bump:prop:default', () => {
    return gulp.src(propertyTypeBaseDir + 'original-string.json', { base: './' })
        .pipe(azpBump())
        .pipe(gulp.dest('./'));
});

gulp.task('bump:prop:number', () => {
    return gulp.src(propertyTypeBaseDir + 'number.json', { base: './' })
        .pipe(azpBump({ versionPropertyType: 'number' }))
        .pipe(gulp.dest('./'));
});

gulp.task('bump:prop:string', () => {
    return gulp.src(propertyTypeBaseDir + 'string.json', { base: './' })
        .pipe(azpBump({ versionPropertyType: 'string' }))
        .pipe(gulp.dest('./'));
});