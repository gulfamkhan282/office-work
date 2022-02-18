// function myFunc() {
//   document.getElementById("delete").remove();
// }
function myFunc() {
  // event.target will be the input element.
  var td = event.target.parentNode;
  var tr = td.parentNode; // the row to be removed
  tr.parentNode.removeChild(tr);
}

var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];
var list6 = [];
var list7 = [];
var list8 = [];
var list9 = [];

var n = 1;
var x = 0;

function AddRow() {
  var AddRown = document.getElementById("show");
  var NewRow = AddRown.insertRow(n);
  // get input values
  list1[x] = document.getElementById("s.no").value;
  list2[x] = document.getElementById("name").value;
  list3[x] = document.getElementById("fname").value;
  list4[x] = document.getElementById("roll-no").value;
  list5[x] = document.getElementById("city").value;
  list6[x] = document.getElementById("subject").value;
  list7[x] = document.getElementById("email").value;
  list8[x] = document.getElementById("phone-no").value;
  list9[x] = document.getElementById("delete").outerHTML;

  console.log(list1[x]);
  // add new cell to the table
  var cel1 = NewRow.insertCell(0);
  var cel2 = NewRow.insertCell(1);
  var cel3 = NewRow.insertCell(2);
  var cel4 = NewRow.insertCell(3);
  var cel5 = NewRow.insertCell(4);
  var cel6 = NewRow.insertCell(5);
  var cel7 = NewRow.insertCell(6);

  var cel8 = NewRow.insertCell(7);
  var cel9 = NewRow.insertCell(8);
  cel1.innerHTML = list1[x];
  cel2.innerHTML = list2[x];
  cel3.innerHTML = list3[x];
  cel4.innerHTML = list4[x];
  cel5.innerHTML = list5[x];
  cel6.innerHTML = list6[x];
  cel7.innerHTML = list7[x];
  cel8.innerHTML = list8[x];
  cel9.innerHTML = list9[x];

  n++;
  x++;

  document.sample.reset();
}

function mySort() {
  const table = document.getElementById("show");
  console.log("Called", table);
}
// function deleteRow(show) {
//   try {
//     var table = document.getElementById(show);
//     var rowCount = table.rows.length;

//     for (var i = 0; i < rowCount; i++) {
//       var row = table.rows[i];

//       table.deleteRow(i);
//       rowCount--;
//       i--;
//     }
//   } catch (e) {
//     alert(e);
//   }
// }

// function addStudent() {
//   var name = document.sample.name.value;
//   var fname = document.sample.fname.value;

//   var tr = document.createElement("tr");

//   var td1 = tr.appendChild(document.createElement("td"));
//   var td2 = tr.appendChild(document.createElement("td"));

//   td1.innerHTML = name;
//   td2.innerHTML = fname;

//   document.getElementById("tbl").appendChild("tr");
// }
