const mongoose = require('mongoose');
const DogSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    color: String
});
module.exports = mongoose.model('Dog', DogSchema);