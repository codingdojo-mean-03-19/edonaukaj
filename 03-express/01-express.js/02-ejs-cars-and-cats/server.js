const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));



app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('static'));

app.get('/', function(request, response) {
    console.log(request);

    response.render('../static/index');
})

app.get('/cars', function(request, response) {
    console.log(request);

    response.render('cars');
})
app.get('/cats', function(request, response) {
    console.log(request);

    response.render('cats');
})
app.get('/cars/new', function(request, response) {
    console.log(request);

    response.render('new');
})


app.listen(port, () => console.log('Express server listening on port 8000'));