function preload() {
  img_orig =
    loadImage("./preload/stairs.png");
  img_mask =
    loadImage("./preload/maskShape.png");
}

function setup() {
  createCanvas(1088, 637);
  textSize(20);

  btnBlur =
    createButton("Add the mask to the image");
  btnBlur.position(600, 320);
  btnBlur.mousePressed(applyMask);
}

function draw() {
  clear();

  text("Click on the button to add " +
       "the mask to the image", 20, 20);
  text('Image:', 20, 60);
  image(img_orig, 20, 80, 360, 240);

  text("Mask:", 480, 120);
  image(img_mask, 480, 100, 360, 240);
}

function applyMask()
{
  // Apply the given mask to the image
  img_orig.mask(img_mask);
}
