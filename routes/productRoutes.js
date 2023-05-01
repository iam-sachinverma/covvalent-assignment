const express = require("express");
const productController = require("./../controllers/productController");

const router = express.Router();

// Fetch products
router.route("/").get(productController.getProducts);

// Fetch categories
router.route("/categories").get(productController.getCatgories);

// Fetch all products with category-wise filtering
router.get(
  "/api/products/:categoryName",
  productController.getProductsByCategory
);

module.exports = router;
