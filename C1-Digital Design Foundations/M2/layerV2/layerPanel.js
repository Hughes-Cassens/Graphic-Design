var layerPanelWidth = 1000;
var layerPanelHeight = 2500;
var layerGroup = [];

var panelLayer = new Konva.Layer();
var layerStage = new Konva.Stage({
    container: 'layerPanel',
    width:layerPanelWidth,
    height:layerPanelHeight,
})

// Group Text and rectangles together/////////////////////////////////////////////////////////////
// Group all layers into one "parent group"
var parentLayersGroup = new Konva.Group();


// Rectangle
var rectangleLayerGroup = new Konva.Group({
    draggable: true,
});
// Line
var lineLayerGroup = new Konva.Group({
    draggable: true,
})
// Circle
var circleLayerGroup = new Konva.Group({
    draggable: true,
})
// Triangle
var triangleLayerGroup = new Konva.Group({
    draggable: true,
})
///////////////////////////////////////////////////////////////////////////////////////////////////


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





// Layer positioning functionality////////////////////////////////////////////////////////////////
rectangleLayerGroup.on('mousedown', function(){
    this.zIndex(3);
    this.on('dragstart', function(){
       if (recLayerVis.y >= lineLayerVis.y || recLayerText.y >= lineLayerText.y) {
           console.log('Move the layer');
       }
    })
    this.on('dragend',function(){
        this.zIndex(0);
    })
})


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

///////////////////////////////////////////////////////////////////////////////////////////////////



// Add parent group to the panel layer
panelLayer.add(parentLayersGroup);
// panelLayer.add(lineLayerGroup);
// panelLayer.add(circleLayerGroup);
// panelLayer.add(triangleLayerGroup);

// add everything to the stage(Canvas)//////////////////////////////////////////////////////////////
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