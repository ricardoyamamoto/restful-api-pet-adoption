const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const petSchema = new Schema({
  name: { type: String, required: true },
  breed: { type: String },
  age: { type: String },
  sex: { type: String },
  colour: { type: String }
});


module.exports = mongoose.model('Pet', petSchema);
