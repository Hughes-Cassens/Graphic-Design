function _(selector){
  return document.querySelector(selector);
}

let softbrush;
// let brushStrokes=[];

function preload() {
  softbrush = loadImage('./preload/softbrush.png');
}

let brushStroke;

function setup() {
  canvas = createCanvas(1080, 720);
  background(255);
}

function draw() {
  mouseDragged();

}

function mouseDragged(){
  if(document.querySelector("#brushTool").checked==true  && mouseX>0 && mouseX<1080 && mouseY>0 && mouseY<720){
    // brushStroke = new BrushStroke(softbrush, mouseX, mouseY, 100, 100);
    // brushStrokes.push([brushStroke,"false"]);
    let color = _("#color").value;
    // let size = _("#weight").value;
    image(softbrush, mouseX - (scale/2), mouseY - (scale/2),scale,scale);
    tint(color);
    console.log(brushStrokes)
    }
    console.log("I run here")
}

function mousePressed(event){
  x = mouseX;
  y = mouseY;

  if(_("#brushTool").checked == true){
    mouseDragged();
    console.log("I run")
    return "done";
  }
  return;
  console.log("start ");
}
