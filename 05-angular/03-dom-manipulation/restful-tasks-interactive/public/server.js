const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist'));

require('./server/config/database.js');
require('./server/config/task.routes')(app);

app.listen(port, () => console.log(`Express is listening on port ${port}`));
