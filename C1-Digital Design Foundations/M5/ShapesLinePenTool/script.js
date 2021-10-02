var width = window.innerWidth;
var height = window.innerHeight;

// function to build anchor point
function buildAnchor(x, y) {
  var anchor = new Konva.Circle({
    x: x,
    y: y,
    radius: 20,
    stroke: '#666',
    fill: '#ddd',
    strokeWidth: 2,
    draggable: true,
  });
  layer.add(anchor);

  // add hover styling
  anchor.on('mouseover', function () {
    document.body.style.cursor = 'pointer';
    this.strokeWidth(4);
  });
  anchor.on('mouseout', function () {
    document.body.style.cursor = 'default';
    this.strokeWidth(2);
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
    console.log(quad.control);
  var q = quad;


  var quadLinePath = layer.findOne('#quadLinePath');
  var bezierLinePath = layer.findOne('#bezierLinePath');

  quadLinePath.points([
    q.start.x(),
    q.start.y(),
    q.control.x(),
    q.control.y(),
    q.end.x(),
    q.end.y(),
  ]);

  
}

// we will use custom shape for curve
var quadraticLine = new Konva.Shape({
  stroke: 'black',
  strokeWidth: 2,
  sceneFunc: (ctx, shape) => {
    ctx.beginPath();
    ctx.moveTo(quad.start.x(), quad.start.y());
    ctx.quadraticCurveTo(
      quad.control.x(),
      quad.control.y(),
      quad.end.x(),
      quad.end.y()
    );
    ctx.fillStrokeShape(shape);
  },
});
layer.add(quadraticLine);

// we will use custom shape for curve
var bezierLine = new Konva.Shape({
  stroke: 'black',
  strokeWidth: 2,
  sceneFunc: (ctx, shape) => {
    ctx.beginPath();
    ctx.fillStrokeShape(shape);
  },
});
layer.add(bezierLine);

var quadLinePath = new Konva.Line({
  dash: [10, 10, 0, 10],
  strokeWidth: 3,
  stroke: 'black',
  lineCap: 'round',
  id: 'quadLinePath',
  opacity: 0.3,
  points: [0, 0],
});
layer.add(quadLinePath);

var bezierLinePath = new Konva.Line({
  dash: [10, 10, 0, 10],
  strokeWidth: 3,
  stroke: 'black',
  lineCap: 'round',
  id: 'bezierLinePath',
  opacity: 0.3,
  points: [0, 0],
});
layer.add(bezierLinePath);

// special objects to save references to anchors
var quad = {
  start: buildAnchor(275, 30),
  control: buildAnchor(176, 249),
  end: buildAnchor(60, 500),
};

updateDottedLines();