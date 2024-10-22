//ES6 Module
// import { createServer } from 'http';
//COMMON JS MOdule
const { createServer } = require("http");

const port = 3000;

const server = createServer((req, res) => {
  res.end("<h1>Hello Nodejs </h1>");
});


server.listen(port, () => {
  console.log(`Server running successfully at ${port}`);
});

// https://www.google.com/