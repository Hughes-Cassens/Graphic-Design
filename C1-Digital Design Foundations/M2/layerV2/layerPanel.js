var layerPanelWidth = 1000;
var layerPanelHeight = 2500;
var layerGroup = [];



// highest layer
var zIndex3Pos = 100;
// second highest
var zIndex2Pos = 500;
// third highest
var zIndex1Pos = 900;
// fourth highest
var zIndex0Pos = 1300;





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

// Rectangle
var rectangleLayerGroup = new Konva.Group({
    x: 0,
    y: 50,
    draggable: true,
    name: 'shape'
});
// Line
var lineLayerGroup = new Konva.Group({
    x: 0,
    y: 10,
    draggable: true,
    name: 'shape'
})
// Circle
var circleLayerGroup = new Konva.Group({
    x: 0,
    y: 5,
    draggable: true,
    name: 'shape'
})
// Triangle
var triangleLayerGroup = new Konva.Group({
    x: 0,
    y:0,
    draggable: true,
    name: 'shape'
})
///////////////////////////////////////////////////////////////////////////////////////////////////
// Create Z-index Zones
var zone3 = new Konva.Line({
    points: [0,480,1000,480],
    stroke: 'red',
    strokeWidth: 10,

});
var zone2 = new Konva.Line({
    points: [0,880,1000,880],
    stroke: 'red',
    strokeWidth: 10,

});
var zone1 = new Konva.Line({
    points: [0,1250,1000,1250],
    stroke: 'red',
    strokeWidth: 10,

});
var zone0 = new Konva.Line({
    points: [],
    stroke: 'red',
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
    y:500,
    width: layerPanelWidth - 200,
    height: 300,
    fill: '#f4f4f4',
    stroke: 'black',
    strokeWidth: 4,

})
// Circle
var circleLayerVis = new Konva.Rect({
    x:100,
    y:900,
    width: layerPanelWidth - 200,
    height: 300,
    fill: '#f4f4f4',
    stroke: 'black',
    strokeWidth: 4,
})
// Triangle
var triangleLayerVis = new Konva.Rect({
    x:100,
    y:1300,
    width: layerPanelWidth - 200,
    height: 300,
    fill: '#f4f4f4',
    stroke: 'black',
    strokeWidth: 4,
})
///////////////////////////////////////////////////////////////////////////////////////////////////



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
    y:600,
    text: 'Line',
    fontSize: 100,
    fontFamily: 'Calibri',
    fill: 'black',
})
// Circle
var circleLayerText = new Konva.Text({
    x:400,
    y:1000,
    text: 'Circle',
    fontSize: 100,
    fontFamily: 'Calibri',
    fill: 'black',
})
// Triangle
var triangleLayerText = new Konva.Text({
    x:350,
    y:1400,
    text: 'Triangle',
    fontSize: 100,
    fontFamily: 'Calibri',
    fill: 'black',
})

///////////////////////////////////////////////////////////////////////////////////////////////////
// Collision Boxes
var boundingBoxRec = recLayerVis.getClientRect({relativeTo: rectangleLayerGroup});
var boundingBoxLine = lineLayerVis.getClientRect({relativeTo: lineLayerGroup});
var boundingBoxCircle = circleLayerVis.getClientRect({relativeTo: circleLayerGroup});
var boundingBoxTriangle = triangleLayerVis.getClientRect({relativeTo: triangleLayerGroup});
var boxRec = new Konva.Rect({
    x: boundingBoxRec.x,
    y: boundingBoxRec.y,
    width: boundingBoxRec.width,
    height: boundingBoxRec.height,
    stroke: 'red',
    strokeWidth: 1,
})
var boxLine = new Konva.Rect({
    x: boundingBoxLine.x,
    y: boundingBoxLine.y,
    width: boundingBoxLine.width,
    height: boundingBoxLine.height,
    stroke: 'red',
    strokeWidth: 1,
})
var boxCircle = new Konva.Rect({
    x: boundingBoxCircle.x,
    y: boundingBoxCircle.y,
    width: boundingBoxCircle.width,
    height: boundingBoxCircle.height,
    stroke: 'red',
    strokeWidth: 1,
})
var boxTriangle = new Konva.Rect({
    x: boundingBoxTriangle.x,
    y: boundingBoxTriangle.y,
    width: boundingBoxTriangle.width,
    height: boundingBoxTriangle.height,
    stroke: 'red',
    strokeWidth: 1,
})
rectangleLayerGroup.add(boxRec);
lineLayerGroup.add(boxLine);
circleLayerGroup.add(boxCircle);
triangleLayerGroup.add(boxTriangle);




// Layer positioning functionality////////////////////////////////////////////////////////////////
parentLayersGroup.on('dragmove', function(e){
    
    var target = e.target;
    var targetRect = e.target.getClientRect();
    parentLayersGroup.children.forEach(function(parentLayersGroup){
        if (parentLayersGroup == target) {
            return;
        }
        if (rectangleLayerGroup.getY() < zone3.points[1]) {
            console.log("you are in the top zone");
        }
        else if(rectangleLayerGroup.getY() >= zone3.getY() && rectangleLayerGroup.getY() <= zone2.getY()){
            console.log("you are in the second highest layer");
        }
        else if(rectangleLayerGroup.getY() <= zone2.getY() && rectangleLayerGroup.getY() >= zone1.getY()){
            console.log("you are in the third highest level");
        }
        parentLayersGroup.on('dragstart',function(){
            
           
        })
        parentLayersGroup.on('dragend', function(){
            parentLayersGroup.zIndex(0);
        })


        if (haveIntersection(parentLayersGroup.getClientRect(), targetRect)) {
         
            
            
            
            // if (rectangleLayerGroup.y >= lineLayerGroup.y) {
            //     lineLayerGroup.y(+400)
            // }
           
        }
        else{
            
        }
    })

})
rectangleLayerGroup.on('mousedown',function(){
        
    console.log('moving rectangle layer');
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
lineLayerGroup.add(lineLayerVis);
lineLayerGroup.add(lineLayerText);
// Group for the circle layer
circleLayerGroup.add(circleLayerVis);
circleLayerGroup.add(circleLayerText);
// Group for the triangle layer
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


// console.log(mousePos);
  fitStageIntoLayerPanel();
  // adapt the stage on any window resize
  window.addEventListener('resize', fitStageIntoLayerPanel);