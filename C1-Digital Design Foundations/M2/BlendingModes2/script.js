const form = document.querySelector('.input-field');
const background = document.querySelector('.main');
const updateBlendMode = () => {
const selection = document.querySelector('.blends').value;
  $("#image3").css("mix-blend-mode",selection);
  $("#image1").css("mix-blend-mode",selection);
  $("#image2").css("mix-blend-mode",selection);
};
var sliderTriangle = document.getElementById('image1');
var sliderSquare = document.getElementById('image2');
var sliderCircle = document.getElementById('sliderCircle');
var imageOP = document.getElementById("#image2")

function setOpacity(){
  $("#image2").css("opacity",sliderSquare.value + "%")
  console.log(sliderTriangle.value);
}


$("#topImage").slider({
  value: 50,
  min: 0,
  max: 95,
  slide: handleSlideChangeSquare
})

$("#bottomImage").slider({
  value: 50,
  min: 0,
  max: 95,
  slide: handleSlideChangeTriangle
});





function handleSlideChangeTriangle(event,sliderTriangle) {
  $("#image1").css("opacity",sliderTriangle.value + "%")
  console.log(sliderTriangle.value);
}
function handleSlideChangeSquare(event,sliderSquare) {
  $("#image2").css("opacity",sliderSquare.value + "%")
  console.log(sliderTriangle.value);
}




form.addEventListener('submit',(e) => {
  e.preventDefault();
});
 
form.addEventListener('change',() => {
  updateBlendMode();
});
 
updateBlendMode();
  
    
    
    
    


