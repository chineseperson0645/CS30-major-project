// CS30 Major Project
// Anjana Samarasinghe

const gravity = 0.7;  

let playerEx; 
let runRight;
let runBack; 
let idlePos;
let jumpPos;
let jumpPosB;  
let crouch; 
let playerHeight; 
let playerWidth; 
let frameX; 
let frameY; 
let player1;
let gameFrame;
let staggerFrames;
let staggerFrames2;
let bgImage;
let bgImage2;
let timer;
let move1; 



function preload() {
  runRight = loadImage("assets/Run.png");
  idlePos = loadImage("assets/Idle.png");
  jumpPos = loadImage("assets/Jump.png");
  runBack = loadImage("assets/runB.png");
  crouch = loadImage("assets/Disguise.png");
  jumpPosB = loadImage("assets/jumpB.png"); 
  bgImage = loadImage("assets/moutian-pixel.gif");
  bgImage2 = loadImage("assets/city-pixle.gif");
  move1 = loadImage("assets/Attack_2.png"); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  playerWidth = 96; 
  playerHeight = 96; 
  frameX = 0; 
  frameY = 0;
  gameFrame = 0;
  staggerFrames = 7;
  staggerFrames2 = 3; 
  player1 = new mainPlayer(runRight,idlePos, jumpPos,runBack, crouch, jumpPosB, move1, 0,0,5,100); 
  timer = 0;
  move1 = true;
//   playerEx = new Player({
//     velocity: {
//     x: 0,
//     y: 10
//   },
//   postion: {
//     x: 0, 
//     y: 0
//   },
// })

}

function draw() {
  background(220);

  
  image(bgImage, 0, 0, width, height);
  player1.move();
  // playerEx.update(); 
  // playerEx.display();
  
   
}

function cooldown1() { 
  if (timer === 0) { 
    timer = true; 
  }
  else {
    timer = false;
  }  
}


