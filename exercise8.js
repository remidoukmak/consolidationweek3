// Write a JavaScript program to remove items from a dropdown list.

// create a dropdown list with four colors as options in html
// add a button which removes the color upon clicking
// write a function which selects the dropdown list from html by getElementById and then removes the color

function removecolor() {
  let color = document.getElementById("colorSelect");
  color.remove(color.selectedIndex);
}
removecolor();
