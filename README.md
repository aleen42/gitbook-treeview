## page-treeview

![gitbook](https://camo.githubusercontent.com/cf48327b2fdeec4a1f072204f8868f25865b39ac/68747470733a2f2f7261776769742e636f6d2f616c65656e34322f6261646765732f6d61737465722f7372632f676974626f6f6b2e737667) [![Pay](https://img.shields.io/badge/%24-free-%23a10000.svg)](#) [![GitHub issues](https://img.shields.io/github/issues/aleen42/gitbook-treeview.svg)](https://github.com/aleen42/gitbook-treeview/issues) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/aleen42/gitbook-treeview/master/LICENSE) [![Gitter](https://badges.gitter.im/aleen42/gitbook-treeview.svg)](https://gitter.im/aleen42/gitbook-treeview?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

[![npm](https://img.shields.io/npm/v/gitbook-plugin-page-treeview.svg)](https://www.npmjs.com/package/gitbook-plugin-page-treeview) [![Build Status](https://travis-ci.org/aleen42/gitbook-treeview.svg?branch=master)](https://travis-ci.org/aleen42/gitbook-treeview) [![devDependency Status](https://david-dm.org/aleen42/gitbook-treeview/dev-status.svg)](https://david-dm.org/aleen42/gitbook-treeview#info=devDependencies) [![npm](https://img.shields.io/npm/dt/gitbook-plugin-page-treeview.svg)](https://www.npmjs.com/package/gitbook-plugin-page-treeview)

a gitbook-plugin for generating a treeview for each page.

![page-treeview](https://raw.githubusercontent.com/aleen42/gitbook-treeview/master/1.png)

### Installation

add the following plugins to your `book.json` and run `gitbook install`

```json
{
    "plugins": ["page-treeview"]
}
```

### Usage

just find plugin on gitbook and install it on your gitbook project.

configuration option can be set as an obj like, and of course you can use a default value shown as followed:

```json
{
	"plugins": [
		"page-treeview"
	],
	"pluginsConfig": {
		"page-treeview": {
			"style": "markdown",
			"copyright": "Copyright &#169; aleen42",
			"minHeaderCount": "1",
			"minHeaderDeep": "1"
		}
	}
}
```

### What Treeview looks like in Markdown?

Treeview will only generate treeviews for header between level 1 and 6. Here I'll list some cases with different structure (each number means the level a head tag, like 1 for &lt;h1&gt;):

##### 1-1-2-3-4-1

- 1
- 1
	- 2
		- 3
			- 4
- 1

##### 3-4-2-3-4-5-1-2-3

- &nbsp; 
	- &nbsp; 
		- 3
			- 4
	- 2
		- 3
			- 4
				- 5
- 1
	- 2
		- 3

##### 1-2-3-1-3-4-5-1-2

- 1
	- 2
		- 3
- 1
	- &nbsp; 
		- 3
			- 4
				- 5
- 1
	- 2

### Tests

```bash
npm test
```

### Release History

* ==================== **1.0.0 Initial release** ====================
	* 1.5.7 release version
	* 1.5.8 fix bugs
	* 1.5.9 fix bugs of chinese
	* 1.6.1 fix bugs of text indent in markdown style
	* 1.6.9 fix bugs
	* 1.8.0 fix bugs
	* 1.8.3 fix bugs
* ==================== **2.0.0 Style release** ====================
	* 2.0.1 update style
	* 2.0.2 update style
	* 2.0.5 update style
	* 2.0.6 update style
	* 2.0.7 update readme
	* 2.1.3 fix bugs
	* 2.2.1 fix bugs
	* 2.2.2 fix bugs
	* 2.3.0 fix bugs
	* 2.3.4 fix bugs
	* 2.3.5 fix bugs
	* 2.3.7 fix bugs
	* 2.3.8 update readme
	* 2.4.0 update configuration
	* 2.4.1 restrict reading book
	* 2.4.3 fix bugs
	* 2.4.4 fix bugs
	* 2.4.5 update readme
	* 2.4.9 fix bugs
	* 2.5.0 update readme
	* 2.5.8 enhancement for issue [#2](https://github.com/aleen42/gitbook-treeview/issues/2)
	* 2.5.9 update default value
	* 2.6.1 fix bugs
	* 2.6.5 fix bugs
	* 2.6.7 fix bugs
	* 2.6.8 update readme
	* 2.6.9 update readme
	* 2.7.2 fix bugs
	* 2.7.3 update readme
	* 2.7.4 disable console
	* 2.7.7 fix bugs

### :fuelpump: How to contribute

Have an idea? Found a bug? See [how to contribute](https://aleen42.gitbooks.io/personalwiki/content/contribution.html).

### :scroll: License

[MIT](https://aleen42.gitbooks.io/personalwiki/content/MIT.html) © aleen42
