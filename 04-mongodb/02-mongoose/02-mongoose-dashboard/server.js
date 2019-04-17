const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const port = process.env.PORT || 8000;

const app = express();

// Use bodyParser to parse form data sent via HTTP POST
app.use(bodyParser.urlencoded({ extended: false }));

// Tell server where views are and what templating engine I'm using
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Create connection to database
mongoose.connect('mongodb://localhost/dog_db', { useNewUrlParser: true });

// Create dog schema and attach it as a model to our database
const DogSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    color: String
});

// Mongoose automatically looks for the plural version of your model name, so a Dog model in Mongoose looks for 'dogs' in Mongo.
mongoose.model('Dog', DogSchema);
const Dog = mongoose.model('Dog');

// Routes go here!
app.get('/', function(req, res) {
    Dog.find({}, function(err, dogs) {
        if (err) { console.log(err); }
        res.render('index', { dogs: dogs });
    });
});
// New dog
app.get('/mongooses/new', function(req, res) {
    res.render('new');
});
app.get("/mongooses/:id", function(req, res) {
    console.log("The requested ID is:", req.params.id);
    Dog.findOne({ _id: mongoose.Types.ObjectId(req.params.id) }, function(err, dog) {
        if (err) {
            console.log('Could not find the animal with ID:', req.params.id);
            res.redirect('/');
        } else {
            console.log('Done');
            res.render('show', { dog: dog });
        }
    });
});
app.get("/mongooses/edit/:id", function(req, res) {
    console.log("The requested edit ID is:", req.params.id);
    Dog.findOne({ _id: mongoose.Types.ObjectId(req.params.id) }, function(err, dog) {
        if (err) {
            console.log('Could not find the animal with ID:', req.params.id);
            res.redirect('/');
        } else {
            console.log('Done');
            res.render('edit', { dog: dog });
        }
    });
});
app.post("/update/:id", function(req, res) {
    console.log("The requested update ID is:", req.params.id);
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
});
//route action of new dog form
app.post('/mongooses', function(req, res) {
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
    })
    //delete the choosen dog!
app.get('/mongooses/destroy/:id', function(req, res) {
    Dog.remove({ _id: mongoose.Types.ObjectId(req.params.id) }, function(err) {
        if (err) {
            console.log('Could not delete the animal with ID:', req.params.id);
        } else {
            console.log('Done');
        }
        res.redirect('/');
    });
});

app.listen(port, () => console.log(`Express server listening on port ${port}`));