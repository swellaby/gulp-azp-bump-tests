'use strict';

const assert = require('chai').assert;
const utils = require('./utils');

suite('quiet Suite:', () => {
    test('Should display output by default', () => {
        const result = utils.runGulpTaskWithShelljs('bump:quiet:default');
        assert.deepEqual(result.code, utils.successfulReturnCode);
        const oldVersion = '0.1.1';
        const newVersion = '0.1.2';
        const bumpedType = utils.patchReleaseType;
        const message = utils.buildBumpedMessage(oldVersion, newVersion, bumpedType);
        assert.isTrue(result.stdout.includes(message));
    });

    test('Should not display output when quiet is true', () => {
        const result = utils.runGulpTaskWithShelljs('bump:quiet:true');
        assert.deepEqual(result.code, utils.successfulReturnCode);
        const output = result.stdout;
        assert.isFalse(output.includes('Bumped'));
        assert.isFalse(output.includes('with type:'));
    });
});