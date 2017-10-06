const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const colourSchema = new Schema({
    description: { type: String, required: true }
});


module.exports = mongoose.model('Colour', colourSchema);