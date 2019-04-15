const quotes = require('../controllers/quotes.js');
module.exports = function(app) {
    app.get('/', function(req, res) {
        quotes.index(req, res);
    });

    app.get('/mongooses/new', function(req, res) {
        quotes.add(req, res);
    });
    app.get('/mongooses/:id', function(req, res) {
        quotes.show(req, res);
    });

    app.get('/mongooses/edit/:id', function(req, res) {
        quotes.edit(req, res);
    });

    app.post('/update/:id', function(req, res) {
        quotes.update(req, res);
    });
    app.post('/mongooses', function(req, res) {
        quotes.new(req, res);
    });
    app.get('/mongooses/destroy/:id', function(req, res) {
        quotes.destroy(req, res);
    });
};