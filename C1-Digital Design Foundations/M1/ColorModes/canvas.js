// mod 1 will be landing page
// mod 2 will be interactive part
var mod = 1;
var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

var collisionOn = true;
var red = "rgba(255,0,0,1)";
var green = "rgba(0,255,0,1";
var blue = "rgba(0,0,255,1";
var colorArray = [red,green,blue];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var circleArray = [];
var rgbCalcArray = [];
var heightZone = 1;
var widthZone = 1;
var moveApart = false;
var shrink = false;
var mouseIntEnable;
var startArray = [1];
var startButtonPressed = false;
// Circle Object
class Circle {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.mass = 1;
        this.intersect = false;
       switch(mod)
       {
           case 1:
      
            this.velocity ={
                x: (Math.random() - 0.5) * 2,
                y: (Math.random() - 0.5) * 2
            }
           break;
           case 2:
         
                this.velocity = {
            
                x: 0,
                y: 0
    
            };
            break;  
       }
        
        this.color = colorArray.splice([Math.floor(Math.random() * colorArray.length)],1);
      

        this.r = r;


        this.draw = function () {
            c.globalCompositeOperation = "screen";
            c.beginPath();
            c.fillStyle = this.color;
            c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
            c.fill();
        };

        switch(mod)
        {
            case 1:
                this.recalcCirclePos = function()
                {   
                    this.x = canvas.width/2;
                    this.y = canvas.height/2;
                }
            break;
        }
        


        this.update = circleArray => {
            this.draw();
          
            
            
            moveApart = false;
            
            
            for (let i = 0; i < circleArray.length; i++) {
                if (this === circleArray[i]) continue;
                // if (startButtonPressed == true) {
                //     this.recalcCirclePos();
                // }
                if (collisionOn == true && getDistance(this.x,this.y,circleArray[i].x,circleArray[i].y) - this.r * 2 < 0)
                {
                   
                    circleArray[i].intersect = true;
                    var area = intersectionArea(this,circleArray[i]);
                    var areaWhole = Math.floor(area);
                   
                   
                    if (mouseDown == false && touchDown == false) {
                        moveApart = true;
                    }
                    if (this.x == circleArray[i].x && this.y == circleArray[i].y) {
                        posSet = false;
                        moveApart = true;
                    }
                    // when collision occurs
                    
                    if (this.r >= maxRadius) {
                        this.r = -5;
                    }
                }
                this.x += this.velocity.x;
                this.y += this.velocity.y;   
            }
            if (this.x - this.r <= 0 || this.x + this.r >= innerWidth) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.y - this.r <= 0 || this.y + this.r >= innerHeight) {
                this.velocity.y = -this.velocity.y;
            }
            //Interactivity
            // Hover over Circle
            switch(mod){
                case 1:
                    mouseIntEnable = false;
                break;
                case 2:
                    mouseIntEnable = true;
                break;
            }
            
            if (mouseIntEnable == true) {
                if (mouse.x - this.x < 20 && mouse.x - this.x > -20 && mouse.y - this.y < 20 && mouse.y - this.y > -20) {
                    // this.r +=2
                    this.velocity = {
                        x: 0,
                        y: 0
    
                    }  
                }
                else if (shrink == true && this.r == this.maxRadius){
                    
                    this.r -= 2;
                }
                // Drag circle mouse
                if (mouseDown == true) {
                
                if(mouse.x >= this.x - this.r  && mouse.x <= this.x + this.r  && mouse.y >= this.y - this.r  && mouse.y <= this.y + this.r)
                {
                    this.x = mouse.x;
                    this.y = mouse.y;
                   
                }
                }
                // Drag circle touch
                if (touchDown == true) {
                
                if(touch.x >= this.x - this.r && touch.x <= this.x + this.r && touch.y >= this.y - this.r && touch.y <= this.y + this.r)
                {
                    this.x = touch.x;
                    this.y = touch.y;
                   
                }
            }
            
 
        };  
            }
                
         // Not Hovering over Circle
         if (this.r >= maxRadius) {
                    this.r -= 2;
                    this.velocity = {
                
                    x: 0,
                    y: 0
                      
                }
               
            }    
    }
    
}

var areaWhole = Math.floor(Circle.area);
// calc RGB
function rgb(){
    let pixelColor = c.getImageData(mouse.x,mouse.y,1,1);
    if (touchDown == true) {
        pixelColor = c.getImageData(touch.x,touch.y,50,50);
    }
    let pixels = pixelColor.data;
    let r = pixels[0];
    let g = pixels[1];
    let b = pixels[2];
    
   
    $("#container").text("Red: " + r + " Green: " + g + " Blue: " + b).val();
    
}
function getDistance(x1,y1,x2,y2)
{
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;

    return Math.sqrt(Math.pow(xDistance,2) + Math.pow(yDistance,2))
}
function init() {
    var r = 100;
    let x;
    let y;
    
   //Spawn Three Circles
    for (let i = 0; i < 3; i++) {    
    x = Math.floor(Math.random() * canvas.width);
    y = Math.floor(Math.random() * canvas.height);
    if (mouseDown == true || touchDown == true) {
        circle.x = mouse.x;
        circle.y = mouse.y;
        circle.x = touch.x;
        circle.y = touch.y;
        circleArray.push(new Circle(x,y,r))
    }
    // Prevents circles from spawning on each other
    if (i !== 0) {
        for (let j = 0; j < circleArray.length; j++) {
            if (getDistance(x,y,circleArray[j].x,circleArray[j].y) - circleArray.r * 2 < 0) {
                 circleArray.x = Math.random() * (window.innerWidth - circleArray.r * 2) + circleArray.r;
                 circleArray.y = Math.random() * (window.innerHeight - circleArray.r * 2) + circleArray.r;

                 j = -1;
            }
            
        }
    }
    circleArray.push(new Circle(x,y, r));
}
   
    

}
var touchDone = false;
var touchDown = false;
// Touch Events
var touch = {
    x:0,
    y:0
}
window.addEventListener('touchstart',f);
window.addEventListener('touchmove',m);
window.addEventListener('touchend',d);

function d(){
    touchDone = true
    
    touchDown = false;
    posSet = true;
    moveApart = true;
};
function m(event){
    moveApart = false;
    touch.x = event.touches[0].clientX;
    touch.y = event.touches[0].clientY;
    velocity = {
        x:0,
        y:0
    }
    touchDown = true;
}



function f(event){
    
    moveApart = false;
    touch.x = event.touches[0].clientX;
    touch.y = event.touches[0].clientY;
    velocity = {
        x:0,
        y:0
    }
    touchDown = true;
    
}

// Mouse events
var mouse = {
    x: 0,
    y: 0
}
var maxRadius = 200;
var minRadius = 100;
var mouseDown = false;
window.addEventListener("mousemove",function(event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
   
    
});



window.addEventListener("mousedown",function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    
    velocity = {
        x:0,
        y:0
    }
    mouseDown = true;
    

  
    
})
window.addEventListener("mouseup",function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
   
    this.x = this.x;
    this.y = this.y;
    

    mouseDown = false;
    posSet = true;
    moveApart = false;
    shrink = true;


})
var posSet;

switch(mod){
    case 1:
        posSet = true;
    break;
    case 2:
        posSet = false
    break;
}



function initialCirclePositioning()
{
    if (moveApart == true) {
        
        if (circleArray[0].intersect == true) {
            circleArray[0].intersect = false;
            circleArray[0].velocity = {
                
                x:-1,
                y:0
            }
            
            
        }
        
        if (circleArray[1].intersect == true) {
            circleArray[1].intersect = false;
            circleArray[1].velocity = {
            x:+1,
            y:0
        }
        
        
        }
        if (circleArray[2].intersect == true) {
            circleArray[2].intersect = false;
            circleArray[2].velocity = {
            x: 0,
            y: -1
            
        }
        
        }
        
    }
   
    if(moveApart == false){
        circleArray[0].velocity= {
            x:0,
            y:0
        }
        circleArray[1].velocity= {
            x:0,
            y:0
        }
        circleArray[2].velocity= {
            x:0,
            y:0
        }
    }
    

    
}
function animate() 
{
    console.log(moveApart);
    if (posSet == false) {
        initialCirclePositioning(); 
    }
    rgb();
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight)
        for (let i = 0; i < circleArray.length; i++) {
            circleArray[i].update(circleArray);
            $("#start-button").click(function(){
                startButtonPressed = true;
                mod = 2;
                $("#container").css("display","block");
                $("#start-button").css("display","none");
                circleArray[i].recalcCirclePos(circleArray);
            });   
        }
}
init();
animate();


