const user = require("../models/user");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

const auth = async (req, res, next) => {
  try {
    const token = req.header("authorization").replace("Bearer ", "");
    const valid = await jwt.verify(token, secret);
    const u = await user.findOne({ _id: valid._id, token: token });

    if (!u) {
      throw new Error("User Not Found");
    }
    req.validUser = u;
    req.token = token;

    next();
  } catch (e) {
    res.status(401).send({ error: "Not Authenticated" });
  }
};

module.exports = auth;
