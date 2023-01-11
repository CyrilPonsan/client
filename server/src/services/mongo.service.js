const mongoose = require("mongoose");

MONGO_URL = process.env.MONGO_URL_AUTH;

mongoose.connection.on("error", (err) => {
  console.log("err", err);
});
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected");
});

const mainDBConn = mongoose.createConnection(MONGO_URL);

module.exports = { mainDBConn };
