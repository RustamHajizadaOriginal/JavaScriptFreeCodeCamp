// ========= PUSH/POP/SHIFT/UNSHIFT ===============
// const ourArray = ["Rustam", "Domi"];

// ourArray.push("Joe");// Push ()
// console.log(ourArray);

// ourArray.pop("Joe");// Pop ()
// console.log(ourArray);

// ourArray.shift("Joe");// Shift ()
// console.log(ourArray);

// ourArray.unshift("Joe");// UnShift ()
// console.log(ourArray);

// console.log(ourArray.length - 1);

// const myList = [["meat, 1"], ["bananas", 4], ["tomatos", 0.5]];
// console.log(myList);

// ========= Reusable with Functions ===============
// ourReusableFunction = () => {
//   console.log("Hello, World");
// };
// ourReusableFunction();

// ========= Arguments with Functions ===============

// ourFunctionWithArgs = (a, b) => {
//   console.log(a - b);
// };
// ourFunctionWithArgs(10, 3); // Output should be a-b=7

// ourFunctionWithArgs = (a, b) => {
//   console.log(a + b);
// };

// ourFunctionWithArgs(10, 3); // Output should be a+b=13

// ========= Global Scope===============
// let myGlobal = 10;
// fun1 = () => {
//   //Assign 5 to  oopsGlobnal here
//   oopsGlobal = 5;
// };
// fun2 = () => {
//   let output = "";
//   if (typeof myGlobal != "undefined") {
//     output += "myGlobal: " + myGlobal;
//   }
//   if (typeof oopsGlobal != "undefined") {
//     output += " oopsGlobal: " + oopsGlobal;
//   }
//   console.log(output);
// };
// fun1();
// fun2();
// ========= Local Scope===============
// myLocalScope = () => {
//   const myVar = 5;
//   console.log(myVar);
// };
// myLocalScope();
// console.log(myVar); //Should get an error myVar is not defined as it's within the function
// ========= Global VS Local Scope===============
// let outerWear = "T-shirt";
// myOutfit = () => {
//   let outerWear = "Sweater";
//   return outerWear;
// };
// console.log(myOutfit());
// console.log(outerWear);
// ========= Retunr a value from a function ===============
// minusSeven = (num) => {
//   return num - 7;
// };
// console.log(minusSeven(10));

// timesFive = (num) => {
//   return num * 5;
// };
// console.log(timesFive(10));
// ========= Undefined Value returned ===============
// let sum = 0;
// addThree = () => {
//   sum = sum + 3;
// };

// console.log(addThree(10));

// addFive = () => {
//   sum += 5; // it is the same thing like this "sum = sum + 5;""
// };
// console.log(addFive(10));

// ========= Assignment with a Returned Value ===============
// let changed = 0;
// change = (num) => {
//   return (num + 5) / 3;
// };
// changed = change(10);
// console.log(changed);

// let processed = 0;
// processArg = (num) => {
//   return (num + 3) / 5;
// };
// processed = processArg(7);
// console.log(processed);

// ========= Stand in Line ===============
// nextInLine = (arr, item) => {
//   arr.push(item);
//   return arr.shift();
// };
// const testArr = [1, 2, 3, 4, 5];
// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));

// ========= Boolean Values ===============
// welcomeToBooleans = () => {
//   return true;
// };

// ========= If Statements ===============
// ourTrueOrFalse = (value) => {
//   if (value == 12) {
//     return "Yes, it's true";
//   }
//   return "No, it's false"; //show show this as 12 is not equal to 11
// };
// console.log(ourTrueOrFalse(11));

// ========= Equality Operators ===============
// testEqual = (val) => {
//   if (val == 12) {
//     return "Equal";
//   }
//   return "not Equal";
// };
// console.log(testEqual(5));

// ========= Strict Equality Operators ===============
// testSctrict = (val) => {
//   if (val === 3) {
//     return "Equal";
//   }
//   return "Not Equal";
// };
// console.log(testSctrict("3"));
// console.log(testSctrict(3));

// =========  Inequality Operators ===============
// testNotEqual = (val) => {
//   if (val != 99) {
//     return "Not Equal";
//   }
//   return "Equal";
// };
// console.log(testNotEqual(99));
// testNotEqual = (val) => {
//   if (val != 99) {
//     return "Not Equal";
//   }
//   return "Equal";
// };
// console.log(testNotEqual("99"));

// ========= Strick Inequality Operators ===============
// testNotEqual = (val) => {
//   if (val !== 99) {
//     return "Not Equal";
//   }
//   return "Equal";
// };
// console.log(testNotEqual("99"));
// testNotEqual = (val) => {
//   if (val !== 99) {
//     return "Not Equal";
//   }
//   return "Equal";
// };
// console.log(testNotEqual(99));

// ========= Greater than Operators ===============
// testGreaterThan = (val) => {
//   if (val > 99.999) {
//     return "Over 100";
//   }
//   if (val > 9.999) {
//     return "10 or Over";
//   }
//   return "Under 10";
// };
// console.log(testGreaterThan(10));

// ========= Greater than or Equal Operators ===============
// testGreaterOrEqual = (val) => {
//   if (val >= 20) {
//     return "20 or Over";
//   }
//   if (val >= 10) {
//     return "10 or Over";
//   }
//   return "Less than 10";
// };
// console.log(testGreaterOrEqual(10));

// ========= Less than Operators ===============
// testLessThan = (val) => {
//   if (val < 24.999) {
//     return "Under 25";
//   }
//   if (val < 54.999) {
//     return "Under 55";
//   }
//   return "55 or Over";
// };
// console.log(testLessThan(55));

// ========= Less than or Equal Operators ===============
// testLessOrEqual = (val) => {
//   if (val <= 25) {
//     return "Under or Equal to 25";
//   }
//   if (val <= 55) {
//     return "Under or Equal to 55";
//   }
//   return "55 or Over";
// };
// console.log(testLessOrEqual(24));

// ========= AND  Operators ===============
// testAndOperators = (val) => {
//   if (val <= 50 && val >= 25) {
//     return "Value between 50 and 25 both numbers are included.";
//   }
//   return "Over 55 or Under 25";
// };
// console.log(testAndOperators(25));

// ========= OR  Operators ===============
// testOrOperators = (val) => {
//   if (val < 10 || val > 20) {
//     return "outside";
//   }
//   return "Inside";
// };
// console.log(testOrOperators(12));

// ========= Else Statements ===============
// testElse = (val) => {
//   let result = "";
//   if (val > 5) {
//     result = "Bigger than 5";
//   } else {
//     result = "5 or Smaller";
//   }
//   return result;
// };
// console.log(testElse(6));

// ========= Else IF Statements ===============
// testElseIf = (val) => {
//   if (val > 10) {
//     return "Greater than 10";
//   } else if (val < 5) {
//     return "Smaller than 5";
//   } else {
//     return "Between 5 and 10";
//   }
// };
// console.log(testElseIf(4));

// ========= Chaining Else IF Statements ===============
// testSize = (num) => {
//   if (num < 5) {
//     return "Tiny";
//   } else if (num < 10) {
//     return "Small";
//   } else if (num < 15) {
//     return "Medium";
//   } else if (num < 20) {
//     return "Large";
//   } else num >= 20;
//   return "Huge";
// };
// console.log(testSize(19));

// ========= Else IF Statements Challenge ===============
// let names = [
//   "Hole-in-one!",
//   "Eagle",
//   "Birdie",
//   "Par",
//   "Bogey",
//   "Double Bogey",
//   "Go Home!",
// ];
// goldScore = (par, strokes) => {
//   if (strokes == 1) {
//     return names[0];
//   } else if (strokes <= par - 2) {
//     return names[1];
//   } else if (strokes == par - 1) {
//     return names[2];
//   } else if (strokes == par) {
//     return names[3];
//   } else if (strokes == par + 1) {
//     return names[4];
//   } else if (strokes == par + 2) {
//     return names[5];
//   } else if (strokes >= par + 3) {
//     return names[6];
//   }
// };
// console.log(goldScore(5, 9));

// ========= Switch Statements  ===============
// caseInSwitch = (val) => {
//   let answer = "";
//   switch (val) {
//     case 1:
//       answer = "Alpha";
//       break;
//     case 2:
//       answer = "Beta";
//       break;
//     case 3:
//       answer = "Gamma";
//       break;
//     case 4:
//       answer = "Delta";
//       break;
//   }
//   return answer;
// };
// console.log(caseInSwitch(1));

// ========= Default option in Switch Statements  ===============
// caseOfStuff = (val) => {
//   let answer = "";
//   switch (val) {
//     case "a":
//       answer = "Apple";
//       break;
//     case "b":
//       answer = "Bird";
//       break;
//     case "c":
//       answer = "Cat";
//       break;
//     default:
//       answer = "some Stafss which is not in switch statements";
//   }
//   return answer;
// };
// console.log(caseOfStuff("b"));
// console.log(caseOfStuff(99));

// ========= Multiple Identical  option in Switch Statements  ===============
// sequentialSizes = (value) => {
//   let answer = "";
//   switch (value) {
//     case 1:
//     case 2:
//     case 3:
//       answer = "LOW";
//       break;
//     case 4:
//     case 5:
//     case 6:
//       answer = "MEDIUM";
//       break;
//     case 7:
//     case 8:
//     case 9:
//       answer = "HIGH";
//       break;
//     default:
//       answer = "some Stafss which is not in switch statements";
//   }
//   return answer;
// };
// console.log(sequentialSizes(2));
// console.log(sequentialSizes(4));
// console.log(sequentialSizes(7));
// console.log(sequentialSizes("b"));

// ========= Replacing If Else chains Statements with Switch  ===============
// chainToSwitch = (value) => {
//   let answer = "";
//   switch (value) {
//     case "Rustam":
//       answer = "KING";
//       break;
//     case 32:
//       answer = "Correct";
//       break;
//     case 1:
//       answer = "There is no #1";
//       break;
//     case 99:
//       answer = "Missed me buy this much!";
//       break;
//     case 7:
//       answer = "Ate Nine";
//       break;
//   }
//   return answer;
// };
// console.log(chainToSwitch(7));

// ========= Returning Boolean Values from Functions  ===============
// isLess = (a, b) => {
//   return a < b;
// };
// console.log(isLess(20, 15));

// ========= Returning Early Pattern from Functions  ===============
// abTest = (a, b) => {
//   if (a < 0 || b < 0) {
//     return "One or both numbers you have typed is(are) under the 0 or negative, please type the number 0 or above.";
//   }

//   return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// };
// console.log(abTest( 0, 16));

// ========= Counting Cards  ===============
// let count = 0;
// cc = (card) => {
//   switch (card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count++;
//       break;
//     case 10:
//     case "J":
//     case "Q":
//     case "K":
//     case "A":
//       count--;
//       break;
//   }
//   let holdbet = "Hold";
//   if (count > 0) {
//     holdbet = "Bet";
//   }
//   return count + " " + holdbet;
// };
// cc(2);
// cc("K");
// cc(10);
// cc("K");
// cc("A");
// console.log(cc(4));

// ========= Build JavaScript Objects  ===============
// const ourDog = {
//   name: "Camper",
//   legs: 4,
//   tails: 1,
//   friends: ["everything!"],
// };
// const myDog = {
//   name: "Quincy",
//   legs: 3,
//   tails: 2,
//   friends: [],
// };

// ========= Accessing Object Properties with Dot notation  ===============
// const ourDog = {
//   name: "Camper",
//   legs: 4,
//   tails: 1,
//   friends: ["everything!"],
// };
// const nameValue = ourDog.name;
// const legsValue = ourDog.legs;
// console.log(nameValue);
// console.log(legsValue);

// ========= Accessing Object Properties with Bracket notation  ===============
// const myDog = {
//   name: "Boby",
//   legs: 3,
//   tails: 2,
//   friends: [],
// };
// const nameValue = myDog["name"];
// const legsValue = myDog["legs"];
// console.log(nameValue);
// console.log(legsValue);

// ========= Accessing Object Properties with Variables  ===============
// const ourDog = {
//   1: "Camper",
//   2: 4,
//   3: 1,
//   4: ["everything!"],
// };
// const nameValue = 1;
// const value = ourDog[nameValue];
// console.log(value);

// ========= Updating  Object Properties  ===============
// const ourDog = {
//   name: "Boby",
//   place: "New York",
//   age: 7,
//   friends: ["A lot!"],
// };
// ourDog.name = "Updated Body";
// const nameValue = ourDog.name;
// console.log(nameValue);

// ========= ADD NEW Properties to an Object  ===============
// const ourDog = {
//   name: "Boby",
//   place: "New York",
//   age: 7,
//   friends: ["A lot!"],
// };
// ourDog.owner = "Rustam";
// const ownerValue = ourDog.owner;
// console.log(ourDog);
// console.log(ownerValue);

// ========= ADD NEW Properties to an Object  ===============
const ourDog = {
  name: "Boby",
  place: "New York",
  age: 7,
  friends: ["A lot!"],
};
ourDog.owner = "Rustam";
delete ourDog.age;
const ageValue = ourDog.age;
const ownerValue = ourDog.owner;
console.log(ourDog);
console.log(ownerValue);
console.log(ageValue);
