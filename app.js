const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const signupRoute = require("./Routes/signup");
const sequelize = require("./Util/database");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/signup", signupRoute);

sequelize
  .sync()
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
