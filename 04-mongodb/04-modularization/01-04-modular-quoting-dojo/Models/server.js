const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const port = 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost/quotes_db');


app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './client'));
app.set('view engine', 'ejs');

require('./server/config/routes.js')(app)

app.listen(port);