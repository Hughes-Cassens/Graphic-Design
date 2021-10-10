var layerPanelWidth = 1000;
var layerPanelHeight = 2500;
var layerGroup = [];
// var mousePos = stage.getPointerPosition();


var panelLayer = new Konva.Layer();
var layerStage = new Konva.Stage({
    container: 'layerPanel',
    width:layerPanelWidth,
    height:layerPanelHeight,
})

// Group Text and rectangles together/////////////////////////////////////////////////////////////
// Group all layers into one "parent group"
var parentLayersGroup = new Konva.Group();

var zoneLayer = new Konva.Layer();


// Create Z-index Zones
var zone3 = new Konva.Line({
    points: [0,480,1000,480],
    // stroke: 'red',
    strokeWidth: 10,

});
var zone2 = new Konva.Line({
    points: [0,880,1000,880],
    // stroke: 'red',
    strokeWidth: 10,

});
var zone1 = new Konva.Line({
    points: [0,1250,1000,1250],
    // stroke: 'red',
    strokeWidth: 10,

});
var zone0 = new Konva.Line({
    points: [],
    // stroke: 'red',
    strokeWidth: 10,

});

zoneLayer.add(zone3,zone2,zone1,zone0);




// Create visualization containers of layers//////////////////////////////////////////////////////
// Rectangle
var recLayerVis = new Konva.Rect({
    x:100,
    y:100,
    width: layerPanelWidth - 200,
    height: 300,
    fill: '#f4f4f4',
    stroke: 'black',
    strokeWidth: 4,
})
// Line
var lineLayerVis = new Konva.Rect({
    x:100,
    y:300,
    width: layerPanelWidth - 200,
    height: 300,
    fill: '#f4f4f4',
    stroke: 'black',
    strokeWidth: 4,

})
// Circle
var circleLayerVis = new Konva.Rect({
    x:100,
    y:500,
    width: layerPanelWidth - 200,
    height: 300,
    fill: '#f4f4f4',
    stroke: 'black',
    strokeWidth: 4,
})
// Triangle
var triangleLayerVis = new Konva.Rect({
    x:100,
    y:700,
    width: layerPanelWidth - 200,
    height: 300,
    fill: '#f4f4f4',
    stroke: 'black',
    strokeWidth: 4,
})
///////////////////////////////////////////////////////////////////////////////////////////////////
// Rectangle
var rectangleLayerGroup = new Konva.Group({
    // x: 0,
    y: 100,
    draggable: true,
    name: 'shape'
});
// Line
var lineLayerGroup = new Konva.Group({
    // x: 0,
    y: 500,
    draggable: true,
    
    name: 'shape'
})
// Circle
var circleLayerGroup = new Konva.Group({
    // x: 0,
    y: 900,
    draggable: true,
    name: 'shape'
})
// Triangle
var triangleLayerGroup = new Konva.Group({
    // x: 0,
    y:1300,
    draggable: true,
    name: 'shape'
})
///////////////////////////////////////////////////////////////////////////////////////////////////
var rectGroupAbsPos = rectangleLayerGroup.absolutePosition();

// Create layer text for layers////////////////////////////////////////////////////////////////////
// Rectangle Text
var recLayerText = new Konva.Text({
    x:300,
    y:200,
    text: 'Rectangle',
    fontSize: 100,
    fontFamily: 'Calibri',
    fill: 'black',

})
// Line Text
var lineLayerText = new Konva.Text({
    x:400,
    y:400,
    text: 'Line',
    fontSize: 100,
    fontFamily: 'Calibri',
    fill: 'black',
})
// Circle
var circleLayerText = new Konva.Text({
    x:400,
    y:600,
    text: 'Circle',
    fontSize: 100,
    fontFamily: 'Calibri',
    fill: 'black',
})
// Triangle
var triangleLayerText = new Konva.Text({
    x:350,
    y:800,
    text: 'Triangle',
    fontSize: 100,
    fontFamily: 'Calibri',
    fill: 'black',
})

///////////////////////////////////////////////////////////////////////////////////////////////////
// Collision Boxes
// var boundingBoxRec = recLayerVis.getClientRect({relativeTo: rectangleLayerGroup});
// var boundingBoxLine = lineLayerVis.getClientRect({relativeTo: lineLayerGroup});
// var boundingBoxCircle = circleLayerVis.getClientRect({relativeTo: circleLayerGroup});
// var boundingBoxTriangle = triangleLayerVis.getClientRect({relativeTo: triangleLayerGroup});
// var boxRec = new Konva.Rect({
//     x: boundingBoxRec.x,
//     y: boundingBoxRec.y,
//     width: boundingBoxRec.width,
//     height: boundingBoxRec.height,
//     stroke: 'red',
//     strokeWidth: 1,
// })
// var boxLine = new Konva.Rect({
//     x: boundingBoxLine.x,
//     y: boundingBoxLine.y,
//     width: boundingBoxLine.width,
//     height: boundingBoxLine.height,
//     stroke: 'red',
//     strokeWidth: 1,
// })
// var boxCircle = new Konva.Rect({
//     x: boundingBoxCircle.x,
//     y: boundingBoxCircle.y,
//     width: boundingBoxCircle.width,
//     height: boundingBoxCircle.height,
//     stroke: 'red',
//     strokeWidth: 1,
// })
// var boxTriangle = new Konva.Rect({
//     x: boundingBoxTriangle.x,
//     y: boundingBoxTriangle.y,
//     width: boundingBoxTriangle.width,
//     height: boundingBoxTriangle.height,
//     stroke: 'red',
//     strokeWidth: 1,
// })
// rectangleLayerGroup.add(boxRec);
// lineLayerGroup.add(boxLine);
// circleLayerGroup.add(boxCircle);
// triangleLayerGroup.add(boxTriangle);




// Layer positioning functionality////////////////////////////////////////////////////////////////
// highest layer
var zIndex3Pos = 480;
// second highest
var zIndex2Pos = 780;
// third highest
var zIndex1Pos = 1150;
// fourth highest
var zIndex0Pos = 1300;
// Rectangle
parentLayersGroup.on('dragmove', function(e){
    console.log(triangleLayerGroup.getY(),rectangleLayerGroup.getY());
    var target = e.target;
    var targetRect = e.target.getClientRect();
    parentLayersGroup.children.forEach(function(parentLayersGroup){
        if (parentLayersGroup == target) {
            return;
        }
        if (haveIntersection(parentLayersGroup.getClientRect(), targetRect)) {
            
            rectangleLayerGroup.on('dragmove',function(){
                rectangleLayerGroup.zIndex(3);
                if (rectangleLayerGroup.getY() < lineLayerGroup.getY() && rectangleLayerGroup.getY() < circleLayerGroup.getY() && rectangleLayerGroup.getY() < triangleLayerGroup.getY()) {
                    rect1.zIndex(3);
                }
                else if(rectangleLayerGroup.getY() > lineLayerGroup.getY() && rectangleLayerGroup.getY() < circleLayerGroup.getY() && rectangleLayerGroup.getY() < triangleLayerGroup.getY()){
                    rect1.zIndex(2);
                }
                else if(rectangleLayerGroup.getY() > lineLayerGroup.getY() && rectangleLayerGroup.getY() >= circleLayerGroup.getY() && rectangleLayerGroup.getY() <= triangleLayerGroup.getY()){
                    rect1.zIndex(1);
                }
                else if(rectangleLayerGroup.getY() > lineLayerGroup.getY() && rectangleLayerGroup.getY() > circleLayerGroup.getY() && rectangleLayerGroup.getY() > triangleLayerGroup.getY()){
                    rect1.zIndex(0);
                }
            });
            rectangleLayerGroup.on('dragend', function (){
                rectangleLayerGroup.zIndex(0);
            })
            // Line


            lineLayerGroup.on('dragmove',function(){
                lineLayerGroup.zIndex(2);
                if (lineLayerGroup.getY() < rectangleLayerGroup.getY() && lineLayerGroup.getY() < circleLayerGroup.getY() && lineLayerGroup.getY() < triangleLayerGroup.getY()) {
                    redLine.zIndex(3);
                }
                else if(lineLayerGroup.getY() > rectangleLayerGroup.getY() && lineLayerGroup.getY() < circleLayerGroup.getY() && lineLayerGroup.getY() < triangleLayerGroup.getY()){
                    redLine.zIndex(2);
                }
                else if(lineLayerGroup.getY() > rectangleLayerGroup.getY() && lineLayerGroup.getY() > circleLayerGroup.getY() && lineLayerGroup.getY() < triangleLayerGroup.getY()){
                    redLine.zIndex(1);
                }
                else if(lineLayerGroup.getY() > lineLayerGroup.getY() && lineLayerGroup.getY() > circleLayerGroup.getY() && lineLayerGroup.getY() > triangleLayerGroup.getY()){
                    redLine.zIndex(0);
                }
            });
            
            lineLayerGroup.on('dragend', function (){
            lineLayerGroup.zIndex(0);
            })
           // Circle
            circleLayerGroup.on('dragmove',function(){
            circleLayerGroup.zIndex(1);
            if (circleLayerGroup.getY() < rectangleLayerGroup.getY() && circleLayerGroup.getY() < lineLayerGroup.getY() && circleLayerGroup.getY() < triangleLayerGroup.getY()) {
            circle.zIndex(3);
            }
            else if(circleLayerGroup.getY() > rectangleLayerGroup.getY() && circleLayerGroup.getY() < lineLayerGroup.getY() && circleLayerGroup.getY() < triangleLayerGroup.getY()){
            circle.zIndex(2);
            }
            else if(circleLayerGroup.getY() > rectangleLayerGroup.getY() && circleLayerGroup.getY() > lineLayerGroup.getY() && circleLayerGroup.getY() < triangleLayerGroup.getY()){
            circle.zIndex(1);
            }
            else if(circleLayerGroup.getY() > lineLayerGroup.getY() && circleLayerGroup.getY() > rectangleLayerGroup.getY() && circleLayerGroup.getY() > triangleLayerGroup.getY()){
            circle.zIndex(0);
            }
            });
            circleLayerGroup.on('dragend', function (){
            circleLayerGroup.zIndex(0);
            })
            // Triangle
            triangleLayerGroup.on('dragmove',function(){
            triangleLayerGroup.zIndex(0);
            if (triangleLayerGroup.getY() <= zIndex3Pos) {
            triangle.zIndex(3);
            }
            else if(triangleLayerGroup.getY() >= zIndex3Pos && triangleLayerGroup.getY() <= zIndex2Pos){
                triangle.zIndex(2);
            }
            else if(triangleLayerGroup.getY() >= zIndex2Pos && triangleLayerGroup.getY() <= zIndex1Pos){
                triangle.zIndex(1);
            }
            else if(triangleLayerGroup.getY() >= zIndex1Pos && triangleLayerGroup.getY() <= zIndex0Pos){
                triangle.zIndex(0);
            }
            triangleLayerGroup.on('dragend', function (){
                triangleLayerGroup.zIndex(0);
            });

            })
            }
      
    })

})

function haveIntersection(r1, r2) {
    return !(
      r2.x > r1.x + r1.width ||
      r2.x + r2.width < r1.x ||
      r2.y > r1.y + r1.height ||
      r2.y + r2.height < r1.y
    );
  }
// Add text and box to groups//////////////////////////////////////////////////////////////////////
// Group for Rectangle layer
rectangleLayerGroup.add(recLayerVis);
rectangleLayerGroup.add(recLayerText);
//Group for the line layer
lineLayerGroup.offsetY(+200)
lineLayerGroup.add(lineLayerVis);
lineLayerGroup.add(lineLayerText);
// Group for the circle layer
circleLayerGroup.offsetY(+400)
circleLayerGroup.add(circleLayerVis);
circleLayerGroup.add(circleLayerText);
// Group for the triangle layer
triangleLayerGroup.offsetY(+600)
triangleLayerGroup.add(triangleLayerVis);
triangleLayerGroup.add(triangleLayerText);
///////////////////////////////////////////////////////////////////////////////////////////////////

// Add all groups to the parent group/////////////////////////////////////////////////////////////
parentLayersGroup.add(rectangleLayerGroup);
parentLayersGroup.add(lineLayerGroup);
parentLayersGroup.add(circleLayerGroup);
parentLayersGroup.add(triangleLayerGroup);
///////////////////////////////////////////////////////////////////////////////////////////////////




rectangleLayerGroup.zIndex(0);
rect1.zIndex(3);
redLine.zIndex(2);
circle.zIndex(1);
triangle.zIndex(0);


///////////////////////////////////////////////////////////////////////////////////////////////////



// Add parent group to the panel layer
panelLayer.add(parentLayersGroup);
// panelLayer.add(lineLayerGroup);
// panelLayer.add(circleLayerGroup);
// panelLayer.add(triangleLayerGroup);

// add everything to the stage(Canvas)//////////////////////////////////////////////////////////////
layerStage.add(zoneLayer);
layerStage.add(panelLayer);

// Restrict layers movement to the y-axis only//////////////////////////////////////////////////////
rectangleLayerGroup.on('dragmove',()=>{

    rectangleLayerGroup.x(0);
})
lineLayerGroup.on('dragmove',()=>{

    lineLayerGroup.x(0);
})
circleLayerGroup.on('dragmove',()=>{
    circleLayerGroup.x(0);
})
triangleLayerGroup.on('dragmove',()=>{
    triangleLayerGroup.x(0);
})
function fitStageIntoLayerPanel() {
    var container = document.querySelector('#layerPanel');

    // now we need to fit stage into parent container
    var containerWidth = container.offsetWidth;

    // but we also make the full scene visible
    // so we need to scale all objects on canvas
    var scale = containerWidth / layerPanelWidth;

    layerStage.width(layerPanelWidth * scale);
    layerStage.height(layerPanelHeight * scale);
    layerStage.scale({ x: scale, y: scale });
  }

  fitStageIntoLayerPanel();
  // adapt the stage on any window resize
  window.addEventListener('resize', fitStageIntoLayerPanel);