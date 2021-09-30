var hueSlider = document.getElementById('hue');
var saturationSlider = document.getElementById('saturation');
var brightnessSlider = document.getElementById('brightness');
var alphaSlider = document.getElementById('alpha');
var hue = document.getElementsByClassName('hue')[0];
var saturation = document.getElementsByClassName('saturation')[0];
var brightness = document.getElementsByClassName('brightness')[0];
var alpha = document.getElementsByClassName('alpha')[0];

//hue
hueSlider.addEventListener("input", function() {
  hue.style.filter = "hue-rotate("+this.value+"deg)";
  // console.log(this.value+"deg");
})

//saturation
saturationSlider.addEventListener("input", function() {
  saturation.style.filter = "saturate("+this.value+"%)";
  // console.log(img.style.filter);
})

//brightness
brightnessSlider.addEventListener("input", function() {
  brightness.style.filter = "brightness("+this.value+"%)";
  // console.log(img.style.filter);
})

//alpha
alphaSlider.addEventListener("input", function() {
  alpha.style.filter = "opacity("+this.value+"%)";
  // console.log(img.style.filter);
})
