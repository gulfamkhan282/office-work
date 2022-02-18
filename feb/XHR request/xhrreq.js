// function loadXMLDoc() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       document.getElementById("demo").innerHTML = this.responseText;
//     }
//   };
//   xhttp.open("GET", "name.html", false);
//   xhttp.send();
// }

// x = 0;
// var x;
// console.log(x);
// var let = x;

const myTableBody = document.querySelector("#mytable > tbody");
function myRequest() {
  const request = new XMLHttpRequest();
  // let id = 12;
  // let data = `https://jsonplaceholder.typicode.com/posts/id=${id}`;
  // console.log(data);

  request.open("GET", "https://jsonplaceholder.typicode.com/posts/");
  console.log(request.status);
  request.onload = () => {
    try {
      const json = JSON.parse(request.responseText);
      populateTable(json);
      console.log(request.status);
    } catch (e) {
      console.log(request.status);

      console.log("There is some error", e);
    }
  };
  request.send();
}
function populateTable(json) {
  if (json) {
    json.map((row) => {
      const tr = document.createElement("tr");
      const td1 = document.createElement("td");
      const td2 = document.createElement("td");
      const td3 = document.createElement("td");
      const td4 = document.createElement("td");
      td1.textContent = row.id;
      td2.textContent = row.userId;
      td3.textContent = row.title;
      td4.textContent = row.body;
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);

      myTableBody.appendChild(tr);
    });
  }
}
document.addEventListener("DOMContentLoaded", () => {
  myRequest();
});
