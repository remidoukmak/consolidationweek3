// Write a JavaScript function to get the values of First and Last name of the following form.
// create a form in html and give it 'first name' and 'last name' as input
// create a function to get the value of the first name and last name by selecting the form by Id from html
// create a for loop which iterates through the values and renders the first name and last name

function getFormvalue() {
  let nameValue = document.getElementById("form1");
  for (let i = 0; i < nameValue.length; i++) {
    if (nameValue.elements[i].value != "Submit") {
      console.log(x.elements[i].value);
    }
  }
}
