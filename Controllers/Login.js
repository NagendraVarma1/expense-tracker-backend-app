const Login = require("../Models/login");

exports.addNewUser = async (req, res, next) => {
  try {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const existingUser = await Login.findOne({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      console.log("User already Exist");
      res.sendStatus(200)
    } else {
      const data = await Login.create({
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
