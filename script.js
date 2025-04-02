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
testLessOrEqual = (val) => {
  if (val <= 25) {
    return "Under or Equal to 25";
  }
  if (val <= 55) {
    return "Under or Equal to 55";
  }
  return "55 or Over";
};
console.log(testLessOrEqual(24));
