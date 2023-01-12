const mongoose = require("mongoose");
const { authDBConn } = require("../../services/mongo.service");

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
  createdAt: {
    type: Date,
    required: true,
  },
});

module.exports = authDBConn.model("User", userSchema);
