let img;

function preload() {
  img = loadImage('./preload/lake.jpg');
}

function setup() {
  createCanvas(1080, 720);
  setupSlider();
}

function draw() {
  val = slider.value();
  image(img, 0, 0, 1080, 720);
  filter(BLUR, val);
 
}


const setupSlider = _ => {
  let directions = createP('Move the slider to change the blur level');
  directions.style('font-size', '24');
  directions.style('font-family', 'Arial');
  directions.position(width*0.5 - 160, height - 10)
  slider = createSlider(1, 20, 1, 1);
  slider.position(width*0.5 - 125, height + 25);
  slider.style('width', '200px');
}