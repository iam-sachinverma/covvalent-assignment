const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");

const port = process.env.PORT || 3000;

const pool = mysql
  .createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "covvalent",
  })
  .promise();

app.listen(port, () => {
  console.log(`App running on port ${port}.... `);
});
