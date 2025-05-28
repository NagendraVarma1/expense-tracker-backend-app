const Signup = require("../Models/signup");
const bcrypt = require("bcrypt");

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
        if(err){
          res.status(500).json({success: false, message: 'Something Went Wrong'})
        }
        if (result === true) {
          res.status(200).json({success: true, loginStatus: "User Logged In Successfully" });
        } else {
          res.status(401).json({success: false, message: "Password Doesnt match" });
        }
      });
    } else {
      res.status(404).json({success: false, message: "User Doesnt Exit! Please Signup" });
    }
  } catch (err) {
    console.log(err);
  }
};
