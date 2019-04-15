const Dog = require('../models/quote.js');
const mongoose = require('mongoose');

module.exports = {
    index: function(req, res) {
        Dog.find({}, function(err, dogs) {
            if (err) { console.log(err); }
            res.render('./views/index', { dogs: dogs });
        });
    },
    add: function(req, res) {
        res.render('./views/new');
    },
    show: function(req, res) {
        console.log('The requested ID is:', req.params.id);
        Dog.findOne({ _id: mongoose.Types.ObjectId(req.params.id) }, function(err, dog) {
            if (err) {
                console.log('Could not find the animal with ID:', req.params.id);
                res.redirect('/');
            } else {
                console.log('Done');
                res.render('./views/show', { dog: dog });
            }
        });
    },
    edit: function(req, res) {
        console.log('The requested edit ID is:', req.params.id);
        Dog.findOne({ _id: mongoose.Types.ObjectId(req.params.id) }, function(err, dog) {
            if (err) {
                console.log('Could not find the animal with ID:', req.params.id);
                res.redirect('/');
            } else {
                console.log('Done');
                res.render('./views/edit', { dog: dog });
            }
        });

    },
    update: function(req, res) {
        console.log('The requested update ID is:', req.params.id);
        Dog.findOne({ _id: mongoose.Types.ObjectId(req.params.id) }, function(err, dog) {
            dog.name = req.body.name;
            dog.weight = req.body.weight;
            dog.color = req.body.color;
            dog.save(function(err) {
                if (err) {
                    console.log('Dog has not been updated!');
                    res.redirect('/mongooses/:id');
                } else {
                    console.log('Update was successful!');
                    res.redirect('/');
                }
            });
        });

    },

    new: function(req, res) {
        console.log('POST DATA:', req.body);
        var dog = new Dog({ name: req.body.name, weight: req.body.weight, color: req.body.color });
        dog.save(function(err) {
            if (err) {
                console.log('Something went wrong!');
                res.redirect('/mongooses/new');
            } else {
                console.log('Successfully added quote!');
                res.redirect('/');
            }
        });
    },

    destroy: function(req, res) {
        Dog.remove({ _id: mongoose.Types.ObjectId(req.params.id) }, function(err) {
            if (err) {
                console.log('Could not delete the animal with ID:', req.params.id);
            } else {
                console.log('Done');
            }
            res.redirect('/');
        });
    },
};