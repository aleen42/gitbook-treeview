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
        gitbookTreeview.test({}, '#abc\n##cde\n').should.to.equal('<div class="treeview__container"><div class="treeview__container-title"><span class="treeview__main-title">Treeview</span><span class="treeview__copyright">Copyright &#169; aleen42 all right reserved, powered by <a href="https://github.com/aleen42" target="_blank">aleen42</a></span></div><ul>\n<li><a href="#abc">abc</a>\n<ul>\n<li><a href="#cde">cde</a></li>\n</ul></li>\n</ul>\n</div>');
    });

    it('test case 2', function () {
        gitbookTreeview.test({copyright: 'Copyright &#169; alien'}, '#1. abc\n##1.1 cde\n').should.to.equal('<div class="treeview__container"><div class="treeview__container-title"><span class="treeview__main-title">Treeview</span><span class="treeview__copyright">Copyright &#169; alien all right reserved, powered by <a href="https://github.com/aleen42" target="_blank">aleen42</a></span></div><ul>\n<li><a href="#1-abc">abc</a>\n<ul>\n<li><a href="#11-cde">1.1 cde</a></li>\n</ul></li>\n</ul>\n</div>');
    });
});
