const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');


const port = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));
app.use(express.static('static'));
app.get('/cats', function(request, response) {
    console.log(request);


    response.render('index');
});
app.get('/persian', function(request, response) {
    console.log(request);

    var cat_persian = {
        name: "Persian Cat",
        img: "/images/persian_cat.jpg",
        food: "Fish",
        age: "3",
        life: "It adapts quite well to apartment life"
    };

    response.render('details', { cat: cat_persian });
});
app.get('/siberian', function(request, response) {
    console.log(request);
    var cat_siberian = {
        name: "Siberian Cat",
        img: "/images/siberian_cat.jpg",
        food: "Chesse",
        age: "3",
        life: "Domestic Cat"
    };

    response.render('details', { cat: cat_siberian });
});
app.get('/ragdoll', function(request, response) {
    var cat_ragdoll = {
        name: "Ragdoll Cat",
        img: "/images/ragdoll_cat.jpg",
        food: "Fish",
        age: "3",
        life: "Known for docile and placid temperament and affectionate nature"
    };
    console.log(request);

    response.render('details', { cat: cat_ragdoll });
});


app.listen(port, () => console.log('Express server listening on port 8000'));