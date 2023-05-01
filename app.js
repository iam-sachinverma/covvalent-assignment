const express = require("express");
const morgan = require("morgan");

const productRouter = require("./routes/productRoutes");

const app = express();

// Middlewares
if (process.env.NODE_ENV === "Development") app.use(express.json());

// ROUTES
app.use("/api/products", productRouter);

module.exports = app;
