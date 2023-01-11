require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userDB = require("../models/mongo.db.models/user.db.model");
const { exists } = require("../models/mongo.db.models/user.db.model");

mongoose.connection.on("error", (err) => {
  console.log("err", err);
});
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected");
});

const DEFAULT_USER_ID = 1;

async function createUser() {
  const roles = ["tech", process.argv[4]];
  const hash = await bcrypt.hash(process.argv[3], 10);
  const user = await userDB.findOneAndUpdate(
    {
      id: await _getLatestUserId(),
    },
    {
      username: process.argv[2],
      password: hash,
      roles: roles,
    },
    { upsert: true }
  );
  console.log("user added", user);
}

async function _getLatestUserId() {
  const latestUser = await userDB.findOne().sort("-id");
  if (!latestUser) {
    return +DEFAULT_USER_ID;
  }
  return +latestUser.id + 1;
}

createUser();
