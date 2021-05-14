// Write a JavaScript function that accept row, column, (to identify a particular cell) and a string to update the content of that cell.

// create a table in html with three rows
// create a button with a function to change content
// define a variable which prompts the input of rows and columns
// create a prompt to add content in the cell
// select the table from HTML and add a string to update the content of that cell

function changeContent() {
  rowInput = window.prompt("Input the Row number(0,1,2)", "0");
  colInput = window.prompt("Input the Column number(0,1)", "0");
  content = window.prompt("Input the Cell content");
  const updateCell = document.getElementById("myTable").rows[
    parseInt(rowInput, 10)
  ].cells;
  updateCell[parseInt(colInput, 10)].innerHTML = content;
}
changeContent();
