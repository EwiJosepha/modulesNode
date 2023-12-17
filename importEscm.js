import { CONSTANT, variable } from './mescmsModules.js';
// import "bindings" to exports from another module
// these bindings are live. The values are not copied,
// instead accessing "variable" will get the current value
// in the imported module

import * as module from './module.js';
module.fun();
// import the "namespace object" which contains all exports

import theDefaultValue from './module.js';
// shortcut to import the "default" export