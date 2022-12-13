// CS30 Major Project
// Anjana Samarasinghe

const gravity = 0.2;

const keys = {
  a: {
    pressed: false
  },
  d: {
    pressed: false
  },
  w: {
    pressed: false
  }
}

let lastkey;

// let runRight;
// let runBack; 
// let idlePos;
// let jumpPos;
// let jumpPosB;  
// let crouch; 
// let playerHeight; 
// let playerWidth; 
// let frameX; 
// let frameY; 
let player1;
// let gameFrame;
// let staggerFrames;
// let staggerFrames2;
// let bgImage;
// let bgImage2;
// let timer;
// let move1;
let enmey1; 



function preload() {
  // runRight = loadImage("assets/Run.png");
  // idlePos = loadImage("assets/Idle.png");
  // jumpPos = loadImage("assets/Jump.png");
  // runBack = loadImage("assets/runB.png");
  // crouch = loadImage("assets/Disguise.png");
  // jumpPosB = loadImage("assets/jumpB.png"); 
  // bgImage = loadImage("assets/moutian-pixel.gif");
  // bgImage2 = loadImage("assets/city-pixle.gif");
  // move1 = loadImage("assets/Attack_2.png"); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // playerWidth = 96; 
  // playerHeight = 96; 
  // frameX = 0; 
  // frameY = 0;
  // gameFrame = 0;
  // staggerFrames = 7;
  // staggerFrames2 = 3; 
  ////Player Stuff////
  
  player1 = new mainPlayer({
    postion: {
    x: 0,
    y: 0
  },
  velocity: {
    x: 0, 
    y: 0
  }
})

  enmey1 = new mainPlayer({
    postion: {
    x: 400,
    y: 100
  },
  velocity: {
    x: 0, 
    y: 0
  }
})



}

function draw() {
  background(220);
  player1.update();
  enmey1.update();
  player1.display();
  enmey1.display();

  player1.velocity.x = 0;


  if (keys.a.pressed === true && lastkey === "a") {
    player1.velocity.x = -1; 
  }
  else if (keys.d.pressed === true && lastkey === "d"){
    player1.velocity.x = 1; 
  }
}

window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'd':
      keys.d.pressed = true;
      lastkey = "d"; 
      break
      
    case 'a':
       keys.a.pressed = true;
       lastkey = "a"; 
      break
      
    case 'w':
      player1.velocity.y = -10; 
    break 
  }
  console.log(event.key); 
})

window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'd':
      keys.d.pressed = false; 
      break 
      
    case 'a':
      keys.a.pressed = false; 
      break
    
    case 'w':
      keys.w.pressed = false; 
      break
  }

  console.log(event.key); 
})

