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
let bgImage;
let bgImage2;
let state;
let lastKeys;
let defaultAttack; 
let aniState; 
let idleb; 

function preload() {
  runRight = loadImage("assets/Run.png");
  idlePos = loadImage("assets/Idle.png");
  jumpPos = loadImage("assets/Jump.png");
  runBack = loadImage("assets/runB.png");
  crouch = loadImage("assets/Disguise.png");
  jumpPosB = loadImage("assets/jumpB.png"); 
  bgImage = loadImage("assets/moutian-pixel.gif");
  bgImage2 = loadImage("assets/city-pixle.gif");
  defaultAttack = loadImage("assets/Attack_2.png");
  idleb = loadImage("assets/idle.b.png"); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = "fight"; 
 
  
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
      },

      
      defaultAttack1: {
        imageSrc: defaultAttack, 
        framesMax: 3
      },
      idleback: {
        imageSrc:idleb, 
        framesMax: 5
      }

    }
  }); 

}

function draw() {
  if (state === "fight") {
    background(220);
    image(bgImage, 0, 0, width, height);
    playerEx.update(); 
    playerEx.display();
    console.log(playerEx.framesMax); 



    if (keys.a.pressed === true && lastKeys === "a") {
      playerEx.velocity.x = -5;
    }
    else if (keys.d.pressed === true && lastKeys === "d"){
      playerEx.velocity.x = 5;
    }
    
    if (playerEx.velocity.x === 0 && playerEx.velocity.y === 0) {
      playerEx.framesMax = playerEx.sprites.idle.framesMax;
      if (lastKeys === 'a') {
        playerEx.image = playerEx.sprites.idleback.imageSrc;      }

      else {
        
        playerEx.image = playerEx.sprites.idle.imageSrc;
      }
      
      
  
    }
  }
}
  
//Movement
  
window.addEventListener('keydown', (event) => {

  switch (event.key) {
  case 'd':
    keys.d.pressed = true;
    lastKeys = "d";
    playerEx.framesMax = playerEx.sprites.run.framesMax;
    playerEx.image = playerEx.sprites.run.imageSrc;


    break;
    
  case 'a':
    keys.a.pressed = true;
    lastKeys = "a"; 
    playerEx.framesMax = playerEx.sprites.runback.framesMax;
    playerEx.image = playerEx.sprites.runback.imageSrc;
 


    break;
    
  case 'w':
    playerEx.velocity.y = -20; 
    break;

  case "e":
    playerEx.attack();
    playerEx.image = playerEx.sprites.defaultAttack1.imageSrc;
    playerEx.framesMax = playerEx.sprites.defaultAttack1.framesMax;


  }
});

window.addEventListener('keyup', (event) => {
  

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


