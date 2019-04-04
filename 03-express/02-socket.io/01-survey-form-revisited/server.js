const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
const server = app.listen(8000, function() {
    console.log("listening on port 8000");
});

const port = process.env.PORT || 8000;


app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs');
var io = require('socket.io').listen(server)

app.get('/', function(req, res) {
    res.render('index');
})

io.sockets.on('connection', function(socket) {

    socket.on('posting_form', function(data) {

        var random_number = Math.floor((Math.random() * 1000) + 1);

        socket.emit('updated_message', { response: data });
        socket.emit('random_number', { response: random_number });
    })
});