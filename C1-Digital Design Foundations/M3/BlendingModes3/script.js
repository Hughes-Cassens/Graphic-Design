const form = document.querySelector('.input-field');
const background = document.querySelector('.main');
const updateBlendMode = () => {
const selection = document.querySelector('.blends').value;
  $("#image3").css("mix-blend-mode",selection);
  $("#image1").css("mix-blend-mode",selection);
  $("#image2").css("mix-blend-mode",selection);
};
var sliderImage1 = document.getElementById('image1');
var sliderImage2 = document.getElementById('image2');
var sliderCircle = document.getElementById('image3');


$("#topImage").slider({
  value: 50,
  min: 0,
  max: 95,
  slide: handleSlideChangeImage3
})

$("#middleImage").slider({
  value: 50,
  min: 0,
  max: 95,
  slide: handleSlideChangeImage2
})

$("#bottomImage").slider({
  value: 50,
  min: 0,
  max: 95,
  slide: handleSlideChangeImage1
});





function handleSlideChangeImage1(event,sliderImage1) {
  $("#image1").css("opacity",sliderImage1.value + "%")
 
}
function handleSlideChangeImage2(event,sliderImage2) {
  $("#image2").css("opacity",sliderImage2.value + "%")
  
}
function handleSlideChangeImage3(event, sliderImage3){
  $("#image3").css("opacity",sliderImage3.value + "%");
}



form.addEventListener('submit',(e) => {
  e.preventDefault();
});
 
form.addEventListener('change',() => {
  updateBlendMode();
});
 
updateBlendMode();
  
    
    
    
    


