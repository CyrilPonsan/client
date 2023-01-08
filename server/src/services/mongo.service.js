const mongoose = require("mongoose");

MONGO_URL = process.env.MONGO_URL;

mongoose.connection.on("error", (err) => {
  console.log("err", err);
});
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected");
});

async function mongoConnect() {
  mongoose.connect(MONGO_URL, {
    useNewUrlParser: "true",
  });
}

module.exports = { mongoConnect };
