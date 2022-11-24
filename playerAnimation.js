// CS30 Major Project
// Anjana Samarasinghe


let playerImage;
let scalar = 3.5;

function preload() {
  playerImage = loadImage("Assets/Run.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);
  image(playerImage, mouseX, mouseY, playerImage.width*scalar, playerImage.height*scalar);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    scalar = scalar * 1.5;
  }
  else if (keyCode === DOWN_ARROW) {
    scalar = scalar * 0.75;
  }
}

