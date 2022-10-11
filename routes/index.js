const newsRoute = require("./newsRoute");
const weatherRoute = require("./weatherRoute");
const authRoute = require("./authRoute");
const express = require("express");
const router = express.Router();

router.use("/news", newsRoute);
router.use("/weather", weatherRoute);
router.use("/auth", authRoute);

module.exports = router;
