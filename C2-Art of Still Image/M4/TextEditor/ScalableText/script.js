var sceneWidth = 1000;
var sceneHeight = 1000;
var mouseOver = false;
// first we need to create a stage
var stage = new Konva.Stage({
    container: 'container',   // id of container <div>
    width: sceneWidth,
    height: sceneHeight,
  });
  var textAnchorGroup = new Konva.Group({
      draggable: true
  })
  
  var text = new Konva.Text({
    x: 50,
    y: 60,
    fontSize: 20,
    text: 'Drag Drop and Resize Me! Double click to change my text!',
    // draggable: true,
  });


  var tr = new Konva.Transformer({
    nodes: [text],
    padding: 5,
    enabledAnchors: ['top-left',
                         'top-right',
                         'bottom-left',
                         'bottom-right',
                        'bottom-center'],
    
      });
        tr.on('mouseover', ()=> {  
            tr.visible(true);
          })
        tr.on('mouseout', ()=> {
            // tr.visible(false);
        })

textAnchorGroup.add(text);
textAnchorGroup.add(tr);    
   
      
      
      text.on('dblclick dbltap',()=>{
          var textPosition = text.getAbsolutePosition();
          var stageBox = stage.container().getBoundingClientRect();
          var areaPosition = {
              x: stageBox.left + textPosition.x,
              y:stageBox.top + textPosition.y,
          };
          // create textarea and style it
        var textarea = document.createElement('textarea');
        document.body.appendChild(textarea);

        textarea.value = text.text();
        textarea.style.position = 'absolute';
        textarea.style.top = areaPosition.y + 'px';
        textarea.style.left = areaPosition.x + 'px';
        textarea.style.width = text.width();

        textarea.focus();
        textarea.addEventListener('keydown', function (e) {
            // hide on enter
            if (e.keyCode === 13) {
              text.text(textarea.value);
              document.body.removeChild(textarea);
            }
          });
      })


  var layer = new Konva.Layer();


      
layer.add(textAnchorGroup);



  stage.add(layer);
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
 
 
  console.log(textAnchorGroup.width());
  fitStageIntoParentContainer();
  // adapt the stage on any window resize
  window.addEventListener('resize', fitStageIntoParentContainer);
  // then create layer
  var layer = new Konva.Layer();