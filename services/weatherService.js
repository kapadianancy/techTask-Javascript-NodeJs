const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
const apiKey = process.env.WEATHERSAPIKEY;

exports.getWeather = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=21.17&lon=72.83&cnt=5&appid=${apiKey}`
    );

    // map one json format to another.
    const { cnt, city, list } = response.data;
    const formattedData = [];

    list.forEach((item) => {
      newData = {};
      newData["date"] = new Date(item["dt_txt"]).toDateString();
      newData["main"] = item["weather"][0]["main"];
      newData["temp"] = item["main"]["temp"];
      formattedData.push(newData);
    });

    const result = {
      count: cnt,
      unit: "metric",
      location: city["name"],
      data: formattedData,
    };

    res.status(200).send(result);
  } catch (err) {
    console.error(err);
    return res.status(500).send({ error: err.message });
  }
};
