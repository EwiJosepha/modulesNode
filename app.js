// moduleSystemInNodejs
// buy default, node.js has two module system which consist : CommonJS modules and ECMAScript modules.

// CommonJS modules:
// tCommonJS module is the original way to package JavaScript code for Node.js. in node js each file is treated as a module.

/*Files with a .cjs extension;

Files with a .js extension when the nearest parent package.json file contains a top-level field "type" with a value of "commonjs".

Files with a .js extension or without an extension, when the nearest parent package.json file doesn't contain a top-level field "type" or there is no package.json in any parent folder; unless the file contains syntax that errors unless it is evaluated as an ES module. Package authors should include the "type" field, even in packages where all sources are CommonJS. Being explicit about the type of the package will make things easier for build tools and loaders to determine how the files in the package should be interpreted.

Files with an extension that is not .mjs, .cjs, .json, .node, or .js (when the nearest parent package.json file contains a top-level field "type" with a value of "module", those files will be recognized as CommonJS modules only if they are being included via require(), not when used as the command-line entry point of the program).*/

// examples

const {names }= require("./modulesrequired")
const sayhi = require("./utility")
const data = require("./commonjsmodule")


sayhi(names)
console.log(data)


//ESM modules

 /* The .mjs extension is reserved for ECMAScript Modules which cannot be loaded via require(). See Determining module system section for more info regarding which files are parsed as ECMAScript modules.
 ECMAScript Modules (ESM) is a specification for using Modules in the Web. It's supported by all modern browsers and the recommended way of writing modular code for the Web. Webpack supports processing ECMAScript Modules to optimize them

*/
