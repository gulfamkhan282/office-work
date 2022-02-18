// Adding elements to page
// const body = document.body;
// body.append("Hello world");

// const div = document.createElement("div");
// div.innerHTML = "<strong>Hello world</strong>";
// div.textContent = "Hello world 2";

// body.append(div);

// How u want to remove elements
// const body = document.body;

// const div = document.querySelector("div");
// const spanHi = document.querySelector("#hi");
// const spanBye = document.querySelector("#bye");

// suppose we want to remove Bye word or spantag

// spanBye.remove();

// Now we want to add Bye word again so

// div.append(spanBye);

// How to deal with Data attributes

// const body = document.body;

// const div = document.querySelector("div");
// const spanHi = document.querySelector("#hi");
// const spanBye = document.querySelector("#bye");

// console.log(spanHi.dataset.test);
// console.log(spanHi.dataset.longerName);
// // but we can also add new data like
// console.log((spanHi.dataset.newName = "hi"));

// Modifaying Element Classes

const body = document.body;

const div = document.querySelector("div");
const spanHi = document.querySelector("#hi");
const spanBye = document.querySelector("#bye");
// adding a new class below
// spanBye.classList.add("new-class");
// remove a new class below
// spanBye.classList.remove("hi1");

// now by toggle we can remove or add class
// when u want to delete a class just like boolean use
spanBye.classList.toggle("hi3", false);
spanBye.classList.toggle("hi4", true);
