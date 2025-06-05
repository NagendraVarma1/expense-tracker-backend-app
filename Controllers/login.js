const Signup = require("../Models/signup");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateAccessToken = (id, name) => {
  return jwt.sign(
    { userId: id, name: name },
    "456546a54d65f4as654fa6sd4f65a4sddf54as64dfa5sd4f5as4df65kajskdfsdkjf"
  );
};

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
      bcrypt.compare(password, loginUserDetails.password, (err, result) => {
        if (err) {
          res
            .status(500)
            .json({ success: false, message: "Something Went Wrong" });
        }
        if (result === true) {
          res
            .status(200)
            .json({
              success: true,
              loginStatus: "User Logged In Successfully",
              token: generateAccessToken(
                loginUserDetails.id,
                loginUserDetails.username
              ),
            });
        } else {
          res
            .status(401)
            .json({ success: false, message: "Password Doesnt match" });
        }
      });
    } else {
      res
        .status(404)
        .json({ success: false, message: "User Doesnt Exit! Please Signup" });
    }
  } catch (err) {
    console.log(err);
  }
};
