const mongoose = require('mongoose');
const quoteSchema = new mongoose.Schema({
    name: String,
    quote: String
}, {
    timestamps: {
        updatedAt: false
    }

});
module.exports = mongoose.model('Quote', quoteSchema);