//select element
//whatever element has been clicked or touched
// selectElem(document.getSelection());
// console.log(selectElem);
var original = "";
var original;
var selectPosition;

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
  
        hueSlider.addEventListener("change", function() {
        hueValue= "hue-rotate("+this.value+"deg)";
        original.style.filter =  hueValue+saturationValue+brightnessValue+alphaValue;
      })

      var saturationSlider = document.getElementById('saturation');
    
        saturationSlider.addEventListener("change", function() {
        saturationValue = "saturate("+this.value+"%)";
        original.style.filter =  hueValue+saturationValue+brightnessValue+alphaValue;
      })

      var brightnessSlider = document.getElementById('brightness');
      
        brightnessSlider.addEventListener("change", function() {
        brightnessValue = "brightness("+this.value+"%)";
        original.style.filter =  hueValue+saturationValue+brightnessValue+alphaValue;
      })

      var alphaSlider = document.getElementById('alpha');
        
        alphaSlider.addEventListener("change", function() {
        alphaValue = "opacity("+this.value+"%)";
        original.style.filter =  hueValue+saturationValue+brightnessValue+alphaValue;
      })

  }

  // if(document.getElementById(original).classList.contains("resizable")==false){
  //   dragElement(document.getElementById(original));
  // }
//   interact('.draggable').draggable({
//     listeners: {
//       start (event) {
//        // console.log(event.type, event.target)
//        console.log("start",selectPosition.x,selectPosition.y)
//       },
//       move (event) {
//         //console.log(typeof(original.data))
//         if(original.getAttribute('data-xy') != "0 0"){
//           console.log(original.getAttribute('data-xy'));
//           xy = original.getAttribute('data-xy').split(" ");
//           xy[0] += event.dx;
//           xy[1] += event.dy;
//           event.target.style.transform =
//           `translate(${xy[0]}px, ${xy[1]}px)`;
//         }
//         else{
//           selectPosition.x += event.dx;
//           selectPosition.y += event.dy;
//           event.target.style.transform =
//           `translate(${selectPosition.x}px, ${selectPosition.y}px)`;
//         }
//         //string = xy[0] +" "+xy[1];
//         //console.log("move",position.x,position.y)
  
        
//       },end(){
//         console.log("end", selectPosition.x,selectPosition.y)
//         string = xy[0] +" "+xy[1];
//         original.setAttribute('data-xy', string);
//       },
      
//     }
//   })
}

const position = { x: 0, y: 0 }

interact('.draggable').draggable({
  inertia: true,
  modifiers: [
    interact.modifiers.restrictRect({
      restriction: 'parent',
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


// interact('.rotation-handle')
//   .draggable({
//     onstart: function(event) {
//       var box = event.target.parentElement;
//       var rect = box.getBoundingClientRect();

//       // store the center as the element has css `transform-origin: center center`
//       box.setAttribute('data-center-x', rect.left + rect.width / 2);
//       box.setAttribute('data-center-y', rect.top + rect.height / 2);
//       // get the angle of the element when the drag starts
//       box.setAttribute('data-angle', getDragAngle(event));
//     },
//     onmove: function(event) {
//       var box = event.target.parentElement;

//       var pos = {
//         x: parseFloat(box.getAttribute('data-x')) || 0,
//         y: parseFloat(box.getAttribute('data-y')) || 0
//       };

//       var angle = getDragAngle(event);

//       // update transform style on dragmove
//       box.style.transform = 'translate(' + pos.x + 'px, ' + pos.y + 'px) rotate(' + angle + 'rad' + ')';
//     },
//     onend: function(event) {
//       var box = event.target.parentElement;

//       // save the angle on dragend
//       box.setAttribute('data-angle', getDragAngle(event));
//     },
//   })

// function getDragAngle(event) {
//   var box = event.target.parentElement;
//   var startAngle = parseFloat(box.getAttribute('data-angle')) || 0;
//   var center = {
//     x: parseFloat(box.getAttribute('data-center-x')) || 0,
//     y: parseFloat(box.getAttribute('data-center-y')) || 0
//   };
//   var angle = Math.atan2(center.y - event.clientY,
//     center.x - event.clientX);

//   return angle - startAngle;
// }


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




  


// function initDrag(e) {
//   startX = e.clientX;
//   startY = e.clientY;
//   startWidth = parseInt(document.defaultView.getComputedStyle(original).width, 10);
//   startHeight = parseInt(document.defaultView.getComputedStyle(original).height, 10);
//   document.documentElement.addEventListener('mousemove', doDrag, false);
//   document.documentElement.addEventListener('mouseup', stopDrag, false);
// }

// function doDrag(e) {
//   original.style.width = (startWidth + e.clientX - startX) + 'px';
//   original.style.height = (startHeight + e.clientY - startY) + 'px';
// }

// function stopDrag(e) {
//     document.documentElement.removeEventListener('mousemove', doDrag, false);    document.documentElement.removeEventListener('mouseup', stopDrag, false);
// }




//Remove element
function removeThis(){
  original.remove();
}


//Make DIV element draggable






// function dragElement(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     // if present, the header is where you move the DIV from:
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     // otherwise, move the DIV from anywhere inside the DIV:
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     // stop moving when mouse button is released:
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }

//Duplicate

var i = 0;

function duplicate() {
  if(original==undefined){
    original = document.getElementById('mydiv');
  }
    i++;
    var clone = original.cloneNode(true); // "deep" clone
    divstr = "mydiv" + i;
    console.log(divstr)
    clone.id = divstr;
    original.parentNode.appendChild(clone);
 

}

//Arrange

function arrange(e) {
  arrangeSelecter=document.getElementById("arrange");
  currentZIndex= original.style.zIndex;
  
  // document.getElementById("my")
  // console.log(document.getElementById("mydiv").style.zIndex);

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
  
}




//Checkboxes
//If all checkboxes are checked show div


function ShowHideDiv(chkDiv) {
  var dvGreatJob = document.getElementById("dvGreatJob");
  dvGreatJob.style.display = chkDiv.checked ? "block" : "none";
}