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
 * [main module]
 * @type {Object}
 */
const pageTreeview = module.exports = {
	/** Map of new style */
	book: {
		assets: './assets',
		css: []
	},

    /** Map of hooks */
    hooks: {
    	'page:before': function (page) {
    		/**
    		 * [defaultOption: default option]
    		 * @type {Object}
    		 */
    		const defaultOption = {};

    		/** if users have its option, and then combine it with default options */
			if (this.config.get('pluginsConfig')['page-footer']) {
			// @deprecated
			// if (this.options.pluginsConfig['page-footer']) {
				for (var item in defaultOption) {
    				/** special for copyright */
					// @deprecated
					// defaultOption[item] = this.options.pluginsConfig['page-footer'][item] || defaultOption[item];
					defaultOption[item] = this.config.get('pluginsConfig')['page-footer'][item] || defaultOption[item];

    				if (item === 'copyright') {
	    				defaultOption[item] += ' all right reserved, powered by <a href="https://github.com/aleen42" target="_blank">aleen42</a>';
    				}
    			}
    		}

            console.log(page.content);

    		return page;
    	}
    },

    /** Map of new blocks */
    blocks: {},

    /** Map of new filters */
    filters: {},

    /**
     * [test: tests function]
     * @param  {[type]} configs [simulated configs]
     * @return {[type]}        [description]
     */
    test: function (configs) {
    	return '';
    }
};
