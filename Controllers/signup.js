const Signup = require("../Models/signup");
const bcrypt = require("bcrypt");

exports.addNewUser = async (req, res, next) => {
  try {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const existingUser = await Signup.findOne({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      res.json({ userData: "User already Exist" });
    } else {
      const saltrounds = 10;
      bcrypt.hash(password, saltrounds, async (err, hash) => {
        const data = await Signup.create({
          username: username,
          email: email,
          password: hash,
        });
        res.status(200).json({ userData: data });
      });
    }
  } catch (err) {
    console.log(err);
  }
};
