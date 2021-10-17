//select element
//whatever element has been clicked or touched
// selectElem(document.getSelection());
// console.log(selectElem);
var original = "";
var original;
var selectPosition;
var i = 2;

var hueValue = "hue-rotate(360deg)";
var saturationValue = "saturate(100%)";
var brightnessValue = "brightness(100%)";
var alphaValue = "opacity(100%)";
var fillx = 0;
var filly = 0;
selectPosition = { x: 0, y: 0 };
//const position = { x: 0, y: 0 }

function setIdFunction(id) {
  original = id;
  
  original = (document.getElementById(id)); 
  // console.log(original.getAttribute('data-xy'))

  // original.classList.add("highlight");
  if(original.classList.contains("highlightFunction") == false) {
    original.addEventListener("click", function(){
      original = (document.getElementById(id)); 
      original.classList.toggle("highlight")
      for(var j=1;j<=i;j++){
          temp = document.getElementById('mydiv'+j);
            if(temp != null){
              if(temp != original){
                if(temp.classList.contains("highlight") == true){
                  temp.classList.remove("highlight");
                }
              }
            }
      }
      })
    original.classList.add("highlightFunction");
  }


  if(original.style.filter != ""){
    console.log("Im in here")
    filtered = original.style.filter.split(" ");
    console.log(filtered);
    hueValue = filtered[0];
    saturationValue = filtered[1];
    brightnessValue = filtered[2];
    alphaValue = filtered[3];
  }
  else{
    hueValue = "hue-rotate(360deg)";
    saturationValue = "saturate(100%)";
    brightnessValue = "brightness(100%)";
    alphaValue = "opacity(100%)";

  }

  //Recolor
  if(original != ""){
     var hueSlider = document.getElementById('hue');
  
        hueSlider.addEventListener("input", function() {
        hueValue= "hue-rotate("+this.value+"deg)";
        original.style.filter =  hueValue+saturationValue+brightnessValue+alphaValue;
      })

      var saturationSlider = document.getElementById('saturation');
    
        saturationSlider.addEventListener("input", function() {
        saturationValue = "saturate("+this.value+"%)";
        original.style.filter =  hueValue+saturationValue+brightnessValue+alphaValue;
      })

      var brightnessSlider = document.getElementById('brightness');
      
        brightnessSlider.addEventListener("input", function() {
        brightnessValue = "brightness("+this.value+"%)";
        original.style.filter =  hueValue+saturationValue+brightnessValue+alphaValue;
      })

      var alphaSlider = document.getElementById('alpha');
        
        alphaSlider.addEventListener("input", function() {
        alphaValue = "opacity("+this.value+"%)";
        original.style.filter =  hueValue+saturationValue+brightnessValue+alphaValue;
      })

  }

}

const position = { x: 0, y: 0 }

interact('.draggable').draggable({
  inertia: true,
  modifiers: [
    interact.modifiers.restrictRect({
      endOnly: true
    })
  ],
  autoScroll: true,
  listeners: {
    move: dragMoveListener,
  }
})

function dragMoveListener (event) {
  var target = event.target
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}


window.dragMoveListener = dragMoveListener
// window.getDragAngle = getDragAngle


interact('.resize-drag')
  .resizable({
    edges: { top: true, left: true, bottom: true, right: true },
    invert: 'reposition',
    listeners: {
      move: function (event) {
        let { x, y } = event.target.dataset

        x = (parseFloat(x) || 0) + event.deltaRect.left
        y = (parseFloat(y) || 0) + event.deltaRect.top

        Object.assign(event.target.style, {
          width: `${event.rect.width}px`,
          height: `${event.rect.height}px`,
          transform: `translate(${x}px, ${y}px)`
        })

        Object.assign(event.target.dataset, { x, y })
      }
    }
  })


//Remove element
function removeThis(){
  original.remove();
}


//Duplicate


function duplicate() {
  if(original==undefined){
    original = document.getElementById('mydiv');
  }
  i++;
  var clone = original.cloneNode(true); // "deep" clone
  clone.classList.remove("highlightFunction");

  divstr = "mydiv" + i;
  console.log(divstr)
  clone.id = divstr;
  original.parentNode.appendChild(clone);

  for(var j=0;j<i;j++){
    if(j==0){
      temp = document.getElementById('mydiv');
      if(temp.classList.contains("highlight") == true){
        temp.classList.remove("highlight");
      }
    }
    else{
      temp = document.getElementById('mydiv'+j);
        if(temp != null){
          if(temp.classList.contains("highlight") == true){
            temp.classList.remove("highlight");
          }
        }
    }
  }
 

}
//Arrange
arrangeSelecter=document.getElementById("arrange");

arrange.addEventListener("input", function() {

  currentZIndex= original.style.zIndex;

  //Select by id and then do:

  //Send to Back
  if(currentZIndex >= -3 && arrangeSelecter.value=="Back"){
    original.style.zIndex = -3;
  }

  //Send Backward
  if(currentZIndex > -3 && arrangeSelecter.value=="Backwards"){
    original.style.zIndex = currentZIndex - 1;
  }

  //Bring to Front
  if(currentZIndex <= 3 && arrangeSelecter.value=="Front"){
    original.style.zIndex = 3;
  }

  //Bring Forward
  if(currentZIndex < 3 && arrangeSelecter.value=="Forward"){
    original.style.zIndex = currentZIndex  + 1;
  }
  
  

})
