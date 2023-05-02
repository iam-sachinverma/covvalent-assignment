const sequelize = require("./database");

const app = require("./app");

const port = process.env.PORT || 3000;

// DB
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
})();

app.listen(port, () => {
  console.log(`App running on port ${port}.... `);
});
