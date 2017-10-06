const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ageSchema = new Schema({
    description: { type: String, required: true }
});


module.exports = mongoose.model('Age', ageSchema);