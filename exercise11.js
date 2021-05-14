// Write a JavaScript program to display a random image (clicking on a button) from the following list.
// create a button in html which displays a random image when it is being clicked
// create a function in JS to dispay a random image from the list provided. Include a for loop in the function which iterates through the images
// create a function which renders a random number using Math.floor(Math.random()) formula
// select image from html and remove it then add a new image

function display_random_image() {
  let theImages = [
    {
      src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
      width: "240",
      height: "160",
    },
    {
      src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
      width: "320",
      height: "195",
    },
    {
      src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
      width: "500",
      height: "343",
    },
  ];

  let preBuffer = [];
  for (let i = 0, j = theImages.length; i < j; i++) {
    preBuffer[i] = new Image();
    preBuffer[i].src = theImages[i].src;
    preBuffer[i].width = theImages[i].width;
    preBuffer[i].height = theImages[i].height;
  }

  // create random image number
  function getRandomInt(min, max) {
    //  return Math.floor(Math.random() * (max - min + 1)) + min;

    imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
  }

  // 0 is first image,   preBuffer.length - 1) is  last image

  let newImage = getRandomInt(0, preBuffer.length - 1);

  // remove the previous images
  let images = document.getElementsByTagName("img");
  let l = images.length;
  for (let p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
  }
  // display the image
  document.body.appendChild(newImage);
}
display_random_image();
