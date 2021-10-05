var layerPanelWidth = 1000;
var layerPanelHeight = 2500;

var panelLayer = new Konva.Layer();
var layerStage = new Konva.Stage({
    container: 'layerPanel',
    width:layerPanelWidth,
    height:layerPanelHeight,
})
// Create Visiualization rects of layers
var recLayerVis = new Konva.Rect({
    x:100,
    y:100,
    width: layerPanelWidth - 200,
    height: 300,
    fill: '#f4f4f4',
    stroke: 'black',
    strokeWidth: 4,
    draggable: true,
})
//Layer Text
var recLayerText = new Konva.Text({
    x:100,
    y:100,
    text: 'Rectangle',
    fontSize: 30,
    fontFamily: 'Calibri',
    fill: 'black',
    draggable: true,
})



var lineLAyerVis = new Konva.Rect({
    x:100,
    y:500,
    width: layerPanelWidth - 200,
    height: 300,
    fill: '#f4f4f4',
    stroke: 'black',
    strokeWidth: 4,
    draggable: true, 
})
// Group Text and rectangles together
const rectangleLayerGroup = new Konva.Group();

rectangleLayerGroup.add(recLayerVis);
rectangleLayerGroup.add(recLayerText);



// layer z-index
const recLayerPosition = recLayerText.zIndex();
recLayerText.zIndex(1)





panelLayer.add(recLayerVis);
panelLayer.add(recLayerText);
panelLayer.add(rectangleLayerGroup);

panelLayer.add(lineLAyerVis);

layerStage.add(panelLayer);





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
  
  console.log(rectangleLayerGroup);
  fitStageIntoLayerPanel();
  // adapt the stage on any window resize
  window.addEventListener('resize', fitStageIntoLayerPanel);