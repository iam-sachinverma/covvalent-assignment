const Product = require("./../models/productModel");

exports.getProducts = async (req, res) => {
  try {
    // Build Query
    // 1. Category-wise filtering
    const queryObj = { ...req.query };
    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((el) => delete queryObj[el]);

    const query = await Product.findAll({
      where: queryObj,
    });

    const products = await query;

    // SEND RESPONSE
    res.status(200).json({
      status: "success",
      data: {
        products,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const query = await Product.distinct("category");

    const categories = await query;

    console.log(categories);

    // SEND RESPONSE
    res.status(200).json({
      status: "success",
      data: {
        categories,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};
