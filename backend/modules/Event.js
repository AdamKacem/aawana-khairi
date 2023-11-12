const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    title: { type: String },
    description: { type: String },
    photo: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
