function preload() {
  img_orig =
    loadImage("./preload/stairs.png");
  img_mask =
    loadImage("./preload/maskShape.png");
}

function setup() {
  createCanvas(window.innerWidth, 720);
  textSize(20);

  btnBlur =
    createButton("Add a mask to the image");
  btnBlur.position(1000, 620);
  btnBlur.mousePressed(applyMask);
}

function draw() {
  clear();

  text("Click on the button to add " +
       "a mask to the image", 20, 20);
  text('Image:', 20, 60);
  image(img_orig, 20, 80, 720, 480);

  text("Mask:", 780, 220);
  image(img_mask, 780, 100, 720, 480);
}

function applyMask()
{
  // Apply the given mask to the image
  img_orig.mask(img_mask);
}