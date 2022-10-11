const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 8080;
const routes = require("./routes");
const bodyParser = require("body-parser");
require("./config/db.config");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

app.use("/*", (req, res) => {
  res.status(404).send({ error: "Url Not Found" });
});

if (process.env.ENV !== "test") {
  app.listen(port, () => {
    console.log(`server running at ${port}`);
  });
} else {
  module.exports = app;
}
