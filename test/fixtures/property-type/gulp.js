'use strict';

const gulp = require('gulp');
const vstsBump = require('gulp-vsts-bump');
const propertyTypeBaseDir = 'property-type/';

gulp.task('bump:prop:default', () => {
    return gulp.src(propertyTypeBaseDir + 'original-string.json', { base: './' })
        .pipe(vstsBump())
        .pipe(gulp.dest('./'));
});

gulp.task('bump:prop:number', () => {
    return gulp.src(propertyTypeBaseDir + 'number.json', { base: './' })
        .pipe(vstsBump({ versionPropertyType: 'number' }))
        .pipe(gulp.dest('./'));
});

gulp.task('bump:prop:string', () => {
    return gulp.src(propertyTypeBaseDir + 'string.json', { base: './' })
        .pipe(vstsBump({ versionPropertyType: 'string' }))
        .pipe(gulp.dest('./'));
});