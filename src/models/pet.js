const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const petSchema = new Schema({
  name: { type: String, required: true },
  breed: [{ type: Schema.Types.ObjectId, ref: 'Breed'}],
  age: { type: Schema.Types.ObjectId, ref: 'Age' },
  sex: { type: String },
  colour: [{ type: Schema.Types.ObjectId, ref: 'Colour' }],
  pictures: [{type: Schema.Types.ObjectId, ref: 'fs.files',  required: true}],
  lastChanged: {type: Date, required: true}
});


module.exports = mongoose.model('Pet', petSchema);
