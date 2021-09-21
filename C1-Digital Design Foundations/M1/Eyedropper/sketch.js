let getColor;

function preload() {
  mountain = loadImage("./preload/mountain.png");
}

let w= 720;
let h = 480;

function setup() {
  createCanvas(window.innerWidth, h);
}

function draw() {
  clear();

  push();
	image(mountain, 0, 0, w, h);
	getColor = mountain.get(mouseX, mouseY);

	push();
	stroke(getColor[0], getColor[1], getColor[2]);
	fill(getColor[0], getColor[1], getColor[2]);
	ellipse(window.innerWidth*0.8, height * 0.3, 133, 133);
	pop();


	fill(getColor);
	ellipse(mouseX, mouseY, 33, 33);
	pop();

	push();
	fill(getColor[0]);
	noStroke();
	textSize(33);
	textFont('Source Code Pro');
	textAlign(CENTER, CENTER);
	textStyle(BOLD);
	text(rgbToHex(getColor[0], getColor[1], getColor[2]), window.innerWidth*0.8, height * 0.5);
	text(rgbToHsl(getColor), window.innerWidth*0.8, height * 0.6);
	pop();

}