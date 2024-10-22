const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();

const poolSize = (process.env.UV_THREADPOOL_SIZE = 10);

setTimeout(() => console.log("Hello from Timer 1"), 0);

setImmediate(() => console.log("Hello from Immediate fn 1"));

fs.readFile("sample.txt", "utf-8", () => {
  crypto.pbkdf2("password1", "salt1", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms`, "Password1 Done");
  });

  crypto.pbkdf2("password2", "salt1", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms`, "Password2 Done");
  });
  crypto.pbkdf2("password3", "salt1", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms`, "Password3 Done");
  });
  crypto.pbkdf2("password4", "salt1", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms`, "Password4 Done");
  });

  console.log("IO Polling Finish");

  setTimeout(() => console.log("Hello from Timer 2"), 0);
  setTimeout(() => console.log("Hello from Timer 3"), 5 * 1000);

  setImmediate(() => console.log("hello from Immediate fn 2"));
});

console.log("Hello from top level code");
