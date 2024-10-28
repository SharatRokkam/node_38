const express = require("express");

const router = express.Router();
const userController = require("../controller/user.js");

router
  .post("/", userController.createProduct)
  .get("/", userController.getAllProducts)
  .get("/:id", userController.getProduct)
  .put("/:id", userController.replaceProduct)
  .patch("/:id", userController.updateProduct)
  .delete("/:id", userController.deleteProduct);

module.exports = router;
