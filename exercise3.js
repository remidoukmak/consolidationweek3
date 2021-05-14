// Write a JavaScript program to set the background color of a paragraph.

// Create a button in html and assign a value and a function
// select the body in html by tag name

function set_background() {
  docBody = document.getElementsByTagName("body")[0];
  //Get all the p elements that are descendants of the body
  myBodyElements = docBody.getElementsByTagName("p");
  // get the first p element
  myp1 = myBodyElements[0];
  // get the second p element
  myp2 = myBodyElements[1];
}
set_background();
