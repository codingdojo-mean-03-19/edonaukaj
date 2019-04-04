const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const port = process.env.PORT || 6789;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));

let count = 0;
const server = app.listen(port, () => console.log('listening on port 6789'));
const io = require('socket.io')(server);

io.on('connection', function(socket) {
    console.log('incoming socket connection');

    socket.on('buttonClicked', function() {

        numberUpdated(++count);

    });
    socket.on('reset', function() {
        numberUpdated(count = 0);
    });
    socket.emit('numberUpdated', count);
});

function numberUpdated(number) {
    io.emit('numberUpdated', number);
}
app.get('/', function(request, response) {

    response.render('index');
});