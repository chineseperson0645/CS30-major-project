// CS30 Major Project
// Anjana Samarasinghe




let states; 
let playerImg; 
let player1; 
let playerWidth;
let playerHeight;
let frameX; 
let gameFrame; 
let staggerFrames;
let playerAnimations;
let animationStates;

function preload() {
  playerImg = loadImage("assets/Run.png"); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  states = "fight";
  playerWidth = 96;
  playerHeight = 96;
  player1 =  new mainPlayer(playerImg, 0, 0, 5, 100);
  frameX = 0;
  gameFrame = 0;
  staggerFrames = 6;
  playerAnimations = [];
  animationStates = [
    {
      name: "run",
      frames: 6, 
    }
  ];

}

function draw() {
  background(220);
  player1.move();
  player1.display(); 
}


// function moveRight () {
//   if (keyIsDown(RIGHT_ARROW)) {
//     player1.move();
//     player1.display(); 
//   }
// }