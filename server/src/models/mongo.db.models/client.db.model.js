const mongoose = require("mongoose");
const { mainDBConn } = require("../../services/mongo.service");

const clientSchema = mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  prenom: { type: String, required: true },
  id: { type: Number, required: true },
});

module.exports = mainDBConn.model("Client", clientSchema);
