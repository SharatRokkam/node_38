const express = require("express");
const morgan = require("morgan");
//functionality
const app = express();
const port = 3000;
// const fs = require("fs");

// const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
// const product = data.products;

//Third party middleware

app.use(morgan("default "));

//application level middleware
// app.use((req, res, next) => {
//   console.log(req.ip, req.hostname, req.method, req.get("User-Agent"));
// });

//built-in middleware
//bodyparser
// app.use(express.json());
app.use(express.static("public"));
// app.use(express.urlencoded())

// const auth = (req, res, next) => {
//   console.log(req.query);

//   if (req.body.password == "123") {
//     next();
//   } else {
//     res.sendStatus(401);
//   }
// };

// API - Endpoints
app.get("/getAllUser", function (req, res) {
  // response.sendFile("./index.html");
  res.json({ type: "get" });
});
app.get("/getAllUser/:id", function (req, res) {
  // response.sendFile("./index.html");
  res.json({ type: "get" });
});

app.post("/createUser", (req, res) => {
  res.json({ type: "post" });
});
app.post("/updateUser", (req, res) => {
  res.json({ type: "post" });
});

app.put("/", (req, res) => {
  res.json({ type: "put" });
});

app.patch("/", (req, res) => {
  res.json({ type: "patch" });
});

app.delete("/", (req, res) => {
  res.json({ type: "delete" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
