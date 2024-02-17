const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nbaSchema = new Schema({
  id: { type: Number, required: true, unique: true }, 
  abbreviation: { type: String, required: true },
  city: { type: String, required: true },
  conference: { type: String, required: true },
  division: { type: String, required: true },
  full_name: { type: String, required: true }, 
  name: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("nba", nbaSchema);
