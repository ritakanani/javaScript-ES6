const myName = "Rita";
console.log(myName.slice(0, 3));  // Rit


//The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.


const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]
console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]
console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]


/*********************************************/

var caseLetter = "rITa";  
caseLetter = caseLetter.toUpperCase();
console.log(caseLetter);   // RITA

caseLetter = caseLetter.toLowerCase();
console.log(caseLetter);   // rita

// Capitalize the first letter
// a isolate the first char with slice()
var firstChar = caseLetter.slice(0, 1);

// b Turn the first char to upper case
var upperCaseFirstChar = firstChar.toUpperCase();

// c Isolate the rest of the name
var restOfChar = caseLetter.slice(1, caseLetter.length);

// d Change the rest of the name with lower case
restOfChar = restOfChar.toLowerCase();

// e concatenate the first char with the rest of the char
var capitalizeCaseLetter = upperCaseFirstChar + restOfChar;
console.log(capitalizeCaseLetter);  // Rita


/*************************************************/

// Modulo(%) - The remainder operator (%) returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.

var remainderNum = 6 % 4;
console.log(remainderNum);    // 2 
// 4 x 1 = 4 so 2 are left in 6 - output become 2.

remainderNum = 45 % 2;
console.log(remainderNum); // 1
// 22 x 2 = 44 so 1 is left in 45 - output become 1.


/****************************************************/

// Increment and Decrement Expressions
var x = 3;
var y = x++;
console.log(y);  // 3
y += 1;

console.log(y);  // 4


/*****************************************************/

// Function
function getMilk(money) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  var numberOfBottles = Math.floor(money / 1.5);

  console.log("buy " + numberOfBottles + " bottles of Milk");  // buy 3 bottles of Milk

  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

getMilk(5);


// How many days, weeks and months are left according to my age in total 90 years.
function lifeInWeeks(age) {
  let oldAgeLeft = (90 - age);   
  let days = (oldAgeLeft * 365);
  let weeks = (oldAgeLeft * 52);
  let months = (oldAgeLeft * 12);

  console.log("I have " + days + " Days, " + weeks + " weeks, and " + months + " months left.");
}

lifeInWeeks(42);

// What is your BMI
function bmiCalculator(weight, height) {
  var bmi = Math.round(weight / Math.pow(height, 2));
  return bmi;    
}
console.log(bmiCalculator(70, 1.55));


// Random Number Generation. Dice has 6 rolls
let randomNum = Math.random();
    randomNum = randomNum * 6;  // whetever number we require, multiply it 
    randomNum = Math.floor(randomNum) + 1;

console.log(randomNum);  // outputs between 1-6


/*****************************************************/

// Array

var output = [];
var count = 1;

function fizzBuzz() {
  if (count % 3 === 0 && count % 5 === 0) {
    output.push("FizzBuzz");
  } else if (count % 3 === 0) {
    output.push("Fizz");
  } else if (count % 5 === 0) {
    output.push("Buzz");
  } else {
    output.push(count); 
  }
  count++;
  console.log(output) ;
}

fizzBuzz(); // run in node REPL



// Who's Buying Lunch?
// A function which will select a random name from a list of names.
var names = ["Rita", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names) {
  var namesLength = names.length;  // 5
  var randomPersonPosition = Math.floor(Math.random() * namesLength);
  console.log(randomPersonPosition);  // 0-4.9999999999 without Math.floor
  // randomPersonPosition = Math.floor(randomPersonPosition);
  var randomPerson = names[randomPersonPosition];

  return randomPerson + " is going to buy lunch today!";
}
console.log(whosPaying(names));


/*****************************************************/

// For loop

// var count = 1;

function fizzBuzz() {
  var outputResults = [];

  for(var count = 1; count <= 100; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      outputResults.push("FizzBuzz");
    } else if (count % 3 === 0) {
      outputResults.push("Fizz");
    } else if (count % 5 === 0) {
      outputResults.push("Buzz");
    } else {
      outputResults.push(count); 
    }
  }
  // count++;
  return outputResults ;
}

console.log(fizzBuzz()); 

