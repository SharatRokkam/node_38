// import fs from "fs";
const fs = require("fs");
// const os = require("os");

// console.log(os);
// console.log(os.cpus().length);

//Synchronous way of writing a file
// fs.writeFileSync("./log.txt", "Hello Nodejs")

//Async Way
// fs.writeFile("./test.html", "Hello Async", () => {})

// const result = fs.readFileSync("./contact.txt", "utf-8");
// console.log(result);

// fs.readFile("./contact.txt", "utf-8", (err, res) => {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log(res);
//   }
// });

// fs.appendFileSync("./log.txt", `${Date.now()} User LoggedIn\n`);

// fs.cpSync("./log.txt", "./copy.txt");

// fs.unlinkSync("./copy.txt");

// console.log(fs.statSync("./log.txt"));

// fs.mkdirSync("mydocs/new", { recursive: true });

// What do you know about streams and buffers ?


const writeStream = fs.createWriteStream("output.txt");
writeStream.write("Writing some data\n");
writeStream.end();
writeStream.on("finish", () => {
  console.log("finished writing successfully");
});

const readStream = fs.createReadStream("./output.txt", "utf-8");
readStream.on("data", (chunk) => {
  console.log(chunk);
});
