const jwt = require("jsonwebtoken")
const Signup = require("../Models/signup");

const authenticate = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    console.log(token);
    const user = jwt.verify(
      token,
      "456546a54d65f4as654fa6sd4f65a4sddf54as64dfa5sd4f5as4df65kajskdfsdkjf"
    );
    Signup.findByPk(user.userId).then((user) => {
      console.log(JSON.stringify(user));
      req.user = user;
      next();
    });
  } catch (err) {
    console.log(err);
    return res.status(401).json({ success: false });
  }
};

module.exports = { authenticate };
