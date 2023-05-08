// alert("working");
// document.querySelector("h2").innerText = "My Name is Muzammil";

//Fundamentals of Javascripts

//Variables (you can store any information in your variable)

var myName = "Muhammad Muzammil";
// console.log(myName);

//DATA TYPES
//there are two types of data types
//1-primitive type
//2-reference type/ object type

//Primitive Type Variables
//store directly in the location the variable accesses stored on the stack.

var store = "something"; //string = text
// var store = 'something'; //string = text
var store = 1234; //number
var store = true; //boolean (true/false)
var store = false; //boolean (true/false)
var store = null; //null (khali hoti)
var store = undefined; //undefined
var store = Symbol("values of symbol"); //symbol

// console.log(store, "store");

//REFERENCE TYPE
// Accessed by reference Objects that are stored
// on the heap a pointer to a location in memory.

// 1-Array
// 2-Object

var store = ["one", 123, true, false, null, undefined]; //array can save multiple types of values on same time
var store = {
  one: "one",
  two: "two",
}; //object also can save multiple values on same time

// console.log(store);

let muzammilMarks = 90;
let musaddiqMarks = muzammilMarks;

musaddiqMarks = 95;

// console.log(muzammilMarks, "muzammilMarks");
// console.log(musaddiqMarks, "musaddiqMarks");

//reference type example

// let hassanArrayOne = ["one", "two"];
// let hassanArrayTwo = hassanArrayOne; //it will create the refrence of arr1
// // let hassanArrayTwo = [...hassanArrayOne]; //[...] = spread operator

// //add value at the end of the array
// hassanArrayTwo.push("three");

// console.log(hassanArrayOne, "hassanArrayOne");
// console.log(hassanArrayTwo, "arrayTwo");

//1st Example

let muzammilHouse = ["House One", "House Two"];
// let musaddiqHouse = muzammilHouse; //it will create the reference
let musaddiqHouse = [...muzammilHouse]; //we can remove reference from spread operator [...]

musaddiqHouse.push("House Three");

// console.log(muzammilHouse, "muzammilHouse");
// console.log(musaddiqHouse, "musaddiqHouse");

//2nd example

// let muzammilBike = "125 Honda";
// let musaddiqBike = muzammilBike;

// musaddiqBike = "Suzuki 150";

// console.log(muzammilBike, "muzammilBike");
// console.log(musaddiqBike, "musaddiqBike");

//we have three types of variables
//1-let
//2-const
//3-var

// we can use let in the scope

// {} = scope

// function test(){
// }

//or

//if(){}

// {} = scope

// test();

//we are using this variable in the scope = {}
{
  let muzammil_var = "working";
  // console.log(muzammil_var, "muzammil var");
}

//we are trying to console let variable out of the scope
// console.log(muzammil_var, "muzammil var");

let companyName = "Koderlabs";

{
  // console.log(companyName, " company name");
}

// console.log(companyName);

//we cannot change constant variables
//const is also work on scope

const coachingName = "Squadcodersdev";
// coachingName = "DevDev";
// console.log(coachingName, " coaching Name");

//Var

//var is used everywhere

var carName = "suzuki";

{
  // console.log(carName, "carname");
}

//we are using the var in the scope
{
  var carName2 = "toyota";
  // console.log(carName2, "carName2");
}

//we can use var variable out of the scope
// console.log(carName2, "carName2");

//but if this scope is function so it will be specific in this function

function workingFunction() {
  var amount = 100;
  // console.log(amount, "amount");
}
// console.log(amount, "amount"); //it will give you error

workingFunction();

// A1One = "One"; var

//javascript is case sensitive

var some = "some 1";
var Some = "some 2 with capital S";

// console.log(some, "some");
// console.log(Some, "Some");

//naming of variables
// letters, = a to z or 123
// underscore, = let javascript_awesome_one
// camelcase, = let javascriptAwesomeOne
// pascal case = let JavascriptAwesomeOneTwoThree

// let javascriptAwesomeOne = "javascriptAwesomeOne";
// let javascriptawesomeone = "javascriptAwesomeOne"; //both seperate variable because small or capital letter

//javascript developer prefer camel case variable

//Type conversion

//convert anyvariable to string = text
let testingVariable = "this is text or string";
testingVariable = new String(6555); //number
testingVariable = new String(true); //boolean
testingVariable = new String(false); //boolean
testingVariable = new String(new Date()); //boolean

// console.log(testingVariable);
// console.log(typeof testingVariable);

// let someVariable = 1;
// console.log(someVariable.toString(), "someVariable");
let someVariable = (1).toString();
// console.log(someVariable, "someVariable");

//Convert Any Variable to Number

// someVariable = "2";
someVariable = new Number("2");
someVariable = new Number(true); // 1
someVariable = new Number(false); // 0
someVariable = new Number(null); // 0
someVariable = new Number("Hello"); // Nan = Not A Number
someVariable = new Number([1, 2, 4]); // Nan = Not A Number
someVariable = new Number({ a: 1, b: 2 }); // Nan = Not A Number

//2nd method to convert in to number

someVariable = parseInt("2"); //good paractice
someVariable = parseFloat("2.555"); //for decimal values

//Boolean

someVariable = new Boolean(1); // true
someVariable = new Boolean(0); // false
someVariable = new Boolean(""); // false
someVariable = new Boolean("AAA"); //true
// console.log(someVariable, "     some variable");

//consoles methods

const testingVariables = {
  name: "Muzammil",
  designation: "Software Engineer",
  companyName: "Koderlabs",
};

// console.error(testingVariables, "testingVariables");
// console.log(testingVariables, "testingVariables");
// console.warn(testingVariables, "testingVariables");
// console.info(testingVariables, "testingVariables");
// console.table(testingVariables, "testingVariables");

//arthmetic operators

testingVariable = 5 + 5;
testingVariable = 5 - 5;
testingVariable = 5 / 5;
testingVariable = 5 % 5;
testingVariable = 5 * 5;

//Math Object / Calculation Methods
testingVariable = Math.PI;
//The Math.E property represents Euler's number, the base of natural logarithms, e, which is approximately 2.718.
testingVariable = Math.E;
testingVariable = Math.round(2.4); //2
testingVariable = Math.round(2.6); //3
testingVariable = Math.pow(8, 4); // 8 * 8 * 8 * 8
testingVariable = Math.min(33, 100, 1555, 888, 999, 555555);
testingVariable = Math.max(33, 100, 1555, 888, 999, 555555);
testingVariable = Math.random() * 20 + 1;
// testingVariable = Math.floor(2);

/*==================================
=            math floor            =
==================================*/
//for positive numbers
val = Math.floor(2.4); //2
val = Math.floor(2.3); //2
val = Math.floor(2.59); //2
val = Math.floor("2.3"); //2
val = Math.floor(2); //2

//for negative number
val = Math.floor(-2.4); //-3
val = Math.floor(-2.3); //-3
val = Math.floor(-2.5); //-3

/*=====  End of math floor  ======*/

// console.log(testingVariable);

//String Concatination
//string ko jorna

const firstName = "Muzammil";
const lastName = "Rafay1";

const fullName = firstName + " " + lastName;

// console.log(fullName, "fullname");

let testString =
  "Hello, World my name is 'Muzammil Mustaqeem and my age 'is 24";

// \n = line break
testString = "Hello, World my name is '" + fullName + " \n and my age 'is 24";

//template literal

// testString = `Hello, World my name is 'Muzammil Mustaqeem
//  and my age 'is 24`;

//interpolation = ${}

testString = `Hello, World my name is '${fullName}
 and my age 'is 24`;

testString = testString.concat(" new thing", " second thing");
// testString = testString.toLowerCase();
// testString = testString.toUpperCase();
testString = testString.replace("Muzammil Rafay1", "Musaddiq Rafay");
testString = testString.includes("Hello, Worlddddddddddd"); //it will return true or false

// console.log(testString);

//soda lana hai ammi kaa

let saman = "tomotoaaaaaa";
let purchased = "";

if (saman == "tomoto") {
  purchased = "tomoto";
} else {
  purchased = "yogurt"; //dahi
}

// console.log(purchased, "purchased");

let drinks = "";
// let foodpanda = "briyani";
// let foodpanda = "karahi";
let foodpanda = "zinger";

if (foodpanda === "briyani") {
  drinks = "Jumbo Cooldrink";
} else if (foodpanda === "karahi") {
  drinks = "lassi";
} else if (foodpanda === "zinger") {
  drinks = "limca";
}

// console.log(drinks, " drinks");

//Array Methods

const fruits = ["Mango", "Banana", "Apple"];

// console.log(fruits, "fruits");
// console.log(fruits[0], "fruits");
// console.log(fruits[1], "fruits");
// console.log(fruits[2], "fruits");
// console.log(fruits.length, "fruits");

//add new value in array at the end
// console.log(fruits);
// fruits.push("Grapes");
// console.log(fruits);

const numbers = [22, 60, 10, 88, 99]; //numbers
numbers.push(2000); //Add on the end of array
numbers.unshift(9999); //Add on the start of array
// numbers.pop(); //remove array from end
// numbers.shift(); //remove array from start
// numbers.splice(1, 1); //remove from array
// numbers.splice(1, 3); //remove from array

// console.log(numbers.reverse());

//ascending Order with sort method
numbers.sort(function (x, y) {
  return x - y;
});

//descending Order with sort method
numbers.sort(function (x, y) {
  return y - x;
});
console.log(numbers);
