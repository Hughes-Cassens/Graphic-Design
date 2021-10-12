var mousePosition;
var touchPosition;

var touchDown = false;
//track state of mousedown and up
var isMouseDown;
function rgb(){
    let pixelColor = ctx.getImageData(mouse.x, mouse.y,1,1);
 
    let pixels = pixelColor.data;
    let r = pixels[0];
    let g = pixels[1];
    let b = pixels[2];
    
   
    $("#redValue").text(r).val();
    $("#greenValue").text(g).val();
    $("#blueValue").text(b).val();
    
}




//reference to the canvas element
var c = document.getElementById("myCanvas");
//reference to 2d context
var ctx = c.getContext("2d");
c.width = innerWidth;
c.height = innerHeight;

c.style.background = 'black';

//add listeners
document.addEventListener('mousemove', move, false);
document.addEventListener('mousedown', setDraggable, false);
document.addEventListener('mouseup', setDraggable, false);

window.addEventListener('touchstart',setDraggable,false);
window.addEventListener('touchmove',move);
window.addEventListener('touchend',setDraggable,false);

function d(){
   console.log("touchend");
   touchDown = false;
   console.log(touchDown);
};
function m(event){
  
  console.log(touchDown);
   
}



function f(event){
    
    console.log(touchDown);
    touchDown = true;
    
}

var red = "rgba(255,0,0,1)";
var green = "rgba(0,255,0,1";
var blue = "rgba(0,0,255,1";
// Mouse events
var mouse = {
    x: 0,
    y: 0
}

window.addEventListener("mousemove",function(event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    rgb();
});




//make some circles
var c1 = new Circle((c.width/2 - 150), (c.height/2), 100, red, "black");
var c2 = new Circle((c.width/2), (c.height/2 - 150), 100, green, "black");
var c3 = new Circle((c.width/2 + 150), (c.height/2), 100, blue, "black");
//make a collection of circles
var circles = [c1, c2, c3];

//main draw method
function draw() {
    //clear canvas
    ctx.clearRect(0, 0, c.width, c.height);
    drawCircles();
    rgb();
   
}

//draw circles
function drawCircles() {
    for (var i = circles.length - 1; i >= 0; i--) {
        circles[i].draw();
    }
}

//key track of circle focus and focused index
var focused = {
   key: 0,
   state: false
}

//circle Object
function Circle(x, y, r, fill, stroke) {
    this.startingAngle = 0;
    this.endAngle = 2 * Math.PI;
    this.x = x;
    this.y = y;
    this.r = r;

    this.fill = fill;
    this.stroke = stroke;

    this.draw = function () {
        ctx.globalCompositeOperation = "screen";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, this.startingAngle, this.endAngle);
        ctx.fillStyle = this.fill;
        ctx.lineWidth = 3;
        ctx.fill();
        
    }
}

function move(e) {
    if (!isMouseDown && !touchDown) {
        return;
    }
    console.log(touchDown);
    if (isMouseDown == true) {
        getMousePosition(e);
        //if any circle is focused
        if (focused.state) {
            // Mouse
            circles[focused.key].x = mousePosition.x;
            circles[focused.key].y = mousePosition.y;
            console.log("mvo");
            draw();
            return;
            
        } 
    }
    else if (touchDown == true){
        // console.log(e);
        getTouchPosition(e);
        console.log(e.changedTouches[0].clientX);
        // console.log("mvo");
        //if any circle is focused
        if (focused.state) {
                circles[focused.key].x = e.changedTouches[0].clientX;
                circles[focused.key].y = e.changedTouches[0].clientY;
                console.log(touchPosition.x);
            draw();
            return;
            
        } 
    }
    
    //no circle currently focused check if circle is hovered
    for (var i = 0; i < circles.length; i++) {
        if (intersects(circles[i])) {
            circles.move(i, 0);
            focused.state = true;
            break;
            
        }
    }
    draw();
}



//set mousedown state
function setDraggable(e) {
    var t = e.type;

    if (t === "mousedown") {
        isMouseDown = true;
    }
    else if(t === "touchstart" || t === "touchmove") {
        touchDown = true;
        console.log("fired");
    }
    else if (t === "mouseup") {
        isMouseDown = false;
        
        releaseFocus();
    }
    else if(t === "touchend"){
        touchDown = false;
        console.log("endTouch");
        releaseFocus();
    }
}

function releaseFocus() {
    focused.state = false;
}

function getMousePosition(e) {
    var rect = c.getBoundingClientRect();
    mousePosition = {
        x: Math.round(e.x - rect.left),
        y: Math.round(e.y - rect.top)
    }
    
}

function getTouchPosition(e) {
    console.log(e.clientX);
    var rect = c.getBoundingClientRect();
    touchPosition = { 
        x: Math.round(e.changedTouches[0].clientX - rect.left),
        y: Math.round(e.changedTouches[0].clientY - rect.top)
    }
    // console.log(touchPosition.x);
    // console.log(e.x);
    // console.log(rect.left);
}
// calc RGB

//detects whether the mouse cursor is between x and y relative to the radius specified
function intersects(circle) {
    // subtract the x, y coordinates from the mouse position to get coordinates 
    // for the hotspot location and check against the area of the radius
    var areaX
    var areaY
    if (touchDown == true) {
        console.log(touchPosition.x);
        areaX = touchPosition.x - circle.x;
        areaY = touchPosition.y - circle.y;
        // console.log(touchPosition.x);
    }
    else{
         areaX = mousePosition.x - circle.x;
         areaY = mousePosition.y - circle.y;
        // console.log(mousePosition.x);
    }
    
    //return true if x^2 + y^2 <= radius squared.
    return areaX * areaX + areaY * areaY <= circle.r * circle.r;
}

Array.prototype.move = function (old_index, new_index) {
    if (new_index >= this.length) {
        var k = new_index - this.length;
        while ((k--) + 1) {
            this.push(undefined);
        }
    }
    this.splice(new_index, 0, this.splice(old_index, 1)[0]);
};
draw();