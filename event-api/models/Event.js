const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  category: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String },
});

module.exports = mongoose.model("Event", eventSchema);
