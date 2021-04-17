const { Schema, model } = require("mongoose");

const urlSchema = new Schema({
  longUrl: String,
  urlCode: String,
  shortUrl: String,
  date: { type: String, default: Date.now },
});

module.exports = model("Url", urlSchema);
