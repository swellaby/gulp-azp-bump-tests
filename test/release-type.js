'use strict';

const assert = require('chai').assert;
const utils = require('./utils');

suite('release-type Suite:', () => {
    const releaseTypeDir = utils.testContextDir + 'release-type/';
    test('Should bump patch by default', () => {
        const result = utils.runGulpTaskWithShelljs('bump:release:default');
        assert.deepEqual(result.code, utils.successfulReturnCode);
        const task = utils.getTaskFromFile(releaseTypeDir + 'task.json');
        assert.deepEqual(task.version.Major, 0);
        assert.deepEqual(task.version.Minor, 1);
        assert.deepEqual(task.version.Patch, 2);
    });

    test('Should bump patch when specified', () => {
        const result = utils.runGulpTaskWithShelljs('bump:release:patch');
        assert.deepEqual(result.code, utils.successfulReturnCode);
        const task = utils.getTaskFromFile(releaseTypeDir + 'patch.json');
        assert.deepEqual(task.version.Major, 0);
        assert.deepEqual(task.version.Minor, 1);
        assert.deepEqual(task.version.Patch, 5);
    });

    test('Should correctly bump minor version', () => {
        const result = utils.runGulpTaskWithShelljs('bump:release:minor');
        assert.deepEqual(result.code, utils.successfulReturnCode);
        const task = utils.getTaskFromFile(releaseTypeDir + 'minor.json');
        assert.deepEqual(task.version.Major, 0);
        assert.deepEqual(task.version.Minor, 3);
        assert.deepEqual(task.version.Patch, 0);
    });

    test('Should correctly bump major version', () => {
        const result = utils.runGulpTaskWithShelljs('bump:release:major');
        assert.deepEqual(result.code, utils.successfulReturnCode);
        const task = utils.getTaskFromFile(releaseTypeDir + 'major.json');
        assert.deepEqual(task.version.Major, 2);
        assert.deepEqual(task.version.Minor, 0);
        assert.deepEqual(task.version.Patch, 0);
    });
});