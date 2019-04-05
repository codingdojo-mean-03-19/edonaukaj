module.exports = function Route(app) {

    app.get('/', function(request, response) {
        response.render('./views/main');
    });
};