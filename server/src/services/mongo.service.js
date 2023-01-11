const mongoose = require("mongoose");

mongoose.connection.on("error", (err) => {
  console.log("err", err);
});
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected");
});

const authDBConn = mongoose.createConnection(process.env.MONGO_URL_AUTH);
const mainDBConn = mongoose.createConnection(process.env.MONGO_URL_MAIN);

module.exports = { authDBConn, mainDBConn };
