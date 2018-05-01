'use strict';

const assert = require('chai').assert;
const utils = require('./utils');

suite('indent Suite:', () => {
    const indentDir = utils.testContextDir + 'indent/';
    test('Should set indent to two spaces by default', () => {
        const result = utils.runGulpTaskWithShelljs('bump:indent:default');
        assert.deepEqual(result.code, utils.successfulReturnCode);
        const bumpedTaskFilePath = indentDir + 'task.json';
        const bumpedTask = utils.getTaskFromFile(bumpedTaskFilePath);
        assert.deepEqual(bumpedTask.version.Major, 0);
        assert.deepEqual(bumpedTask.version.Minor, 1);
        assert.deepEqual(bumpedTask.version.Patch, 2);
        // const bumpedTaskContents = utils.getFileContents(bumpedTaskFilePath);
        // console.log('bumped task file contents: ' + bumpedTaskContents);
    });

    test('Should set indent to tab when specified', () => {
        const result = utils.runGulpTaskWithShelljs('bump:indent:tab');
        assert.deepEqual(result.code, utils.successfulReturnCode);
        const bumpedTaskFilePath = indentDir + 'tab.json';
        const expectedTaskFilePath = indentDir + 'expected/' + 'tab.json';
        const bumpedTaskFileContents = utils.getFileContents(bumpedTaskFilePath);
        const expectedTaskFileContents = utils.getFileContents(expectedTaskFilePath);
        assert.deepEqual(bumpedTaskFileContents, expectedTaskFileContents);
    });

    test('Should set indent to two spaces when specified', () => {
        const result = utils.runGulpTaskWithShelljs('bump:indent:twospace');
        assert.deepEqual(result.code, utils.successfulReturnCode);
        const bumpedTaskFilePath = indentDir + 'twospace.json';
        const expectedTaskFilePath = indentDir + 'expected/' + 'twospace.json';
        const bumpedTaskFileContents = utils.getFileContents(bumpedTaskFilePath);
        const expectedTaskFileContents = utils.getFileContents(expectedTaskFilePath);
        assert.deepEqual(bumpedTaskFileContents, expectedTaskFileContents);
    });

    test('Should set indent to four spaces when specified', () => {
        const result = utils.runGulpTaskWithShelljs('bump:indent:fourspace');
        assert.deepEqual(result.code, utils.successfulReturnCode);
        const bumpedTaskFilePath = indentDir + 'fourspace.json';
        const expectedTaskFilePath = indentDir + 'expected/' + 'fourspace.json';
        const bumpedTaskFileContents = utils.getFileContents(bumpedTaskFilePath);
        const expectedTaskFileContents = utils.getFileContents(expectedTaskFilePath);
        assert.deepEqual(bumpedTaskFileContents, expectedTaskFileContents);
        const bumpedTask = JSON.parse(bumpedTaskFileContents.toString());
        assert.deepEqual(bumpedTask.version.Major, 0);
        assert.deepEqual(bumpedTask.version.Minor, 1);
        assert.deepEqual(bumpedTask.version.Patch, 2);
    });
});