const parser = require('body-parser');
const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

app.use(express.static(path.join(__dirname, 'dist/public')));
app.use(parser.urlencoded({ extented: true }));
app.use(parser.json());
app.use(require('./server/routes'));

app.listen(port, () => console.log(`Express server listening on port ${port}`));