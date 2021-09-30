// function _(selector){
//   return document.querySelector(selector);
// }

let w = 1920/2;
let h = 1080/2;
let button;

function setup() {
createCanvas(w, h);
button = createButton('Save As');
button.position(w-75,h+20);
button.mousePressed(saveSketch);

}

//add something to this canvas? Image?

function draw() {
  background(255, 40, 105);
}





function saveSketch() {
  alert("Are you sure you want to save this to your computer?")
  saveCanvas('myCanvas');
}