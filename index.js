const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const newsRoute = require("./routes/newsRoute");
const weatherRoute = require("./routes/weatherRoute");

app.use("/news", newsRoute);
app.use("/weather", weatherRoute);

app.use("/*", (req, res) => {
  res.status(404).send("Url Not Found");
});

app.listen(port, () => {
  console.log(`server running at ${port}`);
});
