const myTableBody = document.querySelector("#table1 > tbody");

function myRequest() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://reqres.in/api/users?page=2");

  xhr.onload = () => {
    try {
      const json = JSON.parse(xhr.responseText);
      populateTable(json);
    } catch (e) {
      console.log("could not load ", e);
    }
  };
  xhr.send();
}

function populateTable(json) {
  console.log(json);
  if (json) {
    json.data.map((row) => {
      const tr = document.createElement("tr");
      const td1 = document.createElement("td");
      const td2 = document.createElement("td");
      const td3 = document.createElement("td");
      const td4 = document.createElement("td");
      const td5 = document.createElement("td");
      td1.textContent = row.id;
      td2.textContent = row.email;
      td3.textContent = row.first_name;
      td4.textContent = row.last_name;
      td5.textContent = row.avatar;

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);

      myTableBody.appendChild(tr);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  myRequest();
});
