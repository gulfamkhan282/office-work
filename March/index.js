let cart = document.querySelectorAll(".addToCart");
console.log(cart);

let product = [
  {
    name: "Tourmaline",
    price: 600,
    inCart: 0,
  },
  {
    name: "Aquamarine",
    price: 450,
    inCart: 0,
  },
  {
    name: "Peridot",
    price: 400,
    inCart: 0,
  },
  {
    name: "Topaz",
    price: 460,
    inCart: 0,
  },
  {
    name: "Garnet",
    price: 500,
    inCart: 0,
  },
];

for (let i = 0; i < cart.length; i++) {
  cart[i].addEventListener("click", () => {
    totalCost(product[i]);
  });
}
function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");
  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
  cartNumbers();
  addToCart();
}

function cartNumbers(product) {
  let productNumber = localStorage.getItem("cartNumbers");
  productNumber = parseInt(productNumber);
  if (productNumber) {
    localStorage.setItem("cartNumbers", productNumber + 1);
    document.querySelector(".countItem").textContent = productNumber + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    // console.log(localStorage.getItem(".countItem"));
    document.querySelector(".countItem").textContent = 1;
  }
}

// var up = document.getElementsByClassName(".addToCart");
// up.innerHTML = "Click on the button to add image element";
// var down = document.getElementById("GFG_DOWN");

// function GFG_Fun() {
//   var img = document.createElement("img");
//   img.src =
//     "https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png";
//   document.getElementById("body").appendChild(img);
//   down.innerHTML = "Image Element Added.";
// }
/* <button onclick="location.href = 'www.yoursite.com';" id="myButton" class="float-left submit-button" >Home</button> */

function saveData() {
  let name, email, phone;

  name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  phone = document.getElementById("phone").value;

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("phone", phone);
}

// var addItemId = 0;
// function addToCart(item) {
//   addItemId += 1;
//   var selectedItem = document.createElement("div");
//   selectedItem.classList.add("cartImg");
//   selectedItem.setAttribute("id", addItemId);
//   var img = document.createElement("img");
//   img.setAttribute("src", item.children[0].currentsrc);
//   var cardTitle = document.createElement("div");
//   cardTitle.innerText = item.children[1].innerText;
//   var label = document.createElement("div");
//   label.innerText = item.children[2].children[0].innerText;
//   var cartItems = document.getElementsByClassName("card-title");
//   var select = document.createElement("span");
//   select.innerText = item.children[2].children[1].value;
//   label.append(select);
//   selectedItem.append("img");
//   selectedItem.append(cardtitle);
//   cartItems.append(selectedItem);
// }
