const express = require("express");
const router = express.Router();
const authService = require("../services/authService");
const auth = require("../middleware/auth");

router.post("/signup", authService.signup);
router.post("/login", authService.login);
router.get("/logout", auth, authService.logout);

module.exports = router;
