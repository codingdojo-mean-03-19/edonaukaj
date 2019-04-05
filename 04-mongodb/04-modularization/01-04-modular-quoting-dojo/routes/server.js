const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const port = 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, './client'));
app.set('view engine', 'ejs');

require('./server/config/routes.js')(app)
require('./server/controllers/quotes.js')(app)

app.listen(port);