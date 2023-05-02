const express = require("express");
const productController = require("./../controllers/productController");

const router = express.Router();

// Fetch products
router.route("/").get(productController.getProducts);

// Fetch categories
router.route("/categories").get(productController.getAllCategories);

module.exports = router;
