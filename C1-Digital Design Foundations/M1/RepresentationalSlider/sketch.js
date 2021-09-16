const NUM_IMGS = 6,
  imgs = [];

//changes the size of the canvas and the images
let w=1920/2;
let h=1080/2;

function preload() {
  for (let i = 1; i < NUM_IMGS; i++) {
   imgs[i] = loadImage('./preload/cat0'+ [i] +'.png');
  }
}

function setup() {
  createCanvas(w, h);
  setupSlider();
  
}

function draw() {
  image(imgs[slider.value()], 0, 0, w, h);
  
  
}

const setupSlider = _ => {
  let r = createP('REALISM');
  r.style('font-size', '24');
  r.style('font-family', 'Glory');
  r.position(width*0.5 - 140, height + 3)
  slider = createSlider(1, 5, 1);
  slider.position(width*0.5 - 75, height + 20);
  let a = createP('ABSTRACT');
  a.style('font-size', '24');
  a.style('font-family', 'Glory');
  a.position(width*0.5 + 70, height + 3)
  
};
