const os = require("os");

//information about current user
const user = os.userInfo();

//method returns the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);

// //commonJS, every file is module by default
// //Modules - Encapsulated Code (only share minimum)
// const names = require("./4-names");
// const sayHii = require("./5-utils");
// const data = require("./6-alternative-flavor");

// require("./7-mind-grnade");
// // console.log(data);
// // console.log(names);
// // console.log(sayHii);

// // sayHii(names.john);
// // sayHii(names.peter);
