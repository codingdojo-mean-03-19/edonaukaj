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
mongoose.connect('mongodb://localhost/mb_db', { useNewUrlParser: true });

// Use native promises
mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

const PostSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
    message: { type: String, required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, {
    timestamps: true
});


mongoose.model('Post', PostSchema);
const Post = mongoose.model('Post');

// What would we need to add to make the below snippet work properly? Read your console!
const CommentSchema = new mongoose.Schema({
    _post: { type: Schema.Types.ObjectId, ref: 'Post' },
    name: { type: String, required: true, minlength: 2 },
    message: { type: String, required: true },
}, {
    timestamps: true
});

mongoose.model('Comment', CommentSchema);
const Comment = mongoose.model('Comment');


app.get('/', function(req, res) {
    arr = Post.find({}).populate('comments')
        .exec(function(err, posts) {
            console.log('~~~~~~~~~~~~~~~~~~~~~');
            res.render('index', { p: posts });
        });

});

app.post('/post', function(req, res) {
    console.log('POST DATA', req.body);
    var post = new Post({ name: req.body.name, message: req.body.message });
    post.save(function(err) {
        if (err) {
            console.log('something went wrong');
            console.log(post.errors);
            res.redirect('/');
        } else {
            console.log('successfully added a Post!');
            res.redirect('/');
        }
    });
});


app.post('/comment/:id', function(req, res) {
    Post.findOne({ _id: req.params.id }, function(err, post) {
        console.log(req.body.comment_name);
        console.log(req.body.comment_message);
        var comment = new Comment({
            name: req.body.comment_name,
            message: req.body.comment_message,
            _post: post._id
        });
        console.log(comment);
        comment.save(function(err) {
            post.comments.push(comment);
            post.save(function(err) {
                if (err) {
                    console.log('something went wrong');
                    console.log(comment.errors);
                    res.redirect('/');
                } else {
                    console.log('successfully added a Comment!');
                    res.redirect('/');
                }
            });
        });
    });
});

app.listen(port, () => console.log(`Express server listening on port ${port}`));