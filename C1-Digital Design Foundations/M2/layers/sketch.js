function _(selector){
  return document.querySelector(selector);
}

let w = 1920/2;
let h = 1080/2;

let layer01;
let layer02;
let layer03;
let counter = 100;

function setup() {
  //layer 00
  base = createCanvas(w, h);
  base1 = createCanvas(w, h);
  // base2 = createCanvas(w, h);

  //layer 01
  // layer03 = createDiv(base);
  layer01 = createDiv(base);
  layer02 = createDiv(base1);
  
}

// function createLayers() {

// }

function draw() {
  // background(220);
  // layer03.size(w, h);
  // layer03.position(0,0);
  // layer03.style("background", "yellow");
  // layer02 = background(200);
  // layer01 = background(100);
  // layer01.noStroke();
  // layer01.ellipse(layer01.width / 2, layer01.height / 2, 50, 50);
  // image(layer01, 50, 50);
  // image(layer01, 0, 0, 50, 50);
  layer01 = background(220);
  layer02 = background(0);
  
  
}

function mouseClicked(event) {
  counter += 100;
  print(layer01)
  print(layer01.canvas.style.zIndex)
  print(layer02.canvas.style.zIndex)
  // print(layer03)
  // print(layer03.elt.style.zIndex)
 
  // layer01.style('z-index', 1001);
  layer01.canvas.style.zIndex = counter;
  layer01.canvas.style.position = 'absolute';
 
  
}