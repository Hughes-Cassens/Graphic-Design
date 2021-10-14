var width = window.innerWidth;
var height = window.innerHeight;
var mousePos;


var drawArea = document.getElementById("container");


// function to build anchor point
function buildAnchor(x, y) {
  var anchor = new Konva.Circle({
    x: x,
    y: y,
    radius: 6,
    stroke: '#666',
    fill: '#ddd',
    strokeWidth: 2,
    draggable: true,
  });
  layer.add(anchor);

  // add hover styling
  anchor.on('mouseover', function () {
    document.body.style.cursor = 'pointer';
    this.radius(10)
    this.strokeWidth(4);
  });
  anchor.on('mouseout', function () {
    document.body.style.cursor = 'default';
    this.strokeWidth(2);
    this.radius(6);
  });

  anchor.on('dragmove', function () {
    updateDottedLines();
  });

  return anchor;
}






var stage = new Konva.Stage({
  container: 'container',
  width: width,
  height: height,
});

var layer = new Konva.Layer();
stage.add(layer);

// function to update line points from anchors
function updateDottedLines() {
  var q = linePath1;


  var linePath = layer.findOne('#linePath');

  linePath.points([
    q.start.x(),
    q.start.y(),
    q.control.x(),
    q.control.y(),
    q.end.x(),
    q.end.y(),
  ]);
}


function addAnchorPoints(){
  console.log(line);
}

function decreaseAnchorPoints(){
  console.log("decrease");
}

// we will use custom shape for curve


var linePath = new Konva.Line({
  dash: [10, 10, 0, 10],
  strokeWidth: 3,
  stroke: 'black',
  lineCap: 'round',
  id: 'linePath',
  opacity: 0.3,
  points: [0, 0],
});
layer.add(linePath);



// special objects to save references to anchors
var linePath1 = {
  start: buildAnchor(275, 30),
  control: buildAnchor(176, 249),
  end: buildAnchor(60, 500),
};




// Drag and draw line functionality
stage.on('mousedown',function(){
  var quadraticLine = new Konva.Shape({
    stroke: 'black',
    strokeWidth: 2,
    sceneFunc: (ctx, shape) => {
      ctx.beginPath();
      ctx.moveTo(linePath1.start.x(), linePath1.start.y());
      ctx.quadraticCurveTo(
        linePath1.control.x(),
        linePath1.control.y(),
        linePath1.end.x(),
        linePath1.end.y()
      );
      ctx.fillStrokeShape(shape);
    },
  });
  layer.add(quadraticLine);
  
})

// Listen for Buttons





// $("#increase").on('click',addAnchorPoints);
// $("#decrease").on('click',decreaseAnchorPoints);



updateDottedLines();