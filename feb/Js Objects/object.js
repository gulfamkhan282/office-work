// Object-oriented Programming (OOP)
// OOP is basically a style of programming where we see a programe as a collection of
// objects that talk to each other to perform some functionality.

// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   isVisible: true,
//   draw: function () {
//     console.log("draw");
//   },
// };
// circle.draw(); // Method

// Factory Functions

// function createCircle(radius) {
//   return {
//     radius,

//     draw() {
//       console.log("draw");
//     },
//   };
// }
// const circle1 = createCircle(1);
// console.log(circle1);
// const circle2 = createCircle(2);
// console.log(circle2);
// const circle3 = createCircle(3);
// console.log(circle3);

// Constructor Function
// it use Pascal notation (OneTowThreeFour) while factory functions use camel notation i.e oneTwowThreeFour.

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }
// const circle = new Circle(1);

// Dynamic Nature of Object

// const circle = {
//   radius: 1,
// };
// circle.color = "yellow";
// circle.draw = function draw() {};

// delete circle.color;
// delete circle.draw;

// console.log(circle);

// Value vs reference types
// Primitives are copied by their value
// Objects are copied by their reference

// let x = 10;
// let y = x;

// x = 20;

// let x = { value: 10 };
// let y = x;

// x.value = 20;
// console.log(x);

// Primitive type example(primitives are copied by thier value and here we are dealing
// with 2 independent copies i.e (number))

// let number = 10;
// function increase(number) {
//   number++;
// }
// increase(number);
// console.log(number); // result will be 10.

// now change its type to reference object

// let obj = { value: 10 };
// function increase(obj) {
//   obj.value++;
// }
// increase(obj);
// console.log(obj); // result will be 11.

// How to  Enumerate Properties of an Object

// const circle = {
//   radius: 1,
//   draw() {
//     console.log("draw");
//   },
// };
// for (let key in circle) console.log(key, circle[key]); //enumerate properties of an obj\ //returining the keys as string array.

// for (let entry of Object.entries(circle)) console.log(entry); // it returns each key value pair as an array.

// if ("radius" in circle) console.log("yes"); // by in we can check if the given property exists in an object

// Cloning an object (copy an object into another object)

const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// const another = {};  // Old way of copying an obj.
// for (let key in circle)
//  another[key] = circle[key];

// const another = Object.assign({}, circle); // Modern Js way of copying obj. we can also assign some property or leave it empty.

// const another = { ...circle }; // we can also clone an object by spread operator.

// console.log(another);

// Template Literals
// object {}
// string '', ""
//Boolean true or false
// ES6 Template Literals ``

// const message = `This is my
// first message`;
// console.log(message);

const name = "Jhon";
const another = `Hi ${name} ${2 + 3}
Thank u for joining ny mailing list
Regards,
Mosh`;
console.log(another);
