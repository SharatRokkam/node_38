const data = require("../data.json");
const products = data.products;

exports.createProduct = (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.status(201).json(req.body);
};

exports.getAllProducts = (req, res) => {
  console.log(products);
  res.status(200).json(products);
};

exports.getProduct = (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id == id);
  console.log(product);
  res.status(200).json(product);
};

exports.replaceProduct = (req, res) => {
  const id = Number(req.params.id);
  const productIndex = products.findIndex((p) => p.id == id);
  products.splice(productIndex, 1, { id: id, ...req.body });
  res.status(201).json({ message: "product replace successfully" });
};

exports.updateProduct = (req, res) => {
  const id = Number(req.params.id);
  const productIndex = products.findIndex((p) => p.id == id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json({ message: "product updated successfully" });
};

exports.deleteProduct = (req, res) => {
  const id = Number(req.params.id);
  const productIndex = products.findIndex((p) => p.id == id);
  products.splice(productIndex, 1);
  res.status(201).json({ message: "product deleted successfully" });
};
