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
