  var filterInput;


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
  filterInput = document.getElementById("filters").value;
}

document.getElementById('filters').addEventListener('change', function(){
  print(_('#filters').value);
  setFilter();
<<<<<<< Updated upstream
});

function draw() {
  
=======
  

>>>>>>> Stashed changes
}







function setFilter() {

  if(_('#filters').value == 'No Filter'){
    image(img, 0, 0, 1080, 720);
  }

  if(_('#filters').value == 'Threshold'){
    image(img, 0, 0, 1080, 720);
    filter(THRESHOLD, 0.6);
  }

  if(_('#filters').value == 'Grayscale'){
    image(img, 0, 0, 1080, 720);
    filter(GRAY);
  }

  if(_('#filters').value == 'Invert'){
    image(img, 0, 0, 1080, 720);
    filter(INVERT);
  }

  if(_('#filters').value == 'Posterize'){
    image(img, 0, 0, 1080, 720);
    filter(POSTERIZE, 5);
  }

  if(_('#filters').value == 'Crystalize'){
    image(img, 0, 0, 1080, 720);
    filter(POSTERIZE, 10);
    filter(DILATE);  
    filter(DILATE);  
    filter(DILATE);  
    filter(DILATE);  
  }

  if(_('#filters').value == 'Paint'){
    image(img, 0, 0, 1080, 720);
    filter(POSTERIZE, 10);
    filter(ERODE);
    filter(ERODE);
    filter(ERODE);
    filter(ERODE);
  }

  if(_('#filters').value == 'Fresco'){
    image(img, 0, 0, 1080, 720);
    filter(POSTERIZE, 5);
    filter(ERODE);
    filter(ERODE);
    filter(ERODE);
    filter(ERODE);
    filter(ERODE);
  }

  if(_('#filters').value == 'Sponge'){
    image(img, 0, 0, 1080, 720);
    filter(POSTERIZE, 5);
    filter(DILATE);
    filter(ERODE);
    filter(DILATE);
    filter(ERODE);
   
  }

}
