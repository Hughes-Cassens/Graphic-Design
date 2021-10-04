let revealSize = 100;
let townImage;
var increase = document.getElementById('increase');



function preload(){
  townImage = loadImage('preload/town.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  image(townImage, 0, 0, width, height);

  translate(mouseX, mouseY);
  beginShape();
  // Exterior part of shape, clockwise winding
  vertex(-windowWidth, -windowHeight);
  vertex(windowWidth, -windowHeight);
  vertex(windowWidth, windowHeight);
  vertex(-windowWidth, windowHeight);
  // Interior part of shape, counter-clockwise winding
  beginContour();
  vertex(-revealSize, -revealSize);
  vertex(-revealSize, revealSize);
  vertex(revealSize, revealSize);
  vertex(revealSize, -revealSize);
  endContour();
  endShape(CLOSE);
  console.log(revealSize);
}


function mouseClickedIncrease(){
    revealSize = revealSize + 100;
}
function mouseClickedDecrease(){
  revealSize = revealSize - 100;
  if (revealSize <= 0) {
    revealSize = 0;
  }
}