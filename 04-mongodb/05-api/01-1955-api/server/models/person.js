var mongoose = require('mongoose');

var personSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 }
}, { timestamps: true });

module.exports = mongoose.model('Person', personSchema);