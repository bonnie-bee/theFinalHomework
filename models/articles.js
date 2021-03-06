const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  date: Date,
  url: String,
  snippet: String,
  notes: String,
  saved: Boolean
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
