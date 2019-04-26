const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/restful-tasks-continued/dist/restful-tasks-continued'));

require('./server/config/database');
require('./server/config/task.routes')(app);

app.listen(port, () => console.log(`Express server listening on port ${port}`));