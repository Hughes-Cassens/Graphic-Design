var sceneWidth = 1000;
var sceneHeight = 1000;
// first we need to create a stage
var stage = new Konva.Stage({
    container: 'stageParent',   // id of container <div>
    width: sceneWidth,
    height: sceneHeight,
  });
  
  // then create layer
  var layer = new Konva.Layer();
  //create groups

  

  
  // create our shape
  var circle = new Konva.Circle({
    x: stage.width() / 2,
    y: stage.height() / 2,
    radius: 70,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4,
    draggable: true,
  });
  var rect1 = new Konva.Rect({
    x: 20,
    y: 20,
    width: 400,
    height: 300,
    fill: 'green',
    stroke: 'black',
    strokeWidth: 4,
    draggable: true,
  });
  var redLine = new Konva.Line({
    points: [100, 100, 500, 100],
    stroke: 'red',
    strokeWidth: 15,
    lineCap: 'round',
    lineJoin: 'round',
    draggable: true,
  });
  var layer = new Konva.Layer();

      var triangle = new Konva.Wedge({
        x: stage.width() / 2,
        y: stage.height() / 2,
        radius: 300,
        angle: 60,
        fill: 'blue',
        stroke: 'black',
        strokeWidth: 4,
        rotation: -120,
        draggable: true,
      });
  // add the shape to the layer
  layer.add(rect1);
  layer.add(redLine);
  layer.add(circle);
  layer.add(triangle);
  
  // add the layer to the stage
  stage.add(layer);
  
  // draw the image
  layer.draw();

  function fitStageIntoParentContainer() {
    var container = document.querySelector('#stageParent');

    // now we need to fit stage into parent container
    var containerWidth = container.offsetWidth;

    // but we also make the full scene visible
    // so we need to scale all objects on canvas
    var scale = containerWidth / sceneWidth;

    stage.width(sceneWidth * scale);
    stage.height(sceneHeight * scale);
    stage.scale({ x: scale, y: scale });
  }
  
  fitStageIntoParentContainer();
  // adapt the stage on any window resize
  window.addEventListener('resize', fitStageIntoParentContainer);