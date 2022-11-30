// CS30 Major Project
// Anjana Samarasinghe


let runRight;
let idlePos;
let jumpPos;  
let playerHeight; 
let playerWidth; 
let frameX; 
let frameY; 
let player1;
let gameFrame;
let staggerFrames;
let staggerFrames2;



function preload() {
  runRight = loadImage("assets/Run.png");
  idlePos = loadImage("assets/Idle.png");
  jumpPos = loadImage("assets/Jump.png"); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  playerWidth = 96; 
  playerHeight = 96; 
  frameX = 0; 
  frameY = 0;
  gameFrame =0;
  staggerFrames = 7;
  staggerFrames2 = 3; 
  player1 = new mainPlayer(runRight,idlePos, jumpPos, 0,0,5,100); 
  
}

function draw() {
  background(220);
  player1.move();
   
}