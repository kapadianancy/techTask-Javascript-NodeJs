const mongoose = require("mongoose");
const url = process.env.MONGO;

if (process.env.ENV !== "test") {
  mongoose.connect(
    url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (!err) {
        console.log("mongodb connected");
      } else {
        console.log(err);
      }
    }
  );
}
