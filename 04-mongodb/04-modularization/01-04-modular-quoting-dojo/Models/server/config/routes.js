const quotes = require('../controllers/quotes.js');
module.exports = function(app) {

    app.get('/', function(request, response) {
        response.render('./views/main');
    });
    app.get('/quotes', function(request, response) {
        quotes.show(request, response);
    });
    app.post('/quotes', function(request, response) {
        console.log('POST DATA:', request.body);
        quotes.create(request, response);
    });
};