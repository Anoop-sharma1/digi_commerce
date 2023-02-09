const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "jwt", { expiresIn: "1d" });
};

module.exports = { generateToken };
