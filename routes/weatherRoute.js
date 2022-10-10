const express = require("express");
const router = express.Router();
const weatherService = require("../services/weatherService");

router.get("/", weatherService.getWeather);

module.exports = router;
