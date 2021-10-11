
let c1, c2;

function setup() {
  createCanvas(window.innerWidth-20, 500);

}

function draw() {
  c1 = hexToRgb(select("#color1").elt.value);
  c2 = hexToRgb(select("#color2").elt.value);
  setGradient(c1, c2);
  //background(220);
// console.log(c2);
}

// function update(e) {

// }

function hexToRgb(hex) {
  hex = hex.replace('#', '');

  var bigint = parseInt(hex, 16);

  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;

  return color(r, g, b);
}

function setGradient(c1, c2) {
  noFill();
  for (var y = 0; y < height; y++) { 
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}