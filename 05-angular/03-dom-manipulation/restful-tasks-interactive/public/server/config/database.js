const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const reg = new RegExp('\\.js$', 'i');
const modelsPath = path.resolve('server', 'models');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/tasks', { useNewUrlParser: true }, { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('connected to MongoDB'));

fs.readdirSync(modelsPath).forEach(model => {
    if (reg.test(model)) {
        require(path.join(modelsPath, model));
    }
});
