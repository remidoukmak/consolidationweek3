// Write a JavaScript program to calculate the volume of a sphere.

// create a form in html with the method 'post' then add a radius and volume
// write a function in JS with volume and radius variables
// select the radius element from html via getElementById
// use the formula which calculates the volume of a sphere
// select the volume element from html
// add a feature onload by selecting MyForm fromo html and append it to onsubmit

function volume_sphere() {
  let volume;
  let radius = document.getElementById("radius").value;
  radius = Math.abs(radius);
  volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(4);
  document.getElementById("volume").value = volume;
  return false;
}
window.onload = document.getElementById("MyForm").onsubmit = volume_sphere;

volume_sphere();
