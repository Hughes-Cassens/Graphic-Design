
var mousePosition;
//track state of mousedown and up
var isMouseDown;
function rgb(){
    let pixelColor = ctx.getImageData(mouse.x, mouse.y,1,1);
 
    let pixels = pixelColor.data;
    let r = pixels[0];
    let g = pixels[1];
    let b = pixels[2];
    
   
    $("#container").text("Red: " + r + " Green: " + g + " Blue: " + b).val();
    
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
var c1 = new Circle(500, 500, 100, red, "black");
var c2 = new Circle(500, 700, 100, green, "black");
var c3 = new Circle(600, 800, 100, blue, "black");
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
    if (!isMouseDown) {
        return;
    }
    getMousePosition(e);
    //if any circle is focused
    if (focused.state) {
        circles[focused.key].x = mousePosition.x;
        circles[focused.key].y = mousePosition.y;
        draw();
        return;
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
    } else if (t === "mouseup") {
        isMouseDown = false;
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
// calc RGB

//detects whether the mouse cursor is between x and y relative to the radius specified
function intersects(circle) {
    // subtract the x, y coordinates from the mouse position to get coordinates 
    // for the hotspot location and check against the area of the radius
    var areaX = mousePosition.x - circle.x;
    var areaY = mousePosition.y - circle.y;
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