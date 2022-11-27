// CS30 Major Project
// Anjana Samarasinghe

let state; 
let playerImg; 
let player1; 

function preload() {
  playerImg = loadImage("assets/Run.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = "fight";
  player1 =  new mainPlayer(playerImg, 100, 100, 5, 100); 
  
}

function draw() {
  background(220);
  if (state === "fight"){
    player1.move(); 
    player1.display();
  }
}

