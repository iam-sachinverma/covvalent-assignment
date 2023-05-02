const fs = require("fs");
const Product = require("./../models/productModel");

const products = JSON.parse(
  fs.readFileSync(`${__dirname}/products.json`, "utf-8")
);

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Product.sync({ force: true });
    console.log("Tables synced successfully");

    await Product.bulkCreate(products);
    console.log("Data added successfully");
  } catch (err) {
    console.error("Error syncing tables:", err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
}
