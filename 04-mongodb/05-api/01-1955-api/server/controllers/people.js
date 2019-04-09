var mongoose = require('mongoose');
var Person = mongoose.model('Person');

module.exports = {

    index: function(request, response) {
        Person.find({}, function(err, people) {
            if (err) {
                console.log('something went wrong');
                console.log(err);
                response.json(Person.errors);
            } else {
                console.log('getting people');
                console.log(people);
                response.json(people);
            }
        });

    },

    show: function(request, response) {
        Person.findOne({ name: req.params.name }, function(err, person) {
            if (err) {

                console.log('something went wrong');
                console.log(err);
                response.json(Person.errors);
            } else {
                console.log('getting name');
                console.log(req.params.name);
                console.log(person);
                response.json(person);
            }
        });

    },


    create: function(request, response) {

        var person = new Person({ name: request.params.name });

        person.save(function(err) {
            if (err) {
                console.log('something went wrong');
                console.log(err);
                response.json(person.errors);
            } else {
                console.log('person created');
                response.redirect('/');
            }
        });
    },


    destroy: function(request, response) {

        Person.remove({ name: request.params.name }, function(err) {
            if (err) {
                console.log('something went wrong');
                console.log(err);
                response.json(Person.errors);
            } else {
                console.log('person deleted');
                response.redirect('/');
            }
        });
    },
}