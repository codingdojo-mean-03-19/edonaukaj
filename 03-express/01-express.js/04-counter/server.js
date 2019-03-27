const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const session = require('express-session');

const port = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'usingsession'

}));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.get('/', function(request, response) {
    if (!request.session.count) {
        request.session.count = 1;

    } else {
        request.session.count += 1;

    }

    response.render('index', { count: request.session.count });
});

app.post('/increment', function(request, response) {

    request.session.count += 1;

    response.redirect('/');

});

app.post('/destroy_session', function(request, response) {

    request.session.destroy();

    response.redirect('/');

});
app.listen(port, () => console.log('Express server listening on port 8000'));