//Second assignment


//1.
//correct
var hello = 'world';
console.log(hello);

console.log(hello);
var hello = 'world';

//Prediction:undefined
//Output:undefined
//2.
var needle = 'haystack';

function test() {
    var needle = 'magnet';
    console.log(needle);
}
test();

//Prediction:magnet
//Output:magnet

//3.
var brendan = 'super cool';

function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan); //function print is never invoked

//Prediction:super cool
//Output: super cool

//4.
var food = 'chicken';
console.log(food);


function eat() {
    var food = 'gone';
    food = 'half-chicken';
    console.log(food);

}
eat();

//Prediction: chicken  ,   half-chicken
//Output:chicken  ,   half-chicken

//5.
mean();
console.log(food); // food is not declared
var mean = function() { // mean is not a function
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food); //food is not declared

//Prediction:error
//Output:error
// correct code
mean();
var food = "meat";

function mean() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//6.
console.log(genre); //genre is not declared
var genre = "disco";
rewind();

function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//Prediction:undefined, rock, r&b, disco
//Output:undefined, rock, r&b, disco

//7.
dojo = "san jose";
console.log(dojo);

function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
learn();
console.log(dojo);

//Prediction:san jose,seattle, burbank, san jose
//Output:san jose,seattle, burbank, san jose

//8.

//code here