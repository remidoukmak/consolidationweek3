// Write a JavaScript program to count and display the items of a dropdown list, in an alert window.

function getOptions() {
  let dropdown = document.getElementById("mySelect");
  let txt1 = "No. of items : ";
  let i;
  l = document.getElementById("mySelect").length;
  txt1 = txt1 + l;
  for (i = 0; i < dropdown.length; i++) {
    txt1 = txt1 + "\n" + dropdown.options[i].text;
  }
  alert(txt1);
}
getOptions();
