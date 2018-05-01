'use strict';

const gulp = require('gulp');
const vstsBump = require('gulp-vsts-bump');
/* eslint-disable no-unused-vars */
const tasksGlob = 'tasks/**/task.json';
const indentGulpTasks = require('./indent/gulp');
const propertyTypeGulpTasks = require('./property-type/gulp');
const quietGulpTasks = require('./quiet/gulp');
const releaseGulpTasks = require('./release-type/gulp');
/* eslint-enable no-unused-vars */

gulp.task('bump:root', () => {
    return gulp.src('task.json')
        .pipe(vstsBump())
        .pipe(gulp.dest('./'));
});

