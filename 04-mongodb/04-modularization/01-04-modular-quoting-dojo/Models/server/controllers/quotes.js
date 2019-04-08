const Quote = require('../models/quote.js');
module.exports = {
    show: function(request, response) {
        Quote.find({}, function(err, quotes) {
            response.render('./views/quotes', { quotes: quotes });
        });
    },

    create: function(request, response) {
        Quote.create(request.body, function(err) {
            if (err) { console.log(err); }
            response.redirect('quotes');

        });
    }
};