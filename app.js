//npm - global command, comes with node
//npm --version

//local dependency - use it only in this particular project
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>

//package.json - manifest file (stores important info about project/package)
//npm install --save-dev <packageName>       - to install in development mode
//npm install --save-prod <packageName>       - to install in production mode
//npm install --save <packageName>            - to install in both development and production mode
//npm install --save-dev <packageName>       - to install in development mode
//npm install --save-prod <packageName>       - to install in production mode
//npm install --save <packageName>            - to install in both development and production mode
//npm init -y                            - to create a package.json file automatically
//npm init -y                            - to create a package.json file automatically
//npm install -g nodemon                 - to install nodemon globally
//npm install -g nodemon                 - to install nodemon globally
//npm install -g nodemon                 - to install nodemon globally
//npm install -g nodemon                 - to install nodemon globally

//npm uninstall <packageName>

//npm uninstall -g <packageName>            - to uninstall a package globally

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log('hello guys')
