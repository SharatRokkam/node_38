import fs from "fs";
// const fs = require("fs");

//Synchronous way of creating/writing a file
// fs.writeFileSync("./test.txt", "Learning FS module in sync");

// Async way
fs.writeFile("./text.txt", "Learning Async Manner", (err) => {})


// readFileSync, readFile, appendFileSync, appendFile 
