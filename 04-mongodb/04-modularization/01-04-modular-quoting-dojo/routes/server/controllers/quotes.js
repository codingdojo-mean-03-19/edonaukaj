const mongoose = require('mongoose');
module.exports = function Route(app) {
    mongoose.connect('mongodb://localhost/quoting_dojo');
    const quoteSchema = new mongoose.Schema({
        name: String,
        quote: String
    });

    const Quote = mongoose.model('quotes', quoteSchema);

    app.get('/quotes', function(request, response) {
        Quote.find({}, function(err, quotes) {
            if (err) { console.log(err); }
            response.render('./views/quotes', { quotes: quotes });
        });
    });

    app.post('/quotes', function(request, response) {
        Quote.create(request.body, function(err) {
            if (err) { console.log(err); }
            response.redirect('quotes');
        });
    });
};