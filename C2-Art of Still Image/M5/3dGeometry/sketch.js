
let w = 1920/2;
let h = 1080/2;
let angle;

function setup() {
  createCanvas(w, h, WEBGL);
}

function draw() {
  background(200);
  ambientLight(50);
  directionalLight(255, 255, 255, 0.25, 0.25, 0);

  orbitControl();

  noStroke();
  // specularMaterial(250);
  normalMaterial();
  // ambientMaterial(250);
  // rotateZ(frameCount * 0.02);
  // rotateX(frameCount * 0.02);
  rotateX(-10)
  rotateY(180);
  box(200);
  // torus(150);

  angle += 0.07;
}

//change texture

//change primative

