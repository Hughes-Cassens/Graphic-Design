var blurSlider = document.getElementById('blur');
var blur = document.getElementsByClassName('blur')[0];

blurSlider.addEventListener("change", function() {
  blur.style.filter = "blur("+this.value+"px)";
  console.log(this.value);
})