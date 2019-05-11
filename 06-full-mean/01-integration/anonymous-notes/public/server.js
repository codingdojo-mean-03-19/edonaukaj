const parser = require('body-parser');
const express = require('express');
const path = require('path');
const port = process.env.PORT || 1337;
const app = express();
require('./server/config/database');

app.use(express.static(path.join(__dirname, 'dist/public')));
app.use(parser.urlencoded({ extented: true }));
app.use(parser.json());
app.use(require('./server/routes'));

app.listen(port, () => console.log(`Express server listening on port ${port}`));