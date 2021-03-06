let w = 1080;
let h = 720;
let softbrush;


function preload() {
  softbrush = loadImage('./preload/softbrush.png');
}


function setup() {
  canvas = createCanvas(windowWidth-100, windowHeight-200);
  brush = select("#brushTool");
  pencil = select("#pencilTool");
  eraser = select("#eraserTool");
  background(255);
}

function draw() {
  size = select("#weight").elt.value;
  color = select("#color").elt.value;
  // put drawing code here
  
  //mouseDragged();
 // mousePressed();
}


function mouseDragged(){
  let scale = (size * softbrush.width/200);
  stroke(color);
  if(brush.elt.checked===true && mouseX>0 && mouseX<w && mouseY>0 && mouseY<h){
    image(softbrush, mouseX - (scale/2), mouseY - (scale/2), scale, scale);
    console.log(color)
    tint(color);
  }else if(pencil.elt.checked==true  && mouseX>0 && mouseX<w && mouseY>0 && mouseY<h){ 
      strokeWeight(size);
      line(pmouseX, pmouseY, mouseX, mouseY);
  }else if(eraser.elt.checked==true && mouseX<w && mouseY>0 && mouseY<h){
     image(softbrush, mouseX - (scale/2), mouseY - (scale/2), scale*2, scale*2);
     tint(255);
  }else {
    return;
  }


}

function mousePressed(e){
  x = mouseX;
  y = mouseY;

  if(brush.elt.checked == true || pencil.elt.checked == true){
    mouseDragged();
    return "done";
  }

  return;
  console.log("start ");

}

function clearCanvas() {
   clear();
   background(255);
}

function saveSketch() {
  alert("Are you sure you want to save this to your computer?")
  saveCanvas('myDrawing');
}


