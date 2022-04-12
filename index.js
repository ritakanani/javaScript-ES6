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


