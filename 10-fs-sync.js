const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/subFolder/first.txt", "utf8");
const second = readFileSync("./content/subFolder/second.txt", "utf8");

console.log(first, second);

writeFileSync(
  "./content/subFolder/result-sync.txt",
  `Here is the result: ${first}, ${second} also here`,
  { flag: "a" }
);

console.log("done with this task");
console.log("starting the next one");
