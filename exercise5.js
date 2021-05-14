// Write a JavaScript function to add rows to a table.

// create a function to add a insert_Row
// define a variable which selects the row from HTMLAllCollection
// create a variable to append first cell then another one for a second cell
// add content to the new cells by giving them names

function insert_Row() {
  const newRow = document.getElementById("sampleTable").insertRow(0);
  const newCell = newRow.insertCell(0);
  const newCell2 = newRow.insertCell(1);
  newCell.innerHTML = "New Cell1";
  newCell2.innerHTML = "New Cell2";
}
insert_Row();
