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
nextInLine = (arr, item) => {
  arr.push(item);
  return arr.shift();
};
const testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
