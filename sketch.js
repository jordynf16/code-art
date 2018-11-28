var img1;
var img2;
var img3;
var xspeed = 4;
var xpos = 0;
function preload() {
img1 = loadImage("pixel space.jpg");
img2 = loadImage("star.png");
img3 = loadImage("rocket.png");
}

function setup() {
  createCanvas(1480, 1110);
}

function draw() {
  background(220, 5, 50);
  imageMode(CORNER);
  imageMode(CORNER);
  image(img1, 0, 0);
  image(img2, mouseX, mouseY);
  imageMode(CENTER);
  image(img3, 200, xpos);

  if (xpos > width) {
    xspeed = -4;
  }
  if (xpos < 0) {
    xspeed = 4;
  }
  xpos += xspeed;
}
