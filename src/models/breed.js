const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const breedSchema = new Schema({
    description: { type: String, required: true }
});


module.exports = mongoose.model('Breed', breedSchema);