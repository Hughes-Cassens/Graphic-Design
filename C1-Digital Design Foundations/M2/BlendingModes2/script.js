// const form = document.querySelector('.input-field');

//const background = document.querySelector('.main');

var sliderImage1 = document.getElementById('opacityFirst');
var sliderImage2 = document.getElementById('opacitySecond');
// var sliderImage3 = document.getElementById('opacityThird');
var blendingModes1 = document.getElementById('blendFirst');
var blendingModes2 = document.getElementById('blendSecond');
// var blendingModes3 = document.getElementById('blendThird');
var imgOne = document.getElementsByClassName('image1')[0];
var imgTwo = document.getElementsByClassName('image2')[0];
// var imgThree = document.getElementsByClassName('image3')[0];


blendingModes1.addEventListener("change", function() {
  const selection1 = blendingModes1.value;
  imgOne.style.mixBlendMode = selection1;
  //console.log(selection1)
})

blendingModes2.addEventListener("change", function() {
  const selection2 = blendingModes2.value;
  imgTwo.style.mixBlendMode = selection2;
  //console.log(selection2)
})

// blendingModes3.addEventListener("change", function() {
//   const selection3 = blendingModes3.value;
//   imgThree.style.mixBlendMode = selection3;
//   //console.log(selection3)
// })

const updateSecondBlendMode = () => {
  const selection = document.querySelector('.blendSecond').value;
    $("#image2").css("mix-blend-mode",selection);
};

const updateThirdBlendMode = () => {
  const selection = document.querySelector('.blendThird').value;
    $("#image3").css("mix-blend-mode",selection);
};


//Opacity Sliders
sliderImage1.addEventListener("input", function() {
  imgOne.style.opacity = this.value / this.max;
})

sliderImage2.addEventListener("input", function() {
  imgTwo.style.opacity = this.value / this.max;
})

// sliderImage3.addEventListener("change", function() {
//   imgThree.style.opacity = this.value / this.max;
// })


//Spencer I am so sorry

// var sliderTriangle = document.getElementById('opacityThird');
// var sliderSquare = document.getElementById('opacityFirst');
// var sliderCircle = document.getElementById('opacitySecond');
// var imageOP = document.getElementById("#image2");


// function setOpacity(){
//   $("#image3").css("opacity",sliderSquare.value + "%")
//   console.log(sliderTriangle.value);
// }


// $("#opacityFirst").slider({
//   value: 50,
//   min: 0,
//   max: 95,
//   slide: handleSlideChangeSquare,
// })

// $("#opacitySecond").slider({
//   value: 50,
//   min: 0,
//   max: 95,
//   slide: handleSlideChangeCircle
// });

// $("#opacityThird").slider({
//   value: 50,
//   min: 0,
//   max: 95,
//   slide: handleSlideChangeTriangle
// });


// function handleSlideChangeTriangle(event,sliderTriangle) {
//   $("#image1").css("opacity",sliderTriangle.value + "%")
//   console.log(sliderTriangle.value);
// }
// function handleSlideChangeSquare(event,sliderSquare) {
//   $("#image3").css("opacity",sliderSquare.value + "%")
//   console.log(sliderTriangle.value);
// }
// function handleSlideChangeCircle(event,sliderCircle){
//   $("#image2").css("opacity",sliderCircle.value + "%")
// }



// form.addEventListener('submit',(e) => {
//   e.preventDefault();
// });
 
// form.addEventListener('change',() => {
//   updateBlendMode();
// });
 
// updateFirstBlendMode();
// updateSecondBlendMode();
// updateThirdBlendMode();
  
    
    
    
    


