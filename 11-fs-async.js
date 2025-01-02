const { readFile, writeFile, read } = require("fs");
console.log("start");
readFile("./content/subFolder/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = "result";
  readFile("./content/subFolder/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = "result";
    writeFile(
      "./content/subFolder/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});

console.log("start with the next");
