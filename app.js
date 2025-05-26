const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const loginRoute = require("./Routes/login");
const sequelize = require("./Util/database");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/login", loginRoute);

sequelize
  .sync()
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
