const http = require("http");
const PORT = 8080;
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  //   res.write("Hello Nodejs");
  //   res.write("5th day of learning");
  if (req.url === "/favicon.ico") return res.end();
  res.setHeader("Content-Type", "text/html");
  const log = `${Date.now()} : ${req.url} , New Request received\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);

  fs.appendFile("log.txt", log, () => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Hello Nodejs");
        break;
      case "/about":
        const username = myUrl.query.myname;
        res.end(`Hi, ${username}`);
        break;

      case "/search":
        const search = myUrl.query.search_query;
        res.end(`Here is your search query ${search}`);
        break;

      default:
        res.end("404 NOT FOUND");
    }
  });
});

server.listen(PORT, () => {
  console.log("server is running on port 8080");
});
