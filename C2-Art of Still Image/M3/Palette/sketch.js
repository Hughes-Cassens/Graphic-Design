//Color Palette Generator by simontiger

let picker, value1, colorDiv;
let valueFocused= false;
let click=false;
let randomColor;

function setup() {
  noCanvas();
  value = select("#hex-code");
  picker = select("#picker");
  colorDiv = select("#color");
  random = select("#randomColor");
  value.changed(() => {
    picker.value(value.value());
    update();
  });
  value.elt.onfocus = () => valueFocused = true;
  value.elt.onblur = () => valueFocused = false;
}

function update() {

  colorDiv.style("background", picker.value());
  colorMode(HSB);
  const baseColor           = color(picker.value());
  const analogous1          = color((hue(baseColor) + 330) % 360, saturation(baseColor), brightness(baseColor));
  const analogous3          = color((hue(baseColor) +  30) % 360, saturation(baseColor), brightness(baseColor));
  const complementary       = color((hue(baseColor) + 180) % 360, saturation(baseColor), brightness(baseColor));
  const splitComplementary2 = color((hue(baseColor) + 150) % 360, saturation(baseColor), brightness(baseColor));
  const splitComplementary3 = color((hue(baseColor) + 210) % 360, saturation(baseColor), brightness(baseColor));
  const triadic2            = color((hue(baseColor) + 120) % 360, saturation(baseColor), brightness(baseColor));
  const triadic3            = color((hue(baseColor) + 240) % 360, saturation(baseColor), brightness(baseColor));
  const tetradic2           = color((hue(baseColor) +  60) % 360, saturation(baseColor), brightness(baseColor));
  const square2             = color((hue(baseColor) +  90) % 360, saturation(baseColor), brightness(baseColor));
  const square4             = color((hue(baseColor) + 270) % 360, saturation(baseColor), brightness(baseColor));
  const shades = [];
  const tints  = [];
  const tones  = [];
  for (let i = 0; i < 15; i++) {
    shades.push(color(hue(baseColor), saturation(baseColor), map(i, 0, 14, brightness(baseColor), 0)));
  }
  for (let i = 0; i < 15; i++) {
    tints.push(color(hue(baseColor), map(i, 0, 14, saturation(baseColor), 0), map(i, 0, 14, brightness(baseColor), 100)));
  }
  for (let i = 0; i < 15; i++) {
    tones.push(color(hue(baseColor), map(i, 0, 14, saturation(baseColor), 0), brightness(baseColor)));
  }
  select("#analogous1").style("background", analogous1);
  select("#analogous2").style("background", baseColor);
  select("#analogous3").style("background", analogous3);
  select("#complementary1").style("background", baseColor);
  select("#complementary2").style("background", complementary);
  select("#split-complementary1").style("background", baseColor);
  select("#split-complementary2").style("background", splitComplementary2);
  select("#split-complementary3").style("background", splitComplementary3);
  select("#triadic1").style("background", baseColor);
  select("#triadic2").style("background", triadic2);
  select("#triadic3").style("background", triadic3);
  select("#tetradic1").style("background", baseColor);
  select("#tetradic2").style("background", tetradic2);
  select("#tetradic3").style("background", complementary);
  select("#tetradic4").style("background", triadic3);
  select("#square1").style("background", baseColor);
  select("#square2").style("background", square2);
  select("#square3").style("background", complementary);
  select("#square4").style("background", square4);
  for (let i = 0; i < 15; i++) {
    select(`#shade${i+1}`).style("background", shades[i]);
  }
  for (let i = 0; i < 15; i++) {
    select(`#tint${i+1}`).style("background", tints[i]);
  }
  for (let i = 0; i < 15; i++) {
    select(`#tone${i+1}`).style("background", tones[i]);
  }
}


function generateRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = "#";
  for (var i =0; i <6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// function mouseClicked(e){
//   console.log("I clicked")
//   randomColor=generateRandomColor();
//   value.value(randomColor);
//   picker.value(randomColor);
//   update();
// }

function buttonClicked(e){
  console.log("I clicked")
  randomColor=generateRandomColor();
  value.value(randomColor);
  picker.value(randomColor);
  update();
}

function draw() {
  if (!valueFocused) {
    value.value(picker.value());
    update();
  }
}