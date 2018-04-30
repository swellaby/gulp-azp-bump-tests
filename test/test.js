'use strict';

const assert = require('chai').assert;
const shelljs = require('shelljs');

suite('test Suite:', () => {
    setup(() => {
        // step 1: copy fixture content to target run directory.
        // step 2: cd into target run directory
        // step 3: run gulp task to bump file(s)
        // step 4: validate files
        shelljs.cd('test/fixtures');
    });
    test('first dummy test', () => {
        assert.isTrue(true);
        const result = shelljs.exec('dir && npm run gulp -- test');
        console.log('Output: ' + result.stdout);
        console.log('return code: ' + result.code);
        assert.isNotNull(result);
    });
});