const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
const apiKey = process.env.NEWSAPIKEY;

exports.getNews = async (req, res) => {
  try {
    const query = req.query.search || "";

    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&q=${query}`
    );

    // map one json format to another.
    const { totalResults, articles } = response.data;
    const formattedData = [];

    articles.forEach((article) => {
      newData = {};
      newData["headline"] = article["title"];
      newData["link"] = article["url"];
      formattedData.push(newData);
    });

    const result = {
      count: totalResults,
      data: formattedData,
    };

    res.status(200).send(result);
  } catch (err) {
    console.error(err);
    return res.status(500).send({ error: err.message });
  }
};
