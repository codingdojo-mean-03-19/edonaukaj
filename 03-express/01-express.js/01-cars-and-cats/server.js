var express = require("express");
console.log("Let's find out what express is", express);

var app = express();
console.log("Let's find out what app is", app);


app.use(express.static('static'));


app.listen(8000, function() {
    console.log("listening on port 8000");
})