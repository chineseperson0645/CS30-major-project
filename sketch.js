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
  }
};

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
let state;
let lastKeys; 



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
  state = "fight"; 
  // playerWidth = 96; 
  // playerHeight = 96; 
  // frameX = 0; 
  // frameY = 0;
  // gameFrame = 0;
  // staggerFrames = 7;
  // staggerFrames2 = 3; 
  // player1 = new mainPlayer(runRight,idlePos, jumpPos,runBack, crouch, jumpPosB, move1, 0,0,5,100); 
  // timer = 0;
  // move1 = true;
  
  playerEx = new Player({
    velocity: {
      x: 0,
      y: 0
    },
    postion: {
      x: 0, 
      y: 0
    },

    offset: {
      x:-50,
      y:30
    },
    imageSrc: idlePos,
    framesMax: 5, 
    
    sprites: {
      idle :{
        imageSrc: idlePos,
        framesMax: 5
      },
      
      run:{
        imageSrc: runRight,
        framesMax: 6
      },
      runback: {
        imageSrc: runBack, 
        framesMax: 6
      }

    }
  }); 

}

function draw() {
  if (state === "fight") {
    background(220);
    image(bgImage, 0, 0, width, height);
    // player1.move();
    // playerEx.movement(); 
    playerEx.update(); 
    playerEx.display();

    playerEx.image = playerEx.sprites.idle.imageSrc; 


    if (keys.a.pressed === true && lastKeys === "a") {
      playerEx.velocity.x = -5;
      playerEx.image = playerEx.sprites.runback.imageSrc; 


    }
    else if (keys.d.pressed === true && lastKeys === "d"){
      playerEx.velocity.x = 5;
      playerEx.image = playerEx.sprites.run.imageSrc; 


    }

    window.addEventListener('keydown', (event) => {
      // playerEx.image = playerEx.sprites.idle.imageSrc; 

      switch (event.key) {
      case 'd':
        keys.d.pressed = true;
        lastKeys = "d";
        // playerEx.image = playerEx.sprites.run.imageSrc; 
        break;
        
      case 'a':
        keys.a.pressed = true;
        lastKeys = "a"; 
        // playerEx.image = playerEx.sprites.runback.imageSrc; 

        break;
        
      case 'w':
        playerEx.velocity.y = -20; 
        break;

      case "e":
        playerEx.attack(); 
      }
    });
    
    window.addEventListener('keyup', (event) => {
      // playerEx.image = playerEx.sprites.idle.imageSrc; 

      switch (event.key) {
      case 'd':
        playerEx.velocity.x = 0; 
        keys.d.pressed = false; 
        break ;
          
      case 'a':
        keys.a.pressed = false;
        playerEx.velocity.x = 0; 
        break;
        
      case 'w':
        keys.w.pressed = false; 
        break;
      }
    });
  }
  // console.log(playerEx.gameFrame);

}

   

