const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const signupRoute = require("./Routes/signup");
const loginRoute = require('./Routes/login');
const expenseRoute = require('./Routes/expenses')
const sequelize = require("./Util/database");
const Signup = require("./Models/signup");
const Expenses = require("./Models/expenses");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/signup", signupRoute);
app.use('/login', loginRoute)
app.use('/expense', expenseRoute)

Signup.hasMany(Expenses);
Expenses.belongsTo(Signup)

sequelize
  .sync()
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
