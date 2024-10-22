const express = require("express");

const server = express();
//installed and import

// http methods - get, post , put, patch and delete
server.get("/", (req, res) => {
  res.send("Hello World");
});

server.listen(8000, () => {
  console.log("server is running on port 8000");
});
