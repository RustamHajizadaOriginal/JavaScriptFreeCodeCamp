// Learn JavaScript - Full Course for Beginners - freeCodeCamp.org
// https://www.youtube.com/watch?v=PkZNo7MFNFg   repeat : 02:45:00-03:20:17

// ========= Iterate with While Loops  ===============
// const myArray = [];
// let i = 0;
// while (i <= 5) {
//   myArray.push(i);
//   i++;
// }
// console.log(myArray);

// ========= Iterate with For Loops  ===============
// const ourArray = [];
// for (let i = 0; i < 5; i++) {
//   // Push the numbers 0 through 4 to myArray
//   ourArray.push(i);
// }
// console.log(ourArray);

// ========= Iterate Odd Numbers with a For Loops  ===============
// const ourArray = [];
// for (let i = 0; i < 25; i += 5) {
//   // Push the numbers 0 through 25 to myArray
//   ourArray.push(i);
// }
// console.log(ourArray);
// const newArray = [];
// for (let i = 1; i < 10; i += 2) {
//   // FOR ODD NUMBER WE start i from 1 and add 2 to i in each iteration
//   newArray.push(i);
// }
// console.log(newArray);

// ========= Count Backwards with a For Loops  ===============
// const ourArray = [];
// for (let i = 10; i > 0; i -= 2) {
//   // Push the numbers 10 through 0 to myArray
//   ourArray.push(i);
// }
// console.log(ourArray);
// const newArray = [];
// for (let i = 9; i > 0; i -= 2) {
//   // Push the numbers 9 through 1 to myArray
//   newArray.push(i);
// }
// console.log(newArray);

// ========= Iteratie through an Array with a For Loops  ===============
// let ourArray = [3, 5, 7, 15];
// let ourTotal = 0;

// for (let i = 0; i < ourArray.length; i++) {
//   ourTotal += ourArray[i];
// }
// console.log(ourTotal);

// ========= Nesting For Loops  ===============
// multiplyAll = (arr) => {
//   let product = 1;
//   for (let i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//       product *= arr[i][j];
//     }
//   }
//   return product;
// };
// let product = multiplyAll([
//   [1, 2],
//   [3, 4],
//   [5, 6, 7],
// ]);
// console.log(product); // should be 5040

// ========= Iterate with Do... While Loops  ===============
// let myArray = [];
// let i = 3;
// do {
//   myArray.push(i);
//   i++;
// } while (i < 5);
// console.log(i, myArray);

// ========= Profile Lookup  ===============
// var contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543216543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0991234567",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vang",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];
// const lookUpProfile = (name, prop) => {
//   for (let i = 0; i < contacts.length; i++) {
//     if (contacts[i].firstName === name) {
//       return contacts[i][prop] || "No such property";
//     } else {
//       ("No such property");
//     }
//   }
//   return "No such contact found in the list.";
// };
// const data = lookUpProfile("Akira", "lastName"); // Change this line
// console.log(data); // Change this line

// ========= Random Fractions  Numbers  ===============
// const randomFraction = () => {
//   return Math.random();
// };
// console.log(randomFraction());

// ========= Random Whole Numbers  ===============
// const randomNumberBetween0and19 = Math.floor(Math.random() * 20);
// const randomWholeNum = () => {
//   return Math.floor(Math.random() * 10);
// };
// console.log(randomWholeNum());

// ========= Generate Random Whole Numbers within a Range ===============
// const ourRandomRange = (ourMin, ourMax) => {
//   return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
// };
// console.log(ourRandomRange(1, 25));

// ========= Use the parseInt Function ===============
// const convertToInteger = (str) => {
//   return parseInt(str);
// };
// console.log(convertToInteger("5")); // 56

// ========= Use the parseInt Function with a Radix ===============
// const convertToInteger = (str) => {
//   return parseInt(str, 2); // 2 is the radix
// };
// console.log(convertToInteger("0101"));

// ========= Use the Conditional (Ternary) Operator ===============
// const checkEqual = (a, b) => {
//   if (a === b) {
//     return `${a} is Equal to ${b}`;
//   } else {
//     return `${a} is NOT Equal to ${b}`;
//   }
// };
// console.log(checkEqual(5, 7.5));

// const checkEqual2 = (C, D) => {
//   return C === D ? true : false;
// };
// console.log(checkEqual2(5, 7));

// ========= Use Multiple  Conditional (Ternary) Operator ===============
// const checkSign = (num) => {
//   return num > 0 ? "Above 0" : num < 0 ? "negative-Below 0" : "zero";
// };
// console.log(checkSign(-5));

// ========= Differences Between the var and let keywords ===============
// let catName = "Oliver";
// let quot;
// console.log(catName); // Oliver
// catName = "Benny";
// console.log(catName); // Benny

// ========= Prevent Object Mutation ===============
// const freezeObj = () => {
//   "use strict";
//   const MATH_CONSTANTS = {
//     PI: 3.14,
//   };
//   Object.freeze(MATH_CONSTANTS); // This will freeze the object and prevent any changes to it
//   try {
//     MATH_CONSTANTS.PI = 77; // This will throw an error
//   } catch (ex) {
//     console.log(ex); // TypeError: Cannot assign to read only property 'PI' of object '#<Object>'
//   }
//   return MATH_CONSTANTS.PI; // 3.14
// };
// const PI = freezeObj(); // Change this line
// console.log(PI);

// ========= Arroy function ===============
// const myArroyFunction = () => "Hello World!";
// console.log(myArroyFunction);

// ========= Write Higher Order Arrow Function ===============
// const realNumberArrey = [4, 5.6, 42, -3.14, 6, 2.5, , 0.12, -1.8];
// const squareList = (arr) => {
//   const squaredIntegers = arr
//     .filter((num) => Number.isInteger(num) && num > 0)
//     .map((x) => x * x);
//   return squaredIntegers;
// };
// const squaredIntegers = squareList(realNumberArrey);
// console.log(squaredIntegers); // [16, 9]

// const increment = (function () {
//   return function increment(number, value = 1) {
//     return number + value;
//   };
// })();
// console.log(increment(5, 2)); // 7
// console.log(increment(5)); // 6

// ========= Use the Rest Operator with Function Parameters ===============
// const sum = (function () {
//   return function sum(x, y, z) {
//     const args = [x, y, z];
//     return args.reduce((a, b) => a + b, 0);
//   };
// })();
// console.log(sum(1, 2, 3)); // 6
// const sum = (function () {
//   return function sum(...args) {
//     return args.reduce((a, b) => a + b, 0);
//   };
// })();
// console.log(sum(2, 3, 5, 1, 4, 7)); // 22

// ========= Use the Spread Operator to Evaluate Arrays In-Place ===============
// const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
// let arr2;
// (function () {
//   arr2 = arr1;
//   arr1[0] = "potatos";
// })();
// console.log(arr2);
// const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
// let arr2;
// (function () {
//   arr2 = [...arr1];
//   arr1[0] = "potatos";
// })();
// console.log(arr2);

// ========= Use Destructuring Assignment ===============
// const voxel = { x: 3.6, y: 7.4, z: 6.54 };
// const { x: a, y: b, z: c } = voxel;
// const AVG_TEMPERATURES = {
//   today: 14.5,
//   tomorrow: 16,
// };
// const getTempOfTmrw = (avgTemperatures) => {
//   "use strict";
//   const { tomorrow: tempOfTomorrow } = avgTemperatures;
//   return tempOfTomorrow;
// };
// console.log(getTempOfTmrw(AVG_TEMPERATURES));

// ========= Use Destructuring Assignment with Nested Objects ===============
// const LOCAL_FORECAST = {
//   today: { min: 4, max: 12 },
//   tomorrow: { min: 4, max: 12 },
// };
// const getMaxOfTmrw = (forecast) => {
//   "use strict";
//   const {
//     tomorrow: { max: maxOfTomorrow },
//   } = forecast;
//   return maxOfTomorrow;
// };
// console.log(getMaxOfTmrw(LOCAL_FORECAST));

// ========= Use Destructuring Assignment with the Rest Operator ===============
// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const removeFirstTwo = (list) => {
//   const [, , ...arr] = list;
//   return arr;
// };
// const arr = removeFirstTwo(source);
// console.log(source); // Will show the original array
// console.log(arr);

// ========= Use Destructuring Assignment to Pass an Object as a Function's Pramaeters ===============
// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85,
// };
// const half = (function () {
//   return function half({ max, min }) {
//     return (max + min) / 2.0;
//   };
// })();
// console.log(stats);
// console.log(half(stats));

// ========= Create Strings using Template Literals ===============
// const person = {
//   name: "Rustam",
//   age: 32,
// };
// // template literal with multt-line and string interpolation
// const greeting = `Hello, my name is ${person.name}!
// I am ${person.age} years old.`;
// console.log(greeting);
// --------Challenge.
// const result = {
//   success: ["max-A", "max2-A", "max3-A"],
//   failure: ["max-F", "max2-F", "max3-F"],
//   skipped: ["max-D", "max2-D", "max3-D"],
// };
// const makeList = (arr) => {
//   const resultDisplayArrey = [];
//   for (let i = 0; i < arr.length; i++) {
//     resultDisplayArrey.push(`<li class='text-warming'>${arr[i]}</li>`);
//   }
//   return resultDisplayArrey;
// };
// const resultDisplayArrey = makeList(result.failure);
// console.log(resultDisplayArrey);

// ========= Write Concise Object Literal Declarations Using Simple Fields ===============
// const createPerson = (name, age, gender) => {
//   return {
//     name: name,
//     age: age,
//     gender: gender,
//   };
// };
// console.log(createPerson("Rustam Hajizada", 32, "Male"));
// //------------
// const easyCreatePerson = (name, age, gender) => ({ name, age, gender });
// console.log(easyCreatePerson("Dominika Hajizada", 28, "Female"));

// ========= Use class Syntax to Define a Constructor Function ===============
// var SpaceShuttle = function (targetPlanet) {
//   this.targetPlanet = targetPlanet;
// };
// var zeus = new SpaceShuttle("Jupiter");
// console.log(zeus.targetPlanet);
//By using Class syntax:
// class SpaceShuttle {
//   constructor(targetPlanet) {
//     this.targetPlanet = targetPlanet;
//   }
// }
// var zeus = new SpaceShuttle("Jupiter");
// console.log(zeus.targetPlanet);

// ========= Use Getters and Setters to Control Access to an Object ===============
// const makeClass = () => {
//   class Thermostat {
//     constructor(temp) {
//       this._temp = (5 / 9) * (temp - 32);
//     }
//     get temperature() {
//       return this._temp;
//     }
//     set temperature(updatedTemp) {
//       this._temp = updatedTemp;
//     }
//   }
//   return Thermostat;
// };
// const Thermostat = makeClass();
// const thermos = new Thermostat(71);
// let temp = thermos.temperature;
// thermos.temperature = 21;
// temp = thermos.temperature;
// console.log(temp);

// ========= Understand the Differences Betweeen Import and Require===============
// const cap = capitalizeString("Hello!");
// console.log(cap);
// import { capitalizeString } from "./stingFunction.js";
// ========= Use export to Reuse a Code Block ===============
// const capitalizeString = (string) => {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// };
// export const foo = "bar";
// export const bar = "foo";
// export { capitalizeString };

// ========= Use * to Import Everything from a File ===============
// import * as capitalizeString from "./stingFunction.js";

// ========= Create an Export Fallback with export default ===============
// export default function subtract(x, y) {
//   return x - y;
// }

// ========= Import a Default Export ===============
// import subtract from "./stingFunction.js";
// subtract(7, 4);
