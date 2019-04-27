const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, 'static')));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');



// tell the express app to listen on port 8000
const server = app.listen(port, () => console.log(`Express listening on port ${port}`));
const io = require('socket.io')(server);
var route = require('./routes/index.js')(app, server);