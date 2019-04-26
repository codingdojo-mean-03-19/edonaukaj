const Task = require('mongoose').model('Task');


module.exports = {
    index(request, response) {
        Task.find({}, function(err, task) {
            if (err) { response.json({ message: 'Error', error: err }); } else { response.json(task); }
        });
    },

    show(request, response) {
        Task.findById(request.params.id, function(err, task) {
            if (err) { response.json({ message: 'Error', error: err }); } else { response.json(task); }
        });
    },
    create(request, response) {
        Task.create(request.body, function(err, task) {
            if (err) { response.json({ message: 'Error', error: err }); } else { response.json({ message: 'Task created successfully', task: task }); }
        });
    },
    update(request, response) {
        Task.findByIdAndUpdate(request.params.id, request.body, { new: true }, function(err, task) {
            if (err) { response.json({ message: 'Error', error: err }); } else { response.json(task); }
        });
    },

    destroy(request, response) {
        Task.findByIdAndRemove(request.params.id, function(err, task) {
            if (err) { response.json({ message: 'Error', error: err }); } else { response.json({ message: 'Deleted successfuly' }); }
        });
    }
};