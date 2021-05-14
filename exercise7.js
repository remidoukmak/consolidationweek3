// Write a JavaScript function that creates a table, accept row, column numbers from the user, and input row-column number as content (e.g. Row-0 Column-0) of a cell.

// create a button in html and give it a value of creating a value when the user click on the button
// create a function in JS which creates a table and add two variables with the prompts to add the input number of rows and the input number of columns
// create a for loop which iterates through the rows and columns
// print the text which you want to appear in the column and row using .innerHTML

function createTable() {
  rn = window.prompt("Input number of rows", 1);
  cn = window.prompt("Input number of columns", 1);

  for (var r = 0; r < parseInt(rn, 10); r++) {
    var x = document.getElementById("myTable").insertRow(r);
    for (var c = 0; c < parseInt(cn, 10); c++) {
      var y = x.insertCell(c);
      y.innerHTML = "Row-" + r + " Column-" + c;
    }
  }
}
createTable();
