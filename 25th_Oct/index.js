const express = require("express");
const PORT = 5555;
const app = express();
const data = require("./data.json");
const products = data.products;

app.use(express.json());


//MVC - MODEL VIEW CONTROLLER (ARCHITECTURE)

//REST API
//create a new product
app.post("/api/products", (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.status(201).json(req.body);
});

//Get all the products from an API...
app.get("/api/products", (req, res) => {
  console.log(products);
  res.status(200).json(products);
});

//Get a particular product...
app.get("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id == id);
  res.status(200).json(product);
});

//replace the product object
app.put("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const productIndex = products.findIndex((p) => p.id == id);
  products.splice(productIndex, 1, { id: id, ...req.body });
  res.status(201).json({ message: "product replace successfully" });
});

//Updating the product
app.patch("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const productIndex = products.findIndex((p) => p.id == id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json({ message: "product updated successfully" });
});

app.delete("/api/products/:id", (req, res) => {
    const id = Number(req.params.id);
    const productIndex = products.findIndex((p) => p.id == id);
    products.splice(productIndex, 1);
    res.status(201).json({ message: "product deleted successfully" });
  });


app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
