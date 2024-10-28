const data = require("../data.json");
const users = data.users;

exports.createProduct = (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.status(201).json(req.body);
};

exports.getAllProducts = (req, res) => {
  console.log(users);
  res.status(200).json(users);
};

exports.getProduct = (req, res) => {
  const id = Number(req.params.id);
  const product = users.find((p) => p.id == id);
  console.log(product);
  res.status(200).json(product);
};

exports.replaceProduct = (req, res) => {
  const id = Number(req.params.id);
  const productIndex = users.findIndex((p) => p.id == id);
  users.splice(productIndex, 1, { id: id, ...req.body });
  res.status(201).json({ message: "product replace successfully" });
};

exports.updateProduct = (req, res) => {
  const id = Number(req.params.id);
  const productIndex = users.findIndex((p) => p.id == id);
  const product = users[productIndex];
  users.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json({ message: "product updated successfully" });
};

exports.deleteProduct = (req, res) => {
  const id = Number(req.params.id);
  const productIndex = users.findIndex((p) => p.id == id);
  users.splice(productIndex, 1);
  res.status(201).json({ message: "product deleted successfully" });
};
