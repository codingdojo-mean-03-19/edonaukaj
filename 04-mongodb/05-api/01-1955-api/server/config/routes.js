var people = require('../controllers/people.js');

module.exports = function(app) {

    app.get('/', function(request, response) {
        people.index(request, response);
    });
    app.get('/:name', function(request, response) {
        people.show(request, response);
    });

    app.get('/new/:name', function(request, response) {
        people.create(request, response);
    });

    app.get('/remove/:name', function(request, response) {
        people.destroy(request, response);
    });
};