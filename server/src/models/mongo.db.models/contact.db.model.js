const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  prenom: { type: String, required: true },
  id: { type: Number, required: true },
});

module.exports = mongoose.model("Contact", contactSchema);
