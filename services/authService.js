const User = require("../models/user");
const bcrypt = require("bcryptjs");
const util = require("./util");

exports.signup = async (req, res) => {
  try {
    const user = new User(req.body);
    var result = await user.save();
    if (!result) {
      return res.status(400).send("bad request");
    }
    return res
      .status(201)
      .send({ user: { name: result.name, email: result.email } });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ error: err.message });
  }
};
exports.login = async (req, res) => {
  try {
    const u = await User.findOne({
      email: req.body?.email,
      isActive: true,
    });
    if (!u) {
      return res.status(401).send({ error: "Invalid User" });
    }
    let valid = await bcrypt.compare(req.body.password, u.password);
    if (!valid) {
      return res.status(401).send({ error: "Invalid Password" });
    }
    const token = await util.generateToken(u);
    const userUpdate = await User.findByIdAndUpdate(u._id, { token });
    res
      .status(200)
      .send({ user: { email: u.email, name: u.name }, token: token });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ error: err.message });
  }
};
exports.logout = async (req, res) => {
  const userUpdate = await User.findByIdAndUpdate(req.validUser._id, {
    token: null,
  });
  res.status(200).send();
};
