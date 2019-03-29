const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const session = require('express-session');

const port = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'thisisasecretpwd'

}));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.get('/', function(request, response) {

    response.render('index');
});

app.post('/result', function(request, response) {
    const info = {
        name: request.body.name,
        locations: request.body.locations,
        languages: request.body.languages,
        comment: request.body.comment
    };
    response.render('result', { user: info });


});

app.listen(port, () => console.log('Express server listening on port 8000'));