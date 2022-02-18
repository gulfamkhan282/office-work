// Array Maps
const arr = [5, 1, 3, 2, 6];

// function double(x) {
//   return x * 2;
// }

// function triple(x) {
//   return x * 3;
// }

// function binary(x) {      // one way of syntax
//   return x.toString(2);
// }
// const output = arr.map(function binary(x) {
//   //2nd way of syntax
//   return x.toString(2);
// });

const output = arr.map((x) => {
  // 3rd way with an arrow function.
  return x.toString(2);
});
console.log(output);

// Filter
