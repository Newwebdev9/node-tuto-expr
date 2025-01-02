//GLOBALS  -  NO WINDOW!!!

//__dirname - path to current directory
//__filename  -  file name
//require - function to use modules(commonJS)
//module - info about current module (File)
//process - info about env where the rpogram is being executed

console.log(__dirname);
console.log(__filename);
setInterval(() => {
  console.log("hello world");
}, 1000);
