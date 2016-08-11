/***********************************************************************
 *                                                                   _
 *       _____  _                           ____  _                 |_|
 *      |  _  |/ \   ____  ____ __ ___     / ___\/ \   __   _  ____  _
 *      | |_| || |  / __ \/ __ \\ '_  \ _ / /    | |___\ \ | |/ __ \| |
 *      |  _  || |__. ___/. ___/| | | ||_|\ \___ |  _  | |_| |. ___/| |
 *      |_/ \_|\___/\____|\____||_| |_|    \____/|_| |_|_____|\____||_|
 *
 *      ================================================================
 *                 More than a coder, More than a designer
 *      ================================================================
 *
 *
 *      - Document: index.js
 *      - Author: aleen42
 *      - Description: the main entrance for tests
 *      - Create Time: Aug 21st, 2016
 *      - Update Time: Aug 21st, 2016
 *
 *
 **********************************************************************/

const gitbookTreeview = require('./../lib');

/**
 * [should: test framework module]
 * @type {Object}
 */
const should = require('chai').should();

describe('tests', function () {
    it('test case 1', function () {
        gitbookTreeview.test({}).should.to.contain('');
    });
});
