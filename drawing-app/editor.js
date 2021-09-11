 function _(selector){
   return document.querySelector(selector);
 }
 

// let type
// let size


// brush = document.getElementById("brushTool");
// brush.addEventListener("click", (e) =>{
//   console.log("I am a brush now")
//   });

let softbrush;
let brushStrokes=[];

function preload() {
  softbrush = loadImage('./softbrush.png');
  wall = loadImage('./blueWall.jpg');
  painting1 = loadImage('./painting01.jpg');
  painting2 = loadImage('./painting02.jpg');
  painting3 = loadImage('./painting03.jpg');
}

// let layer1;
let brushStroke;
let shape1;
let image1;
let image2;
let image3;
let image4;

function setup() {
  canvas = createCanvas(1080, 720);
  
  // print(brushStroke.x, brushStroke.y);
  background(255);
  //layers could be constructor classes?
  // layer1 = createGraphics(1080,720);
  // layer1.clear();
  
  image2 = new DraggableImages(painting1, 0, 0, painting1.width, painting1.height);
  image3 = new DraggableImages(painting2, 0, 0, painting2.width, painting2.height);
  image4 = new DraggableImages(painting3, 0, 0, painting3.width/2, painting3.height/2);

  // layer2= createGraphics(1080,720);
  // layer3= createGraphics(1080,720);
  // layer4= createGraphics(1080,720);
}

// function tool() {
//   let toolType= _("selectorTool");
//   console.log(toolType);
// }



function draw(){
  background(255);
  
  // if(brushStroke != null){
  //   for(let i = 0;i<brushStrokes.length;i++){
  //     if(brushStrokes[i][1]=="false"){
  //       brushStrokes[i][0].show();
  //       brushStrokes[i][1]="true";
  //       brushStroke = null;
  //     }
      
  //   }


  //   console.log("I run in draw")
  // }

  // mouseDragged();
  

  //shape();
  // mousePressed();
  // mouseReleased();
  // background(255);
  // clear();

  image1 = image(wall, 0, 0, 1080, 720);
 

  if(image2 != null){
    image2.over();
    image2.update();
    image2.show();
  }
  

  if(image3 != null){
    image3.over();
    image3.update();
    image3.show();
  }
  

  if(image4 != null){
    image4.over();
    image4.update();
    image4.show();
  }
  
  
  if(shape1 != null){
    shape1.over();
    shape1.update();
    shape1.show();
    }
  // image(layer1, 0, 0);
}

function mouseDragged(){

  // let color = _("#color").value;
  if(document.querySelector("#brushTool").checked==true  && mouseX>0 && mouseX<1080 && mouseY>0 && mouseY<720){
  brushStroke = new BrushStroke(softbrush, mouseX, mouseY, 100, 100);
  brushStrokes.push([brushStroke,"false"]);
  console.log(brushStrokes)
  }
  console.log("I run here")
  // let size = _("#weight").value;
  // let scale = (size * softbrush.width/200)
  // strokeWeight(size);
  // stroke(color);
  // if(document.querySelector("#brushTool").checked==true  && mouseX>0 && mouseX<1080 && mouseY>0 && mouseY<720){
  //   image(softbrush, mouseX - (scale/2), mouseY - (scale/2),scale,scale);
  //   tint(color);
  // }
  // else if(_("#pencilTool").checked==true  && mouseX>0 && mouseX<1080 && mouseY>0 && mouseY<720){
  //   line(pmouseX, pmouseY, mouseX, mouseY);
  // }

}


let startX;
let startY;
let endX;
let endY;
let x;
let y;
let w;
let h;
let counter;


function mousePressed(event) {
  x = mouseX;
  y = mouseY;
  if(_("#selectorTool").checked==true){
    if(shape1 != null){
    shape1.pressed();
    }
    if(image1 !=null){
      image1.pressed();
    }
    if(image2 !=null){
      image2.pressed();
    }
    if(image3 !=null){
      image3.pressed();
    }
    if(image4 !=null){
      image4.pressed();
    }
  }
  if(_("#brushTool").checked == true){
    mouseDragged();
    console.log("I run")
    return "done";
  }
  return;
  console.log("start ");
}

function mouseReleased(event) {
  w = mouseX-x;
  h = mouseY-y;
  console.log("End ");
  if(_("#shapeTool").checked==true && mouseX>0 && mouseX<1080 && mouseY>0 && mouseY<720){
    let fillColor = _("#fill").value;
    let stroke = _("#color").value;
    fill(fillColor);
    // stroke(stroke);
    shape1 = new Draggable(x, y, w, h);

  }

  // if(image1 !=null){
  //   image1.pressed();
  // }

  if(_("#selectorTool").checked==true  && mouseX>0 && mouseX<1080 && mouseY>0 && mouseY<720){
    if(shape1 != null){
    shape1.released();
    }
    if(image1 !=null){
      image1.released();
    }
    if(image2 !=null){
      image2.released();
    }
    if(image3 !=null){
      image3.released();
    }
    if(image4 !=null){
      image4.released();
    }
  }
}


//turn this into a constructor?

