// CS30 Major Project
// Anjana Samarasinghe


let runRight;
let idlePos;  
let playerHeight; 
let playerWidth; 
let frameX; 
let frameY; 
let player1;
let gameFrame;
let staggerFrames; 



function preload() {
  runRight = loadImage("assets/Run.png");
  idlePos = loadImage("assets/Idle.png"); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  playerWidth = 96; 
  playerHeight = 96; 
  frameX = 0; 
  frameY = 0;
  gameFrame =0;
  staggerFrames = 7; 
  player1 = new mainPlayer(runRight,idlePos, 0,0,5,100); 
  
}

function draw() {
  background(220);
  player1.move();
   
}