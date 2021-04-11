/* Q1: What is the difference between import and require?

   A1: import is part of Javascript ES6  which is not supported directly in Node.JS.
      require automatically scan the node_modules and import not.
      if you chose to use require you must export with 'module.exports'.
      if you chose to use import you must export with 'export'.

*/

/* Q2: How can you enable using the import syntax using node js?

   A2: in package.json file need to add "type":"module".
*/

/*  Q3: Give 2 node.js environment variables that are not available
        when using the import syntax.

    A3: __filename and __dirname are not available when using import;
*/

import {text, name, add} from './import.js';
import fs from 'fs';

console.log(text(),name(),add(2,7));
fs.writeFileSync('test.txt','');
