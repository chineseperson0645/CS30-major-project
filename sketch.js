// CS30 Major Project
// Anjana Samarasinghe

const gravity = 0.7;

const keys = {
  a: {
    pressed: false
  },
  d: {
    pressed: false
  },
  w: {
    pressed: false
  },
  ArrowRight: {
    pressed: false
  },
  ArrowLeft: {
    pressed: false
  },
  ArrowUp: {
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
  },
  offset: {
    x: 0 , 
    y:0 
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
  },
  color: "blue",
  
  offset: {
    x: -50 , 
    y:0 
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
  enmey1.velocity.x = 0;

  
  //mainPlayer Movement
  if (keys.a.pressed === true && player1.lastKeys === "a") {
    player1.velocity.x = -5; 
  }
  else if (keys.d.pressed === true && player1.lastKeys === "d"){
    player1.velocity.x = 5; 
  }

  //enemy1 Movement 
  if (keys.ArrowLeft.pressed === true && enmey1.lastKeys === "ArrowLeft") {
    enmey1.velocity.x = -5; 
  }
  else if (keys.ArrowRight.pressed === true && enmey1.lastKeys === "ArrowRight"){
    enmey1.velocity.x = 5; 
  }

  // collision detection
  if (rectCol({rectangle1: player1, rectangle2: enmey1}) && player1.isAttacking) {
    player1.isAttacking = false; 
    console.log("detection"); 
  }
  //enemy collsion
  if (rectCol({rectangle1: enmey1, rectangle2: player1}) && enmey1.isAttacking) {
    enmey1.isAttacking = false;
    console.log("hazaa"); 
  }
}

window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'd':
      keys.d.pressed = true;
      player1.lastKeys = "d"; 
      break
      
    case 'a':
       keys.a.pressed = true;
       player1.lastKeys = "a"; 
      break
      
    case 'w':
      player1.velocity.y = -20; 
    break 

    case'e':
      player1.attack();
      break

    // Enemy Movement 
    case 'ArrowRight':
      keys.ArrowRight.pressed = true;
      enmey1.lastKeys = "ArrowRight"; 
      break
      
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = true;
      enmey1.lastKeys = "ArrowLeft"; 
      break
      
    case 'ArrowUp':
      enmey1.velocity.y = -20; 
    break

    case 'q':
    enmey1.attack(); 
    break 
  }
  
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

      //Enemy Movement
    case 'ArrowRight':
      keys.ArrowRight.pressed = false;
      break
    
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = false;
      break
    
    case 'ArrowUp':
      keys.ArrowUp.pressed = false;
      break
  }
 
})

function rectCol({rectangle1,rectangle2}) {
  return (rectangle1.attackBox.postion.x + rectangle1.attackBox.width >= rectangle2.postion.x && rectangle1.attackBox.postion.x <= rectangle2.postion.x + rectangle2.width && rectangle1.attackBox.postion.y + rectangle1.attackBox.height >= rectangle2.postion.y && rectangle1.attackBox.postion.y <= rectangle2.postion.y + rectangle2.height); 
}
