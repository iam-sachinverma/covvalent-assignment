class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const queryObj = { ...this.queryString };
    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((el) => delete queryObj[el]);

    // 1B) Advanced filtering
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    // if (req.query.category) {
    //   query = this.query.findAll({
    //     where: { category: req.query.category },
    //   });
    // } else if (Object.keys(queryObj).length > 0) {
    //   this.query = Product.findAll({
    //     where: queryObj,
    //   });
    // }

    this.query = this.query.findAll({
      where: { category: JSON.parse(queryStr) },
    });

    return this;
  }

  //   paginate() {
  //     const page = this.queryString.page * 1 || 1;
  //     const limit = this.queryString.limit * 1 || 100;
  //     const skip = (page - 1) * limit;

  //     this.query = this.query.skip(skip).limit(limit);

  //     return this;
  //   }
}

module.exports = APIFeatures;
