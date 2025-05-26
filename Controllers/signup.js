const Signup = require("../Models/signup");

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
      const data = await Signup.create({
        username: username,
        email: email,
        password: password,
      });
      res.status(200).json({ userData: data });
    }
  } catch (err) {
    console.log(err);
  }
};
