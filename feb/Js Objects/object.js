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

function createCircle(radius) {
  return {
    radius,

    draw() {
      console.log("draw");
    },
  };
}
const circle1 = createCircle(1);
console.log(circle1);
const circle2 = createCircle(2);
console.log(circle2);
