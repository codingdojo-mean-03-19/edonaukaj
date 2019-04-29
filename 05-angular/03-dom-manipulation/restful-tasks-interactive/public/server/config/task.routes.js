const taskController = require('../controllers/task.controller');

module.exports = function(app) {
    app.get('/all', taskController.index);
    app.get('/:id', taskController.show);
    app.post('/new', taskController.create);
    app.put('/:id', taskController.update);
    app.delete('/destroy/:id', taskController.destroy);

};
