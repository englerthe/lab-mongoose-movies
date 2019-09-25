const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const celebritySchema = new Schema({
  name: String,
  occupation: String, enum: ['actor', 'singer', 'comedian', 'athlete', 'unknown'],
  catchPhrase: String
});

const Celebrity = mongoose.model("Celebrity", celebritySchema);

module.exports = Celebrity;