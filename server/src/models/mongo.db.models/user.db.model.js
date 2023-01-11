const mongoose = require("mongoose");
const { authDBConn } = require("../../services/mongo.service");
const { regexMail } = require("../../services/regEx.service");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  roles: {
    type: Array,
    required: true,
  },
});

module.exports = authDBConn.model("User", userSchema);
