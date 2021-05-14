// Write a JavaScript function to get the value of the href, hreflang, rel, target, and type attributes of the specified link.

// add the attributes href, hreflang, rel, target and type into an<a> tag within a < p > in html
// add a button with a function to get those attributes on html
// select those attributes by ID
// add an alert which says what value each of the attributes return

function getAttributes() {
  const hrefAttr = document.getElementById("cyf").href;
  alert("The value of the href attribute of the link is : " + hrefAttr);
  const hreflangAttr = document.getElementById("cyf").hreflang;
  alert("The value of the hreflang attribute of the link is : " + hreflangAttr);
  const relAttr = document.getElementById("cyf").rel;
  alert("The value of the rel attribute of the link is : " + relAttr);
  const targetAttr = document.getElementById("cyf").target;
  alert("The value of the taget attribute of the link is : " + targetAttr);
  const typeAttr = document.getElementById("cyf").type;
  alert("The value of the type attribute of the link is : " + typeAttr);
}

getAttributes();
