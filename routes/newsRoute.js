const express = require("express");
const router = express.Router();
const newsService = require("../services/newsService");

router.get("/", newsService.getNews);

module.exports = router;
