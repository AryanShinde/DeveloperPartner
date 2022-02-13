const jwt = require("jsonwebtoken");
const config = require("config");
require("dotenv").config();
module.exports = function (req, res, next) {
  //get the token
  const token = req.header("x-auth-token");
  //check if token is valid

  if (!token) {
    return res.json({ mg: "authorization denied" });
  }
  try {
    //decode the token
    const decoded = jwt.verify(
      token,
      process.env.JWT_TOKEN || config.get("jwtToken")
    );
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "server Error" });
  }
};
