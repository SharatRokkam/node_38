const http = require("http");
const PORT = 8080;
const fs = require("fs");

const index = fs.readFileSync("./index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
const products = data.products;

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url.startsWith("/index")) {
    const id = req.url.split("/")[2];
    const product = products.find((p) => p.id === +id);
    console.log(product);
    res.setHeader("Content-Type", "text/html");
    let modifiedIndex = index
      .replace("**title**", product.title)
      .replace("**price**", product.price)
      .replace("**rating**", product.rating)
      .replace("**url**", product.images);
    res.end(modifiedIndex);
    return;
  }

  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end("HomePage");
      break;
    case "/product":
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data));
      break;

    default:
      res.writeHead(404);
      res.end("404 NOT FOUND");
      break;
  }
});

server.listen(PORT, () => {
  console.log("server is running on port 8080");
});
