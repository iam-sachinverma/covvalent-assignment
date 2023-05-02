const { Op } = require("sequelize");
const Product = require("./../models/productModel");

exports.getProducts = async (req, res) => {
  try {
    let whereClause = {};

    // Category-wise Filtering
    if (req.query.category) {
      whereClause.category = req.query.category;
    }

    // Search
    if (req.query.search) {
      whereClause.title = {
        [Op.like]: `%${req.query.search}%`,
      };
    }

    // Pagination
    const page = req.query.page || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const offset = (page - 1) * limit;

    const products = await Product.findAndCountAll({
      where: whereClause,
      limit,
      offset,
      order: [["createdAt", "DESC"]],
    });

    const totalPages = Math.ceil(products.count / limit);

    // SEND RESPONSE
    res.status(200).json({
      status: "success",
      results: products.rows.length,
      data: {
        products: products.rows,
        totalPages,
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
    const query = await Product.findAll({
      attributes: ["category"],
    });

    const allCategories = await query;
    const categories = [...new Set(allCategories.map((item) => item.category))];

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
