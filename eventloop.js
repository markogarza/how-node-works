const fs = require("fs");

setTimeout(() => console.log("Timer 1 finished!"), 0);
setImmediate(() => console.log("Immidiate 1 finished"));

const testFile = fs.readFile("test-file.txt", (err, data) => {
  console.log("I/O finished!");
  console.log("----------------");

  setTimeout(() => console.log("Timer 2 finished!"), 0);
  setTimeout(() => console.log("Timer 3 finished!"), 3000);
  setImmediate(() => console.log("Immidiate 2 finished"));

  process.nextTick(() => {
    console.log("Process nextTick done");
  });
});

console.log("Top-level code executed!");
