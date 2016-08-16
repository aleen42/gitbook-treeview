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
 *      - Description: the main entrance for page-treeview
 *      - Create Time: Apr 11st, 2016
 *      - Update Time: Apr 11st, 2016
 *
 *
 **********************************************************************/

/**
 * [replaceAll: replace all match sub-string in a string]
 * @param  {[type]} search      [description]
 * @param  {[type]} replacement [description]
 * @return {[type]}             [description]
 */
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

/**
 * [leftTrim: trim left space]
 * @return {[type]} [description]
 */
String.prototype.leftTrim = function() {
    return this.replace(/^\s+/, '');
}

/**
 * [removeMarkdown: convert markdown into plain text]
 * @type {[type]}
 */
const RemoveMarkdown = require('remove-markdown');

/**
 * [remarkable: convert markdown into a html]
 * @type {[type]}
 */
const Remarkable = require('remarkable');

/**
 * [main module]
 * @type {Object}
 */
const pageTreeview = module.exports = {
	/** Map of new style */
	book: {
		assets: './assets',
		css: [
            'style.css'
        ]
	},

    testRemove: function (str) {
        console.log(RemoveMarkdown(str));
    },

    /** Map of hooks */
    hooks: {
    	'page:before': function (page) {
    		/**
    		 * [defaultOption: default option]
    		 * @type {Object}
    		 */
    		const defaultOption = {
                'style': 'markdown',
                'copyright': 'Copyright &#169; aleen42'
            };

    		/** if users have its option, and then combine it with default options */
			if (this.config.get('pluginsConfig')['page-treeview']) {
			// @deprecated
			// if (this.options.pluginsConfig['page-treeview']) {
				for (var item in defaultOption) {
    				/** special for copyright */
					// @deprecated
					// defaultOption[item] = this.options.pluginsConfig['page-treeview'][item] || defaultOption[item];
					defaultOption[item] = this.config.get('pluginsConfig')['page-treeview'][item] || defaultOption[item];
    			}
    		}

            console.log('======== page-treeview debug ===========');
            console.log(pageTreeview.initHeaders(page.content, defaultOption.style));
            console.log('======== page-treeview debug ===========');
            console.log();
            console.log();

            var insertTreeview = '<div class="treeview__container"><div class="treeview__container-title"><span class="treeview__main-title">Treeview</span><span class="treeview__copyright">' + defaultOption.copyright + ' all right reserved, powered by <a href="https://github.com/aleen42" target="_blank">aleen42</a></span></div>' + new Remarkable().render(pageTreeview.initHeaders(page.content, defaultOption.style)) + '</div>';

            page.content = insertTreeview + '\n\n' + page.content;
            
    		return page;
    	}
    },

    /** Map of new blocks */
    blocks: {},

    /** Map of new filters */
    filters: {},

    /**
     * [test: tests function]
     * @param  {[type]} configs  [simulated configs]
     * @param  {[type]} contents [simulated contents]
     * @return {[type]}          [description]
     */
    test: function (configs, contents) {
        configs = configs || null;
        contents = contents || '';

    	/**
         * [defaultOption: default option]
         * @type {Object}
         */
        const defaultOption = {
            'style': 'markdown',
            'copyright': 'Copyright &#169; aleen42'
        };

        /** if users have its option, and then combine it with default options */
        if (configs) {
        // @deprecated
        // if (this.options.pluginsConfig['page-treeview']) {
            for (var item in defaultOption) {
                /** special for copyright */
                // @deprecated
                // defaultOption[item] = this.options.pluginsConfig['page-treeview'][item] || defaultOption[item];
                defaultOption[item] = configs[item] || defaultOption[item];
            }
        }

        var insertTreeview = '<div class="treeview__container"><div class="treeview__container-title"><span class="treeview__main-title">Treeview</span><span class="treeview__copyright">' + defaultOption.copyright + ' all right reserved, powered by <a href="https://github.com/aleen42" target="_blank">aleen42</a></span></div>' + new Remarkable().render(pageTreeview.initHeaders(contents, defaultOption.style)) + '</div>';

        return insertTreeview;
    },

    /**
     * [initHeaders: get headers of a page]
     * @param  {[type]} content [description]
     * @param  {[type]} style   [description]
     * @return {[type]}         [description]
     */
    initHeaders: function (content, style) {
        var res = [];
        var levelTab = [0, 0, 0, 0, 0, 0, 0];

        function calcLevel(str) {
            var count = 0;
            var strArr = str.split('');

            for (var i = 0; i < str.length && strArr[i] === '#'; i++) {
                count++;
            }

            return count;
        }

        function getLevelTab(level) {
            var count = 0;

            for (var i = 1; i <= level; i++) {
                if (levelTab[i] === 1) {
                    count++;
                }
            }

            return new Array(count).join('\t');
        }

        var headers = [].concat(content.match(/^(#)+(\s)*(.*)\n/g)).concat(content.match(/\n(#)+(\s)*(.*)\n/g)).map(function (x) {
            if (x !== null) {
                var ret = x.replaceAll('\n', '');

                /** filter in code block */
                var codeBlock = content.match(/\n`+[a-zA-Z]*([\s\S]*?)`+/g);
                if (codeBlock !== null) {
                    for (var i = 0; i < codeBlock.length; i++) {
                        if (codeBlock[i].indexOf(ret) >= 0) {
                            console.log('codeBlock:' + codeBlock);
                            console.log('ret:' + ret);

                            return null;
                        }
                    }
                }

                /** clear tag like emoji */
                var tags = ret.match(/<.*?\/>/g);
                if (tags !== null) {
                    for (var i = 0; i < tags.length; i++) {
                        ret = ret.replaceAll(tags[i], '');                       
                    }
                }

                /** reencode of cases: [sub] title [back]() */
                var prefix = ret.match(/\[(.+)?\](?!\()+/g);
                if (prefix !== null) {
                    /**
                     * [A2U: ascii to unicode]
                     */
                    function A2U(str) {
                        var reserved = '';
                        var convertCh = ['[', ']'];

                        for (var i = 0; i < str.length; i++) {
                            if (convertCh.indexOf(str[i]) >= 0) {
                                reserved += '&#' + str.charCodeAt(i) + ';';
                            } else {
                                reserved += str[i];
                            }
                        }

                        return reserved;
                    }

                    ret = ret.replaceAll(prefix[0], A2U(prefix[0]));
                }

                var level = calcLevel(ret);
                levelTab[level] = 1;

                return ret;
            } else {
                return x;
            }
        });

        for (var i = 0; i < headers.length; i++) {
            if (headers[i] === null) {
                continue;
            } else {
                var levelLength = calcLevel(headers[i]);
                var value = headers[i].replace(new Array(levelLength + 1).join('#'), '').leftTrim();

                switch (style) {
                    case 'markdown':
                        res.push(getLevelTab(levelLength) + '- [' + RemoveMarkdown(value) + '](#' + pageTreeview.convertID(value) + ')');
                        break;
                    case 'tag':
                        res.push('<a href="#' + pageTreeview.convertID(value) + '" class="level' + levelLength + '">' + RemoveMarkdown(value) + '</a>');
                        break;
                    default:
                        break;
                }
            }
        }

        return res.join('\n');
    },

    /**
     * [convertID: convert a markdown string into a id generated by gitbook]
     * @param  {[type]} str [description]
     * @return {[type]}     [description]
     */
    convertID: function (str) {
        var res = RemoveMarkdown(
            /** convert \t into ---- */
            str.replaceAll('\t', '----')
            /** remove “ and ” */
            .replaceAll('“', '')
            .replaceAll('”', '')
            .toLowerCase()
            .replaceAll(' ', '-')
        );
        var strArr = res.split('');

        for (var i = 0; i < strArr.length; i++) {
            /** not alpha */
            if (!(strArr[i].charCodeAt(0) >= 97 && strArr[i].charCodeAt(0) <= 122) && !(strArr[i].charCodeAt(0) === 45) && !(strArr[i].charCodeAt(0) > 126) && !(strArr[i].charCodeAt(0) >= 48 && strArr[i].charCodeAt(0) <= 57)) {
                strArr.splice(i, 1);
                i--;
            }
        }

        return strArr.join('');
    }
};
