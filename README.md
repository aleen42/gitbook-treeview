## page-treeview

[![Join the chat at https://gitter.im/aleen42/gitbook-treeview](https://badges.gitter.im/aleen42/gitbook-treeview.svg)](https://gitter.im/aleen42/gitbook-treeview?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![Pay](https://img.shields.io/badge/%24-free-%23a10000.svg)](#) [![GitHub issues](https://img.shields.io/github/issues/aleen42/gitbook-treeview.svg)](https://github.com/aleen42/gitbook-treeview/issues) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/aleen42/gitbook-treeview/master/LICENSE) [![Gitter](https://badges.gitter.im/aleen42/gitbook-treeview.svg)](https://gitter.im/aleen42/gitbook-treeview?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

[![npm](https://img.shields.io/npm/v/gitbook-plugin-page-treeview.svg)](https://www.npmjs.com/package/gitbook-plugin-page-treeview) [![Build Status](https://travis-ci.org/aleen42/gitbook-treeview.svg?branch=master)](https://travis-ci.org/aleen42/gitbook-treeview) [![devDependency Status](https://david-dm.org/aleen42/gitbook-treeview/dev-status.svg)](https://david-dm.org/aleen42/gitbook-treeview#info=devDependencies) [![npm](https://img.shields.io/npm/dt/gitbook-plugin-page-treeview.svg)](https://www.npmjs.com/package/gitbook-plugin-page-treeview)

a gitbook-plugin for generating a treeview for each page.

#### Installation

add the following plugins to your `book.json` and run `gitbook install`

```json
{
    "plugins": ["page-treeview"]
}
```

#### Usage

just find plugin on gitbook and install it on your gitbook project.

configuration option can be set as an obj like, and of course you can use a default value shown as followed:

```json
{
	"plugins": [
		"page-treeview"
	],
	"pluginsConfig": {
		"page-treview": {
			"style": "markdown"
		}
	}
}
```

#### Tests

```bash
npm test
```

#### Release History

* ==================== **1.0.0 Initial release** ====================
	* 1.5.7 release version

#### :fuelpump: How to contribute

Have an idea? Found a bug? See [how to contribute](https://aleen42.gitbooks.io/personalwiki/content/contribution.html).

#### :scroll: License

[MIT](https://aleen42.gitbooks.io/personalwiki/content/MIT.html) © aleen42
