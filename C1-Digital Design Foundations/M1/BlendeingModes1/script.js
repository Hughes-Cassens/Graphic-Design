const form = document.querySelector('.input-field');
const background = document.querySelector('.main');
const updateBlendMode = () => {
const selection = document.querySelector('.blends').value;
  $("#image3").css("mix-blend-mode",selection);
  $("#image1").css("mix-blend-mode",selection);
  $("#image2").css("mix-blend-mode",selection);
};
var sliderTriangle = document.getElementById('sliderTriangle');
var sliderSquare = document.getElementById('sliderSquare');
var sliderCircle = document.getElementById('sliderCircle');
var imageOP = document.getElementById("#image2")

function setOpacity(){
  $("#image3").css("opacity",sliderSquare.value + "%")
  console.log(sliderTriangle.value);
}


$("#sliderSquare").slider({
  value: 50,
  min: 0,
  max: 95,
  slide: handleSlideChangeSquare
})

$("#sliderTriangle").slider({
  value: 50,
  min: 0,
  max: 95,
  slide: handleSlideChangeTriangle
});

$("#sliderCircle").slider({
  value: 50,
  min: 0,
  max: 95,
  slide: handleSlideChangeCircle
});



function handleSlideChangeTriangle(event,sliderTriangle) {
  $("#image1").css("opacity",sliderTriangle.value + "%")
  console.log(sliderTriangle.value);
}
function handleSlideChangeSquare(event,sliderSquare) {
  $("#image3").css("opacity",sliderSquare.value + "%")
  console.log(sliderTriangle.value);
}
function handleSlideChangeCircle(event,sliderCircle){
  $("#image2").css("opacity",sliderCircle.value + "%")
}



form.addEventListener('submit',(e) => {
  e.preventDefault();
});
 
form.addEventListener('change',() => {
  updateBlendMode();
});
 
updateBlendMode();
  
    
    
    
    


