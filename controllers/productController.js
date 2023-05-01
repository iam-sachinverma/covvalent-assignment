exports.getProducts = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      Products: "All Products",
    },
  });
};

exports.getCatgories = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      Categories: "All Product Categories",
    },
  });
};

exports.getProductsByCategory = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      getProductsByCategory: "Fetch all products with category-wise filtering",
    },
  });
};
