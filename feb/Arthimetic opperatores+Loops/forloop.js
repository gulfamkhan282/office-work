// For loop

// for (i = 0; i < 5; i++) console.log("Hello world", i); //i=0 initialization,i<5 condition,i++ incrementing

// for (i = 1; i <= 5; i++) console.log("Hello world", i);

// How to display odd numbers upto 5

// for (i = 1; i <= 5; i++) {
//   if (i % 2 !== 0) console.log(i);
// }

// How to use for loop in reverse order

// for (i = 5; i >= 1; i--) {
//   if (i % 2 !== 0) console.log(i);
// }

// While loop

// let i = 0; // initailization
// while (i <= 5) {
//   //condition
//   if (i % 2 !== 0) console.log(i); //statement
//   i++;
// }

// for-in is for ittrate over properties of an object.

// const person = {
//   name: "Mosh",
//   age: 30,
// };

// for (let key in person) {
//   console.log(key, person[key]);
// }

// for-of is to ittrate over the elements or items in an array.
// const colors = ["red", "green", "blue"];

// for (let index in colors) {
//   console.log(index, colors[index]);
// }

// Exercise.........

// write a function that takes two numbers and returns the maximum of the two in javascript.

// function max(a, b) {
//   if (a > b) {
//     return a;
//   } else if (a == b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// console.log(max(90, 99));

// let number = max(4, 3);
// function max(a, b) {
//   return a > b ? a : b;
// }

// implement a function that takes two perameters and returns image is landScape which means
// width is greater than the highet and returns false when highet is greater than width.

// function isLandScape(width, height) {
//   return width > height;
// }
// console.log(isLandScape(300, 400));

// Exercise........
// if the number is divisible by 3 display Fizz.
// Divisible by 5 ==> Buzz.
// Divisible by both 3 and 5 ==> FizzBuzz.
// Divisible by both 3 or 5 ==> get the same input.
// if the input is not a number that might br boolean or something else ==> NaN.

// const output = fizzBuzz(false);
// console.log(output);

// function fizzBuzz(input) {
//   if (typeof input !== "number") return NaN;
//   if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
//   if (input % 3 === 0) return "Fizz";
//   if (input % 5 === 0) return "Buzz";
//   return input;
// }

// Exercise....
// speed limit 70.
// for every 5km above the speed limit  => Driver should get 1 ponit.
// Math.floor(1.3)
// if driver get 12 points => License suspended

// checkSpeed(130);

// function checkSpeed(speed) {
//   const speedLimit = 70;
//   const kmPerpoint = 5;
//   if (speed < speedLimit) console.log("ok");
//   else {
//     const points = Math.floor((speed - speedLimit) / kmPerpoint);
//     if (points >= 12) console.log("License suspeded");
//     else console.log("points", points);
//   }
// }

// checkSpeed(80);
// function checkSpeed(speed) {
//   const speedLimit = 70;
//   const kmPerPoints = 5;
//   if (speed < speedLimit + kmPerPoints) console.log("ok");
//   else {
//     const points = Math.floor((speed - speedLimit) / kmPerPoints);
//     if (points >= 12) console.log("License suspended");
//     else console.log("points", points);
//   }
// }
// showNumbers(10);

// function showNumbers(limit) {
// for (let i = 0; i <= limit; i++) {
//   if (i % 2 === 0) console.log(i, "Even"); //1st method.
//   else console.log(i, "ODD");
// const message = i % 2 === 0 ? "Even" : "Odd"; // 2nd method.
// console.log(i, message);
// }
// }

// const movie = {
//   title: "a",
//   realeseYear: 2018,
//   rating: 4.5,
//   director: "b",
// };

// showProperties(movie);

// function showProperties(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "string");
//     console.log(key, obj[key]);
//   }
// }

// Exercise ...

// console.log(sum(10));
// function sum(limit) {
//   let sum = 0;
//   for (i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;
//   return sum;
// }

// Exercise
// 1-59 : F
// 60-69 : D
// 70-79 : C
// 80-89 : B
// 90-100 : A
// const marks = [80, 80, 50];
// const average = calculateAverage(marks);
// function calculateGradde(marks) {
//   if (average < 60) return "F";
//   if (average < 70) return "D";
//   if (average < 80) return "C";
//   if (average < 90) return "B";
//   return "A";
// }

// console.log(calculateGradde(marks)); //we can reuse this function whenever we need calculate the average of bunch of numbers that can be marks or temperature that can be any thing.
// function calculateAverage(array) {
//   let sum = 0;
//   for (let value of array) sum += value;
//   return sum / array.length;
// }

//Exercise
// showStars(10);
// function showStars(rows) {
//   for (let row = 1; row <= rows; row++) {
//     let pattern = "";
//     for (let i = 0; i < row; i++) pattern += "*";
//     console.log(pattern);
//   }
// }
// showStars(10);
// function showStars(rows) {
//   for (let row = 1; row < rows; row++) {
//     let pattern = "";
//     for (let i = 0; i < row; i++) pattern += "*";
//     console.log(pattern);
//   }
// }

// Exercise
// showPrimes(20);
// function showPrimes(limit) {
//   for (let i = 2; i < limit; i++) {
//     if (limit % i === 0) return false;
//   }
//   return limit > 1;
// }
// console.log(showPrimes(1));
// console.log(showPrimes(2));
// console.log(showPrimes(9));
// console.log(showPrimes(11));
showPrimes(10);
function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    if (isPrime(number)) console.log(number);
  }
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;

  return true;
}
