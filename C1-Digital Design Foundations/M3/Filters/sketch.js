function _(selector){
  return document.querySelector(selector);
}

let img;

function preload() {
  img = loadImage('./preload/apple.jpg');
}

function setup() {
  createCanvas(1080, 720);
  
  image(img, 0, 0, 1080, 720);
}

function draw() {
  print(document.querySelector('#filters').value);
  setFilter();
}

function setFilter() {

  if(document.querySelector('#filters').value == 'No Filter'){
    image(img, 0, 0, 1080, 720);
  }

  if(document.querySelector('#filters').value == 'Threshold'){
    image(img, 0, 0, 1080, 720);
    filter(THRESHOLD, 0.6);
  }

  if(document.querySelector('#filters').value == 'Grayscale'){
    image(img, 0, 0, 1080, 720);
    filter(GRAY);
  }

  if(document.querySelector('#filters').value == 'Invert'){
    image(img, 0, 0, 1080, 720);
    filter(INVERT);
  }

  if(document.querySelector('#filters').value == 'Posterize'){
    image(img, 0, 0, 1080, 720);
    filter(POSTERIZE, 5);
  }

  if(document.querySelector('#filters').value == 'Crystalize'){
    image(img, 0, 0, 1080, 720);
    filter(POSTERIZE, 10);
    filter(DILATE);  
    filter(DILATE);  
    filter(DILATE);  
    filter(DILATE);  
  }

  if(document.querySelector('#filters').value == 'Paint'){
    image(img, 0, 0, 1080, 720);
    filter(POSTERIZE, 10);
    filter(ERODE);
    filter(ERODE);
    filter(ERODE);
    filter(ERODE);
  }

  if(document.querySelector('#filters').value == 'Fresco'){
    image(img, 0, 0, 1080, 720);
    filter(POSTERIZE, 5);
    filter(ERODE);
    filter(ERODE);
    filter(ERODE);
    filter(ERODE);
    filter(ERODE);
  }

  if(document.querySelector('#filters').value == 'Sponge'){
    image(img, 0, 0, 1080, 720);
    filter(POSTERIZE, 5);
    filter(DILATE);
    filter(ERODE);
    filter(DILATE);
    filter(ERODE);
   
  }

}
