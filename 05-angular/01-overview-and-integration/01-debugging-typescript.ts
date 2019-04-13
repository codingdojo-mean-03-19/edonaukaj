// 1. Setting types

var myString: string;
// We set a variable myString to be a type of string
myString = "Bee stinger";
// If we try to redefine the myString variable to a number, we will get an error during transpiling.
// So we need to declare 9  as a string.
myString="9";

// 2. Setting the types for function parameters

function sayHello(name: string){
    return `Hello, ${name}!`;
 }
 // This is working great:
 console.log(sayHello("Kermit"));
 // Why isn't this working? I want it to return "Hello, 9!"
 // Data type for parameter passed into the function is string so, we attempted to pass the wrong data type into a function.
 // We should declare 9 as a string.
 console.log(sayHello("9"));

 // 3. Optional parameters

 function fullName(firstName: string, lastName: string, middleName?: string){
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
 }
 // This works:
 console.log(fullName("Mary", "Moore", "Tyler"));
 // What do I do if someone doesn't have a middle name?
 // We can  make the parameter as optional, meaning, the properties could exist on the object, or not, and still be valid.
 console.log(fullName("Jimbo", "Jones"));

 // 4. Interfaces and function parameters

interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
 function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
 }
 const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4
 }
 // This seems to work fine:
 console.log(graduate(christine));
 // This one has problems:
 //As it seems at interface field we have a parameter passed belts and it should be the same with the object passed at jay, belt=>belts
 console.log(graduate(jay)); 

 //5. Classes and function parameters

class Ninja {
    fullName: string;
    constructor(
       public firstName: string,
       public lastName: string){
          this.fullName = `${firstName} ${lastName}`;
       }
    debug(){
       console.log("Console.log() is my friend.")
    }
 }
 // This is not making an instance of Ninja, for some reason:
 //In the way to make an instace of Ninja class we use keyword "new".
 //As it seems new instance created expects 2 arguments.
 const shane = new Ninja("Alan", "Turing");
 // Since I'm having trouble making an instance of Ninja, I decided to do this:
 const turing = {
    fullName: "Alan Turing",
    firstName: "Alan",
    lastName: "Turing"
 }
 // Now I'll make a study function, which is a lot like our graduate function from above:
 function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
 }
 // Now this has problems:
 // We have to use new instace created from class Ninja.
 console.log(study(shane));

 //6. Arrow functions

 var increment = x => x + 1;
 // This works great:
 console.log(increment(3));
 //remove brackets
 var square = x => x * x;
 // This is not showing me what I want:
 console.log(square(4));
 // This is not working:
 // putting x&y in parentheses.
 var multiply =(x ,y) => x * y;
 // Nor is this working:
 //Just put the parameters of function into brackets.
 var math = (x, y) =>{
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x-y);
    return [sum, product, difference];
 }

 // 7. Arrow functions and 'this'
 class Elephant {
    constructor(public age: number){}
    birthday = age =>
       this.age++;
    }
 const babar = new Elephant(8);
 setTimeout(babar.birthday, 1000)
 setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000)
 // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.

