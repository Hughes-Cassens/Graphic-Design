let revealSize = 100;
let townImage;

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
  vertex(-width, -height);
  vertex(width, -height);
  vertex(width, height);
  vertex(-width, height);
  // Interior part of shape, counter-clockwise winding
  beginContour();
  vertex(-revealSize, -revealSize);
  vertex(-revealSize, revealSize);
  vertex(revealSize, revealSize);
  vertex(revealSize, -revealSize);
  endContour();
  endShape(CLOSE);
}