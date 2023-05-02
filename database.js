const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("covvalent", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
