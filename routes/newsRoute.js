const express = require("express");
const router = express.Router();
const newsService = require("../services/newsService");
const auth = require("../middleware/auth");

router.get("/", auth, newsService.getNews);

module.exports = router;
