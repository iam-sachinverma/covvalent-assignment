const express = require("express");
const morgan = require("morgan");

const productRouter = require("./routes/productRoutes");

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// ROUTES
app.use("/api/products", productRouter);

// Error Handler Middlerware
app.all("*", (req, res, next) => {
  const err = new Error(`Can't find ${req.originalUrl} on this server`);
  err.status = "fail";
  err.statusCode = 404;

  next(err);
});

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

module.exports = app;
