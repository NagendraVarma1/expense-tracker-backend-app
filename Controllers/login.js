const Signup = require("../Models/signup");

exports.userLogin = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const loginUserDetails = await Signup.findOne({
      where: {
        email: email,
      },
    });
    if (loginUserDetails) {
      if (password === loginUserDetails.password) {
        res.status(200).json({ loginStatus: "User Logged In Successfully" });
      } else {
        res.sendStatus(401);
      }
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.log(err);
  }
};
