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
// function lookUpProfile(name, prop) {
//   for (var i = 0; i < contacts.length; i++) {
//     if (contacts[i].firstName === name) {
//       return contacts[i][prop];
//     } else {
//       ("No such property");
//     }
//   }
//   return "No such contact found in the list.";
// }

// var data = lookUpProfile("Harry", "lastName"); // Change this line
// console.log(data); // Change this line
const mySurname = "Rustam";

console.log(mySurname);
