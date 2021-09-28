// var blurSlider = document.getElementById('slider');
// var blur = document.getElementsByClassName('blur')[0];
var blurVal;

// blurSlider.addEventListener("change", function() {
//   blur.style.filter = "blur("+this.value+"px)";
//   console.log(this.value);
// })

$("#slider").slider({
  value: 0,
  min: 0,
  max: 50,
  slide: handleSlideChange
})

function handleSlideChange(event, slider){
  blurVal = slider.value;
  $("#image").css('filter','blur('+ blurVal +'px)');
  console.log(blurVal);
}