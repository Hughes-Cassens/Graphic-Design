
let picker, value1, colorDiv;
let valueFocused= false;

function setup() {
  noCanvas()
  value = select("#hex-code");
  picker = select("#picker");
  colorDiv = select("#color");
  value.changed(() => {
    picker.value(value.value());
    update();
  });
  value.elt.onfocus = () => valueFocused = true;
  value.elt.onblur = () => valueFocused = false;
}

function update(){
  colorDiv.style("background", picker.value());
  colorMode(HSB);
}

function draw() {
  if (!valueFocused) {
    value.value(picker.value());
    update();
  }
}