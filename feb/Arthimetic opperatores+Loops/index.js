// let x = 10;
// let y = 3;

// console.log(x + y);
// console.log(x - y);
// console.log(x / y); // DIVISION
// console.log(x % y); // REMINDER OF DIVISION
// console.log(x ** y); // Exponensiation

// increment (++)
// console.log(++x);

// decrement (--)
// console.log(--x);

// Comparison opperators
// relational
// let x = 1;
// console.log(x > 0);
// console.log(x >= 1);
// console.log(x < 1);
// console.log(x <= 1);

//Equality
// console.log(x === 1);
// console.log(x !== 1);

// Strict equality opperator(same type & same value)
// console.log(1 === 1);
// console.log("1" === 1);

// Lose equality opperator (if the values are equal)
// console.log(1 == 1);
// console.log("1" == 1);
// console.log(true == 1);

// Ternary Opperators
// Example: If a customer has more than 100 points,
//they are a gold customer, otherwise they are silver customer.

// let points = 110;
// let type = points > 100 ? "gold" : "silver";
// console.log(type);

// Logical opperators AND (&&)
// Returns true if both operands are TRUE
// console.log(true && true);
// console.log(false && true);
// console.log(true && false);

// Real world example

// let highIncome = true;
// let goodCraditScore = true;
// let elagibleForLoan = highIncome && goodCraditScore;
// console.log(elagibleForLoan);

// Logical opperators OR (||) this returns TRUE if one the operand is TRUE.

// let highIncome = true;
// let goodCraditScore = false;
// let elagibleForLoan = highIncome || goodCraditScore;
// console.log(elagibleForLoan);

// NOT (!)
// let highIncome = false;
// let goodCraditScore = false;
// let elagibleForLoan = highIncome || goodCraditScore;
// console.log("Elagible", elagibleForLoan);

// let applicationRefused = !elagibleForLoan;
// console.log("Application Refused", applicationRefused);

// How js works with non-Boolean opperators.
// Falsy (false)
// undefined
// null
// 0
// false
// ''
// NaN

// Anytthing that is not falsy --> Truthy

// let userColor = undefined;
// let defaultColor = "blue";
// let currentColor = userColor || defaultColor;
// console.log(currentColor);

// Exercise....

// const isActive = true;
// // const name = "Mosh"; // Truthy value (true)
// const name = ""; // Falsy (false)
// if (name) console.log("Hello");

// const array = [null, undifined, 1, 2, 3];
// console.log(countTruthy(array));

// function countTruthy(array) {
//   let count = 0;
//   for (let value of array) if (value) count++;
//   return count;
// }
//Exercise how to swap variables
// let a = "red";
// let b = "blue";
// // [a, b] = [b, a];
// let c = a;
// a = b;
// b = c;
// console.log(a);
// console.log(b);
