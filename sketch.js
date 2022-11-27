// CS30 Major Project
// Anjana Samarasinghe




let state; 
let playerImg; 
let player1; 
let playerWidth;
let playerHeight;
let frameX; 
let gameFrame; 
let staggerFrames;

function preload() {
  playerImg = loadImage("assets/Run.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = "fight";
  playerWidth = 96;
  playerHeight = 96;
  player1 =  new mainPlayer(playerImg, 0, 0, 5, 100);
  frameX = 0;
  gameFrame = 0;
  staggerFrames = 6; 
}

function draw() {
  background(220);
  player1.display(); 
}